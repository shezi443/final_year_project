import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ListingController } from "../listing.controller";
import { ListingService } from "../listing.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bathroomCount: 42,
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  guestCount: 42,
  id: "exampleId",
  imageSrc: "exampleImageSrc",
  locationValue: "exampleLocationValue",
  price: 42,
  roomCount: 42,
  title: "exampleTitle",
};
const CREATE_RESULT = {
  bathroomCount: 42,
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  guestCount: 42,
  id: "exampleId",
  imageSrc: "exampleImageSrc",
  locationValue: "exampleLocationValue",
  price: 42,
  roomCount: 42,
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    bathroomCount: 42,
    category: "exampleCategory",
    createdAt: new Date(),
    description: "exampleDescription",
    guestCount: 42,
    id: "exampleId",
    imageSrc: "exampleImageSrc",
    locationValue: "exampleLocationValue",
    price: 42,
    roomCount: 42,
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  bathroomCount: 42,
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  guestCount: 42,
  id: "exampleId",
  imageSrc: "exampleImageSrc",
  locationValue: "exampleLocationValue",
  price: 42,
  roomCount: 42,
  title: "exampleTitle",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Listing", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ListingService,
          useValue: service,
        },
      ],
      controllers: [ListingController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /listings", async () => {
    await request(app.getHttpServer())
      .post("/listings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /listings", async () => {
    await request(app.getHttpServer())
      .get("/listings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /listings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/listings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /listings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/listings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /listings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/listings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/listings")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
