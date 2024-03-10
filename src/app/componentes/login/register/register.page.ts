import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html'
})
export class RegisterPage {

    public migrupo1: FormGroup;
    private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    usua:any;
  constructor(private router: Router, private fire:UsuarioService) {
    this.migrupo1 = this.crear();
  }


  crear() {
    return new FormGroup({
      direccion: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
      contraseña: new FormControl('', [Validators.required]),
    });
  }
  get direccion() { return this.migrupo1.get('direccion'); }
  get cotraseña() { return this.migrupo1.get('contraseña'); }


  onRegister(){
    console.log(this.migrupo1.value);
    this.fire.addUsuario(this.migrupo1.value)
    .then(Response=> {
      console.log(Response);
    })
    .catch(error => console.log(error));
    this.router.navigate(['login']);
        
  }

}
