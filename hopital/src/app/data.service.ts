import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url='http://localhost:8000/api/list_of_users';
  del_api='http://localhost:8000/api/delete_user';
  update_api='http://localhost:8000/api/update_user';
  update_img='http://localhost:8000/api/update_img';
  single_user_api='http://localhost:8000/api/single_user';

  del_grade='http://localhost:8000/api/delete_grade';
  del_arme='http://localhost:8000/api/delete_arme';
  del_service='http://localhost:8000/api/delete_service';

  add_grade_api='http://localhost:8000/api/add_grade';
  add_arme_api='http://localhost:8000/api/add_arme';
  add_service_api='http://localhost:8000/api/add_service';

  post_presence_api='http://localhost:8000/api/post_presence';
  get_presence_api='http://localhost:8000/api/get_presence';

  post_mission_api='http://localhost:8000/api/post_mission';
  post_punition_api='http://localhost:8000/api/post_punition';

  get_models_parameters_api='http://localhost:8000/api/get_models_parameters';
  prediction_api='http://localhost:8000/api/prediction';

  absence_api='http://localhost:8000/api/absence';
  constructor(private http:HttpClient) { }

  listUsers(){
    return this.http.get<any>(this.api_url);
  }
  delUser(id:any){
    return this.http.delete<any>(this.del_api+'/'+id);
  }
  delete_grade(id:any){
    return this.http.delete<any>(this.del_grade+'/'+id);
  }
  delete_service(id:any){
    return this.http.delete<any>(this.del_service+'/'+id);
  }
  delete_arme(id:any){
    return this.http.delete<any>(this.del_arme+'/'+id);
  }
  add_grade(data:any){
    return this.http.post<any>(this.add_grade_api,data);
  }
  add_service(data:any){
    return this.http.post<any>(this.add_service_api,data);
  }
  add_arme(data:any){
    return this.http.post<any>(this.add_arme_api,data);
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
  edit_img(id:number,data:any){
    return this.http.put<any>(this.update_img+'/'+id,data);
  }
  edit_lastlog(id:number,data:any){
    return this.http.put<any>(this.update_api+'/'+id,data);
  }
  add_presence(data:any){
    return this.http.post<any>(this.post_presence_api,data);
  }
  get_presence(){
    return this.http.get<any>(this.get_presence_api);
  }
  add_mission(data:any){
    return this.http.post<any>(this.post_mission_api,data);
  }
  add_punition(data:any){
    return this.http.post<any>(this.post_punition_api,data);
  }
  get_models_parameters(id:number){
    return this.http.get<any>(this.get_models_parameters_api+'/'+id);
  }
  get_prediction(data:any){
    return this.http.post<any>(this.prediction_api,data)
  }
  get_nbre_absence(cin:number,annee:number,semestre:number){
    return this.http.get<any>(this.absence_api+'/'+cin+'/'+annee+'/'+semestre)
  }
}
