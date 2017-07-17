import { Component, OnInit, Inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-form-recharge',
  templateUrl: './form-recharge.component.html',
  styleUrls: ['./form-recharge.component.css']
})
export class FormRechargeComponent implements OnInit {

  public phoneInfo: any = {
    numberCellphone: 0,
    costParameterId: '',
    userRechargeId: '596857422cc78f052b32d9f1',
    moneyInAccount: 0
  }
  costsParameter: any;

  constructor(private servicesRequest: GlobalService) {

  }

  ngOnInit() {
    this.getCostParameter()
  }

  saveRecharge(obj: any) {
    let costParameterId: any = document.getElementById("selectId");
    this.phoneInfo.costParameterId = costParameterId.value;
    this.servicesRequest.newRecharge(this.phoneInfo).then((value) => {
      alert(value.message)
      this.phoneInfo = {
        numberCellphone: 0,
        costParameterId: '',
        userRechargeId: '596857422cc78f052b32d9f1',
        moneyInAccount: 0
      }
    }, (err) => {
      alert(err.message)
    })
  }

  getCostParameter() {
    this.servicesRequest.getCostParameter().then((value) => {
      this.costsParameter = value.costs;
      $(document).ready(function() {
        $('select').material_select();
        $('.dropdown-button').dropdown('open');
      });

    }, (err) => {
    })
  }

  setModelValue(obj) {
  }

}
