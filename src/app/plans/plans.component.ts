import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Plan } from '../classes/plan';
import { AdminServiceService } from '../services/admin-service.service';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plans:any;

  plan:Plan;
  constructor(private _adminService:AdminServiceService) { 
    this.plan = new Plan();
    this.getAllPlans();
    
  }


  getAllPlans() {
    this._adminService.getAllPlansForAdmin("plan/get-all-plans").subscribe({
      next:data => {
        this.plans = data;
      },
      error:error => {
        console.log(error);
      }

    })
  }

  addPlan() {
    this._adminService.addPlanFromAdmin("plan/add-plan",this.plan).subscribe({
      next:data => {
        console.log('succesfully added plan');
        alert('plan added successfully...')
        this.getAllPlans();
      },
      error:error => {
        console.log('add plan failed');
      }

    });
  }

  deletePlan() {
    this._adminService.deletePlanFromAdmin("plan/delete-plan",this.plan.planId).subscribe({
      next:data => {
        console.log('succesfully deleted plan');
        this.getAllPlans();
      },
      error:error => {
        console.log('delete plan failed');
      }
    })
  }

  ngOnInit(): void {
  }

}
