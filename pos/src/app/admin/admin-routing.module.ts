import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { AdminComponent } from "./admin/admin.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
const routes : Routes = [
 {path : "",component : AdminComponent , canActivate : [AuthGuardService] ,
    children : [
      {path: 'product-list' , component : ProductListComponent},
      {path: 'product-detail/:id' , component : ProductDetailComponent},
    ]
  },  
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class AdminRoutingModule {
    constructor(){
        console.log("Admin Routing Module Object Created...!");
    }
}