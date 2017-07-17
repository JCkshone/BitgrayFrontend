import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-cost-parameter',
  templateUrl: './cost-parameter.component.html',
  styleUrls: ['./cost-parameter.component.css']
})
export class CostParameterComponent implements OnInit {
  costParameter: any = {
    operatorName: '',
    country: '',
    costForSecond: 0
  }
  constructor(private servicesRequest: GlobalService) { }

  ngOnInit() {
  }
  saveCostParameter() {
    debugger;
    this.servicesRequest.newCostParameter(this.costParameter).then((value) => {
      alert(value.message)
      this.costParameter = {
        operator: '',
        country: '',
        costForSecond: 0
      }
    }, (err) => {
      alert(err.message)
    })
  }

}
