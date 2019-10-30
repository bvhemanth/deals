import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AngularFireObject, AngularFireList ,AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  HOST = environment.HOST_API;
  BASE = environment.BASE_API;
  items;
  basePath;
  config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };

  constructor(private HttpClient: HttpClient,private db: AngularFireDatabase) {
    console.log(environment.HOST_API);
  }
  
  getData()
  {
    return this.db.list('/').valueChanges()
  }
  getItemsList(query={}){
    this.items = this.db.list(this.basePath);
    return this.items
  }
}
