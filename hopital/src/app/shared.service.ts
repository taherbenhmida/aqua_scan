import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly header = new HttpHeaders({ 'Content-Type': 'application/json' })
  readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }
  // private messageSource = new BehaviorSubject<any> ({"nom":null,
  // "prenom":null});
  test ={"cin":null};
  personnelList={ 
    "matricule": null,
    "matr_corps": null,
    "cd_grd": null,
    "grade": null,
    "iu": null,
    "cin":null,
    "dtecin": null,
    "date_nomination": null,
    "prenom": null,
    "nom": null,
    "prenom_pere": null,
    "prenom_mere": null,
    "situation_familiale": null,
    "date_naissance": null,
    "lieu_naiss": null,
    "cd_spec": null,
    "specialite": null,
    "qualification": null,
    "date_entr_serv": null,
    "date_deb_contrat": null,
    "date_fin_contrat": null,
    "adresse": null,
    "telephone": null,
    "telephone2": null,
    "base": null,
    "unite": null,
    "position": null,
    "obsrv": null,
    "idunique": null,
    "passp1": null,
    "passp2": null,
    "famille": null,
    "secteur": null,
    "categ": null,
    "dtefincim": null,
    "cim": null,
    "taille": null,
    "poids": null,
    "sexe": null,
    "pointure": null,
    "gpsanguin": null,
    "etatcivil": null,
    "img": null,
    "service": null,
    "code_fonction": null,
    "prenom_partenaire": null,
    "prenom_grandpere": null,
    "nbr_enfant": null,
    "armee": null,
    "prenomf": null,
    "nomf": null,
    "arme": null,
    "etat": null,
    "fonction": null,
    "groupe": null,
    "office": null,
    "situation": null,
    "niv_intel": null,
    "origine_recrutement": null,
    "date_diplome": null,
    "qualification_militaire": null,
    "date_entr_hopi": null,
    "date_specialite": null,
    "date_fonction": null,
    "date_qualif_militaire": null};

    

    


  getPersonnel():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/personnel/');
  }
  getGrade():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/grade/');
  }
  getArme():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/arme/');
  }
  getQualificationMilitaire():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/qualification_mil/');
  }
  getBureau():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/bureau/');
  }
  getFonction():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/fonction/');
  }
  getSpecialite():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/specialite/');
  }
  getSituation():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/situation/');
  }
  getService():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/service/');
  }
  
  getArchive():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/archive/');
  }
  addPersonne(personnelList) : Observable<any> {
    return this.http.post(this.APIUrl + '/personnel/',JSON.stringify(personnelList),{
      headers : this.header
    });
  }
  updatePersonne(personne) : Observable<any> {
    return this.http.put(this.APIUrl + '/personnel/',JSON.stringify(personne),{
      headers : this.header
    });
  }
  deletePersonne(personne) : Observable<any> {
    return this.http.request('delete',this.APIUrl + '/personnel/',{body:JSON.stringify(personne)});
  }

  addArchive(personnelList) : Observable<any> {
    return this.http.post(this.APIUrl + '/archive/',JSON.stringify(personnelList),{
      headers : this.header
    });
  }

  deleteArchive(personne) : Observable<any> {
    return this.http.request('delete',this.APIUrl + '/archive/',{body:JSON.stringify(personne)});
  }

  getOnePersonnel(personne) : Observable<any>{
    return this.http.get(this.APIUrl + '/onePersonnel/'+personne.cin);
    
  }  

}
