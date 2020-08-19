import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'purchase-orders',
    loadChildren: () => import('../pages/purchase-orders/purchase-orders.module').then( m => m.PurchaseOrdersPageModule)
  },
  {
    path: 'goods-receipt-notes',
    loadChildren: () => import('../pages/goods-receipt-notes/goods-receipt-notes.module').then( m => m.GoodsReceiptNotesPageModule)
  },
  {
    path: 'purchase-orders/:id',
    loadChildren: () => import('../pages/purchase-order-view/purchase-order-view.module').then( m => m.PurchaseOrderViewPageModule)
  },
  {
    path: 'fulfill-order/:id',
    loadChildren: () => import('../pages/fulfill-order/fulfill-order.module').then( m => m.FulfillOrderPageModule)
  },
  {
    path: 'goods-receipt-notes/:id',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('../pages/goods-receipt-notes-view/goods-receipt-notes-view.module').then( m => m.GoodsReceiptNotesViewPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'order-confirmation',
    loadChildren: () => import('../pages/order-confirmation/order-confirmation.module').then( m => m.OrderConfirmationPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
