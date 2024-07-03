import { Module } from "@nestjs/common";
import { GraphQlModule } from "./graphql/graphql.module";
import { HttpModule } from "./https/http.module";


@Module({
  imports: [HttpModule, GraphQlModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class ApplicationModule{}