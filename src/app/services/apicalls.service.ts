import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private http:HttpClient) { }
  getprofile(){
    return this.http.get('https://63092014f8a20183f76ef345.mockapi.io/api/v1/profile')
  }
  getassessments(){
    return this.http.get('https://63092014f8a20183f76ef345.mockapi.io/api/v1/assessments')
  }
  getComments(){
    return this.http.get('https://63092014f8a20183f76ef345.mockapi.io/api/v1/comments')
  }
}
