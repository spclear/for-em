import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
  imports: [SharedModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
  providers: [],
})
export class LayoutModule {}
