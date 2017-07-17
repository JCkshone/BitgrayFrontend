import { RouterModule, Routes } from '@angular/router';
import { FormRechargeComponent } from './components/form-recharge/form-recharge.component';
import { CostParameterComponent } from './components/cost-parameter/cost-parameter.component';

const APP_ROUTES: Routes = [
  { path: 'recharge', component: FormRechargeComponent },
  { path: 'costParameter', component: CostParameterComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
