import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardHomeComponent } from './admin-dashboard-home/admin-dashboard-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllCustomersForAdminComponent } from './all-customers-for-admin/all-customers-for-admin.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { HelpComponent } from './help/help.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { OrdersForAdminComponent } from './orders-for-admin/orders-for-admin.component';
import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { ProductsComponent } from './products/products.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ReportsToAdminComponent } from './reports-to-admin/reports-to-admin.component';
import { UserDashboardHomeComponent } from './user-dashboard-home/user-dashboard-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { UserSettingsDashboardComponent } from './user-settings-dashboard/user-settings-dashboard.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [
  // {path:'login',component:UserLoginComponent},
  // {path:'forgot-password',component:UserForgotPasswordComponent},
  // {path:'register-user',component:UserSignupComponent},
  {path:'user-dashboard',component:UserDashboardComponent,children:[
      {path:'',redirectTo:'dashboard-home',pathMatch:'full'},
      {path:'dashboard-home',component:UserDashboardHomeComponent},
      {path:'',redirectTo:'user-dashboard/dashboard-home',pathMatch:'full'},
      {path:'user-order-history',component:UserOrderHistoryComponent},
      {path:'user-profile',component:UserProfileComponent},
      {path:'user-settings',component:UserSettingsDashboardComponent},
      {path:'company-services',component:CompanyServicesComponent},
      {path:'help',component:HelpComponent},
      {path:'recharge',component:RechargeComponent},
      {path:'payment',component:PaymentComponent},
      {path:'bill-invoice',component:BillInvoiceComponent},
      {path:'user-products',component:UserProductsComponent},
      {path:'user-reports',component:UserReportsComponent}
  ]},
  {path:'app-home',component:AppHomeComponent},
  
  // {path:'admin-login',component:AdminLoginComponent},

  {path:'customer-details-for-admin',component:AllCustomersForAdminComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent, children:[
    {path:'display-all-customers',component:AllCustomersForAdminComponent},
    {path:'',redirectTo:'admin-dashboard-home',pathMatch:'full'},
    {path:'plans',component:PlansComponent},
    {path:'orders-for-admin',component:OrdersForAdminComponent},
    {path:'admin-reports',component:ReportsToAdminComponent},
    {path:'admin-dashboard-home',component:AdminDashboardHomeComponent}
  ]},
  // {path:'products',component:ProductsComponent},
  // {path:'help',component:HelpComponent},


  {path:'home-nav',component:HomeNavComponent,children:[
    {path:'login',component:UserLoginComponent},
    // {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'products',component:ProductsComponent},
    {path:'register-user',component:UserSignupComponent},
    {path:'admin-login',component:AdminLoginComponent},
    {path:'help',component:HelpComponent},
    {path:'forgot-password',component:UserForgotPasswordComponent},
  ]},
  {path:'',redirectTo:'home-nav',pathMatch:'full'},
  {path:'**',redirectTo:'home-nav',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
