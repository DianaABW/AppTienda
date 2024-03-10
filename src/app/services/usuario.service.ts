import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider ,signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  doc:any;
  constructor(private auth: Auth ) { }

  addUsuario({direccion,contraseña}:any){
    console.log('siiii');
    return createUserWithEmailAndPassword(this.auth,direccion, contraseña)
  }

  entra({direccion, contraseña}:any){
    console.log('siiii');
   return signInWithEmailAndPassword(this.auth, direccion,contraseña)
  }

  googleAutenticacion(){
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

}
