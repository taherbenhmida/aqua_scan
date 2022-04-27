import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url='http://localhost:8000/api/list_of_users';
  del_api='http://localhost:8000/api/delete_user';
  update_api='http://localhost:8000/api/update_user';
  single_user_api='http://localhost:8000/api/single_user';

  constructor(private http:HttpClient) { }

  listUsers(){
    return this.http.get<any>(this.api_url);
  }
  delUser(id:any){
    return this.http.delete<any>(this.del_api+'/'+id);
  }
  getSingleuser(id:any){
    return this.http.get<any>(this.single_user_api+'/'+id);
  }
  editUser(id:number,data:any){
    return this.http.put<any>(this.update_api+'/'+id,data);
  }
  editlog(id:number,data:any){
    return this.http.put<any>(this.update_api+'/'+id,data);
  }
  edit_lastlog(id:number,data:any){
    return this.http.put<any>(this.update_api+'/'+id,data);
  }
}
