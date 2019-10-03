import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  HOST = environment.HOST_API
  BASE = environment.BASE_API
  constructor(private HttpClient: HttpClient) {
    console.log(environment.HOST_API);
  }
  
  getData()
  {
    return this.HttpClient.get(this.HOST+this.BASE+"/products");
  }
}
