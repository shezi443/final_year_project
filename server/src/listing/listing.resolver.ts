import * as graphql from "@nestjs/graphql";
import { ListingResolverBase } from "./base/listing.resolver.base";
import { Listing } from "./base/Listing";
import { ListingService } from "./listing.service";

@graphql.Resolver(() => Listing)
export class ListingResolver extends ListingResolverBase {
  constructor(protected readonly service: ListingService) {
    super(service);
  }
}
