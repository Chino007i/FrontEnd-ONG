import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password='';

  constructor(private router:Router) { }
  ngOnInit() {
  }
validar(){
  if(this.username=="admin"&&this.password=="admin"){
    alert("Usuario Valido");
this.router.navigate(['/Inicio']);

  }
  else{
    alert("Usuario no Registrado");
  }

}


}
