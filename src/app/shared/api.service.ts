import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { OrderModel, Products, ProductsAr } from '../dashboard/orders/order.interface';
import { Employed } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlUser = 'http://localhost:5000/users';
  urlOrders = 'http://localhost:5000/orders';
  urlProducts = 'http://localhost:5000/products'
  productsOrder!: ProductsAr;
  productsOrderAr: ProductsAr[] = []
  order: OrderModel[] = [];
  constructor(private http: HttpClient, private auth: AuthService) { }
  getEmploye() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    //  console.log('Bearer User',sessionStorage.getItem('token'));
    const requestOptions = { headers: headers };
    return this.http.get<Employed>(this.urlUser, requestOptions)
      .pipe(map(res => {
        return res;
      }))
  }
  updateEmployee(data: Employed, id: number) {
    return this.http.put<any>(this.urlUser + '/' + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }
  deleteEmploye(id: number) {
    return this.http.delete(this.urlUser + '/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getAllProduct() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });

    const requestOptions = { headers: headers };
    return this.http.get<Products[]>(this.urlProducts, requestOptions)
      .pipe(map(res => {
        return res;
      }))
  }
  getFilterProduct() {
    return this.http.get<any>(this.urlProducts)
  }
  addAllProduct(formProducts: any) {
    return this.http.post(this.urlProducts, formProducts)
  }
  addOrder(formProducts: any) {
    return this.http.post(this.urlOrders, formProducts)
      .pipe(map(res => {
        return res;
      }))
  }
  deleteProduct(id: number) {
    return this.http.delete(this.urlProducts + '/' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateProduct(data: any, id: number) {
    return this.http.put<any>(this.urlProducts + '/' + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }
  getAllOrder() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    //  console.log('Bearer User',sessionStorage.getItem('token'));
    const requestOptions = { headers: headers };
    return this.http.get<any>(this.urlOrders, requestOptions)
      .pipe(map(res => {
        return res;
      }))
  }
  updateOrderState(data: OrderModel, id: number) {
    return this.http.put(this.urlOrders + '/' + id, data)
      .pipe(map(res => {
        return res;
      }))
  }
}
