import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,  Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {
  // login: FormGroup|any;
  // constructor(private _http:HttpClient, private _route:Router){}
Cuentas = '';

  url = 'http://localhost:5000/auth';
  constructor(private http: HttpClient) {
    // this.http.get(this.url).toPromise().then(data => {
    //   // console.log(data);
    //   this.Cuentas = JSON.stringify(data);

    // })
  }

  ngOnInit(): void {
  // this.login = new FormGroup({
  //   fname: new FormControl('', [Validators.required, Validators.email]),
  //   pasword: new FormControl('',  [Validators.required, Validators.minLength(6), 
  //     Validators.maxLength(15) ])
  // })

}
login =  new FormGroup({
  fname: new FormControl('', [Validators.required, Validators.email]),
  pasword: new FormControl('',  [Validators.required, Validators.minLength(6), 
    Validators.maxLength(15) ])
})
logindata(login: any){
  console.log(login.value)
  // console.log(this.login.value)
  const user = login.value.fname;
  const pasword = login.value.pasword;
  console.log(user);
  console.log(pasword);

  this.http.get(this.url).toPromise().then(data => {
    // console.log(data);
    this.Cuentas = JSON.stringify(data);
    
   const users = this.Cuentas
  //  console.log(users); 
   if(users.includes(user)&& users.includes(pasword)){
    console.log(user,"registrado");
    console.log(pasword,"registrado");
   }else{
        console.log('No te encuentras registrado habla con tu administrador')
   }
  })
}

get email():FormControl{
  return this.login.get("fname") as FormControl
}
get password():FormControl{
  return this.login.get("pasword") as FormControl
}
}
