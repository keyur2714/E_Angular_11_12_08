import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin/admin.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEntryComponent } from "./product-entry/product-entry.component";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
    declarations : [
        AdminComponent,
        ProductEntryComponent,
        ProductListComponent,
        ProductDetailComponent
    ],
    imports :[
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    providers :[

    ]
})
export class AdminModule {
    constructor(){
        console.log("Admin Module Object Created...!");
    }
}