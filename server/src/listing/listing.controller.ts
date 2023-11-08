import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ListingService } from "./listing.service";
import { ListingControllerBase } from "./base/listing.controller.base";

@swagger.ApiTags("listings")
@common.Controller("listings")
export class ListingController extends ListingControllerBase {
  constructor(protected readonly service: ListingService) {
    super(service);
  }
}
