import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(data:any){
this.http.post('http://localhost:5000/auth', data).subscribe((result: any)=>{
  
localStorage.setItem('token', result.token)
})
//   }
}
}