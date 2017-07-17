import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GlobalService {
  baseUrl: string = 'http://localhost:3002/api/'
  costParameterInfo: any = {}

  constructor(private http: Http) {
  }



  newRecharge(objInfo: any): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'cellPhone/newRecharge', objInfo, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  newCostParameter(objInfo: any): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + 'costParameter/newCost', objInfo, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  getCostParameter() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + 'costParameter/getCosts', options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
