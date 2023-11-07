import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //llama a la coleccion de usuarios de la BD
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  //referencia a la BD
  constructor(private database: AngularFirestore ) { 
    //asigna los usuarios ingresados la coleccion a la coleccion usuarios de la BD 
    this.usuariosCollection = this.database.collection<Usuario>('usuarios')
  }

agregarUsuario(usuarios:Usuario, id:string){
   // RESOLVE -> resuelto (similar al then)
    // REJECT -> rechazo (similar al catch)
    return new Promise (async(resolve,reject) => {}) 
}
}
