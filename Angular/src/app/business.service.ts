import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/mastersupplier';

  constructor(private http: HttpClient) { }

  addBusiness(item_code, vendor_code, plant_code) {
    const obj = {
      item_code: item_code,
      vendor_code: vendor_code,
      plant_code: plant_code
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(item_code, vendor_code, plant_code, id) {

    const obj = {
      item_code: item_code,
      vendor_code: vendor_code,
      plant_code: plant_code
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
