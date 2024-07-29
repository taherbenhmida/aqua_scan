from django.db import models
from django.contrib.auth.models import AbstractUser
from unicodedata import name



# Create your models here.

class Personnel(models.Model):
    matricule = models.CharField(unique=True, max_length=20)
    matr_corps = models.CharField(max_length=20, blank=True, null=True)
    cd_grd = models.IntegerField(blank=True, null=True)
    grade = models.CharField(db_column='Grade', max_length=20, blank=True, null=True)  # Field name made lowercase.
    iu = models.CharField(db_column='IU', unique=True, max_length=15, blank=True, null=True)  # Field name made lowercase.
    cin = models.IntegerField(db_column='CIN', primary_key=True)  # Field name made lowercase.
    dtecin = models.DateField(db_column='DTECIN', blank=True, null=True)  # Field name made lowercase.
    date_nomination = models.DateField(blank=True, null=True)
    prenom = models.CharField(db_column='Prenom', max_length=40, blank=True, null=True)  # Field name made lowercase.
    nom = models.CharField(db_column='NOM', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_pere = models.CharField(db_column='Prenom_pere', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_mere = models.CharField(db_column='Prenom_mere', max_length=40, blank=True, null=True)  # Field name made lowercase.
    situation_familiale = models.CharField(db_column='Situation_familiale', max_length=15, blank=True, null=True)  # Field name made lowercase.
    date_naissance = models.DateField(blank=True, null=True)
    lieu_naiss = models.CharField(db_column='Lieu_naiss', max_length=40, blank=True, null=True)  # Field name made lowercase.
    cd_spec = models.CharField(max_length=10, blank=True, null=True)
    specialite = models.CharField(db_column='Specialite', max_length=100, blank=True, null=True)  # Field name made lowercase.
    qualification = models.CharField(db_column='Qualification', max_length=10, blank=True, null=True)  # Field name made lowercase.
    date_entr_serv = models.DateField(blank=True, null=True)
    date_deb_contrat = models.DateField(blank=True, null=True)
    date_fin_contrat = models.DateField(blank=True, null=True)
    adresse = models.TextField(db_column='Adresse', blank=True, null=True)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=30, blank=True, null=True)  # Field name made lowercase.
    telephone2 = models.CharField(db_column='Telephone2', max_length=30, blank=True, null=True)  # Field name made lowercase.
    base = models.CharField(db_column='BASE', max_length=40, blank=True, null=True)  # Field name made lowercase.
    unite = models.CharField(db_column='UNITE', max_length=40, blank=True, null=True)  # Field name made lowercase.
    position = models.CharField(db_column='Position', max_length=50, blank=True, null=True)  # Field name made lowercase.
    obsrv = models.TextField(blank=True, null=True)
    idunique = models.CharField(db_column='Idunique', max_length=15, blank=True, null=True)  # Field name made lowercase.
    passp1 = models.CharField(db_column='Passp1', max_length=20, blank=True, null=True)  # Field name made lowercase.
    passp2 = models.CharField(db_column='Passp2', max_length=20, blank=True, null=True)  # Field name made lowercase.
    famille = models.CharField(db_column='Famille', max_length=30, blank=True, null=True)  # Field name made lowercase.
    secteur = models.IntegerField(blank=True, null=True)
    categ = models.CharField(max_length=45, blank=True, null=True)
    dtefincim = models.DateField(db_column='DTEFINCIM', blank=True, null=True)  # Field name made lowercase.
    cim = models.IntegerField(db_column='CIM', unique=True, blank=True, null=True)  # Field name made lowercase.
    taille = models.IntegerField(blank=True, null=True)
    poids = models.IntegerField(blank=True, null=True)
    sexe = models.CharField(max_length=10, blank=True, null=True)
    pointure = models.IntegerField(blank=True, null=True)
    gpsanguin = models.CharField(max_length=3, blank=True, null=True)
    etatcivil = models.CharField(max_length=20, blank=True, null=True)
    img = models.CharField(max_length=100, blank=True, null=True, default='default.png')
    service = models.CharField(max_length=50, blank=True, null=True)
    code_fonction = models.CharField(max_length=20, blank=True, null=True)
    prenom_partenaire = models.CharField(max_length=40, blank=True, null=True)
    prenom_grandpere = models.CharField(max_length=40, blank=True, null=True)
    nbr_enfant = models.IntegerField(blank=True, null=True)
    armee = models.CharField(max_length=20, blank=True, null=True)
    prenomf = models.CharField(max_length=40, blank=True, null=True)
    nomf = models.CharField(max_length=40, blank=True, null=True)
    arme = models.CharField(max_length=40, blank=True, null=True)
    etat = models.CharField(max_length=40, blank=True, null=True)
    fonction = models.CharField(max_length=40, blank=True, null=True)
    groupe = models.CharField(max_length=10, blank=True, null=True)
    office = models.CharField(max_length=40, blank=True, null=True)
    situation = models.CharField(max_length=10, blank=True, null=True)
    niv_intel = models.CharField(max_length=20, blank=True, null=True)
    origine_recrutement = models.CharField(max_length=20, blank=True, null=True)
    date_diplome = models.DateField(blank=True, null=True)
    qualification_militaire = models.CharField(max_length=10, blank=True, null=True)
    date_entr_hopi = models.DateField(blank=True, null=True)
    date_specialite = models.DateField(blank=True, null=True)
    date_fonction = models.DateField(blank=True, null=True)
    date_qualif_militaire = models.DateField(blank=True, null=True)

    


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    logged = models.CharField(max_length=255,null=True,blank=True)
    name = models.CharField(max_length=255,unique=True,null=True,blank=True)
    last_name = models.CharField(max_length=255,null=True,blank=True)
    email = models.CharField(max_length=255, unique=True,blank=True)
    password = models.CharField(max_length=255,null=True,blank=True)
    service = models.CharField(max_length=255,null=True,blank=True)
    role = models.CharField(max_length=255,null=True,blank=True)
    phone = models.CharField(max_length=255,null=True,blank=True)
    date_de_naissance = models.CharField(max_length=255,null=True,blank=True)
    adresse = models.CharField(max_length=255,null=True,blank=True)
    sexe = models.CharField(max_length=255,null=True,blank=True)
    state = models.CharField(max_length=255,null=True,blank=True)
    city = models.CharField(max_length=255,null=True,blank=True)
    grade = models.CharField(max_length=255,null=True,blank=True)
    last_login = models.DateField(null=True,blank=True)
    img = models.CharField(max_length=255,null=True,blank=True,default='default.png')
    username = None

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = []

class test (models.Model):
    id = models.AutoField(primary_key=True)
    num = models.CharField(unique=True, max_length=20)
    matr_corps = models.CharField(max_length=20, blank=True, null=True)   
        
class Archive(models.Model):
    matricule = models.CharField(unique=True, max_length=20)
    matr_corps = models.CharField(max_length=20, blank=True, null=True)
    cd_grd = models.IntegerField(blank=True, null=True)
    grade = models.CharField(db_column='Grade', max_length=20, blank=True, null=True)  # Field name made lowercase.
    iu = models.CharField(db_column='IU', unique=True, max_length=15, blank=True, null=True)  # Field name made lowercase.
    cin = models.IntegerField(db_column='CIN', primary_key=True)  # Field name made lowercase.
    dtecin = models.DateField(db_column='DTECIN', blank=True, null=True)  # Field name made lowercase.
    date_nomination = models.DateField(blank=True, null=True)
    prenom = models.CharField(db_column='Prenom', max_length=40, blank=True, null=True)  # Field name made lowercase.
    nom = models.CharField(db_column='NOM', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_pere = models.CharField(db_column='Prenom_pere', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_mere = models.CharField(db_column='Prenom_mere', max_length=40, blank=True, null=True)  # Field name made lowercase.
    situation_familiale = models.CharField(db_column='Situation_familiale', max_length=15, blank=True, null=True)  # Field name made lowercase.
    date_naissance = models.DateField(blank=True, null=True)
    date_entree_archive = models.DateField(blank=True, null=True)
    lieu_naiss = models.CharField(db_column='Lieu_naiss', max_length=40, blank=True, null=True)  # Field name made lowercase.
    cd_spec = models.CharField(max_length=10, blank=True, null=True)
    specialite = models.CharField(db_column='Specialite', max_length=100, blank=True, null=True)  # Field name made lowercase.
    qualification = models.CharField(db_column='Qualification', max_length=10, blank=True, null=True)  # Field name made lowercase.
    date_entr_serv = models.DateField(blank=True, null=True)
    date_deb_contrat = models.DateField(blank=True, null=True)
    date_fin_contrat = models.DateField(blank=True, null=True)
    adresse = models.TextField(db_column='Adresse', blank=True, null=True)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=30, blank=True, null=True)  # Field name made lowercase.
    telephone2 = models.CharField(db_column='Telephone2', max_length=30, blank=True, null=True)  # Field name made lowercase.
    base = models.CharField(db_column='BASE', max_length=40, blank=True, null=True)  # Field name made lowercase.
    unite = models.CharField(db_column='UNITE', max_length=40, blank=True, null=True)  # Field name made lowercase.
    position = models.CharField(db_column='Position', max_length=50, blank=True, null=True)  # Field name made lowercase.
    obsrv = models.TextField(blank=True, null=True)
    idunique = models.CharField(db_column='Idunique', max_length=15, blank=True, null=True)  # Field name made lowercase.
    passp1 = models.CharField(db_column='Passp1', max_length=20, blank=True, null=True)  # Field name made lowercase.
    passp2 = models.CharField(db_column='Passp2', max_length=20, blank=True, null=True)  # Field name made lowercase.
    famille = models.CharField(db_column='Famille', max_length=30, blank=True, null=True)  # Field name made lowercase.
    secteur = models.IntegerField(blank=True, null=True)
    categ = models.CharField(max_length=45, blank=True, null=True)
    dtefincim = models.DateField(db_column='DTEFINCIM', blank=True, null=True)  # Field name made lowercase.
    cim = models.IntegerField(db_column='CIM', unique=True, blank=True, null=True)  # Field name made lowercase.
    taille = models.IntegerField(blank=True, null=True)
    poids = models.IntegerField(blank=True, null=True)
    sexe = models.CharField(max_length=10, blank=True, null=True)
    pointure = models.IntegerField(blank=True, null=True)
    gpsanguin = models.CharField(max_length=3, blank=True, null=True)
    etatcivil = models.CharField(max_length=20, blank=True, null=True)
    img = models.CharField(max_length=100, blank=True, null=True, default='default.png')
    service = models.CharField(max_length=50, blank=True, null=True)
    code_fonction = models.CharField(max_length=20, blank=True, null=True)
    prenom_partenaire = models.CharField(max_length=40, blank=True, null=True)
    prenom_grandpere = models.CharField(max_length=40, blank=True, null=True)
    nbr_enfant = models.IntegerField(blank=True, null=True)
    armee = models.CharField(max_length=20, blank=True, null=True)
    prenomf = models.CharField(max_length=40, blank=True, null=True)
    nomf = models.CharField(max_length=40, blank=True, null=True)
    arme = models.CharField(max_length=40, blank=True, null=True)
    etat = models.CharField(max_length=40, blank=True, null=True)
    fonction = models.CharField(max_length=40, blank=True, null=True)
    groupe = models.CharField(max_length=10, blank=True, null=True)
    office = models.CharField(max_length=40, blank=True, null=True)
    situation = models.CharField(max_length=10, blank=True, null=True)
    niv_intel = models.CharField(max_length=20, blank=True, null=True)
    origine_recrutement = models.CharField(max_length=20, blank=True, null=True)
    date_diplome = models.DateField(blank=True, null=True)
    qualification_militaire = models.CharField(max_length=10, blank=True, null=True)
    date_entr_hopi = models.DateField(blank=True, null=True)
    date_specialite = models.DateField(blank=True, null=True)
    date_fonction = models.DateField(blank=True, null=True)
    date_qualif_militaire = models.DateField(blank=True, null=True)


    




class Grade(models.Model) : 
    code_grade= models.AutoField(primary_key=True)
    libelle_grade= models.CharField(max_length=40, blank=True, null=True)

    


class Specialite(models.Model) : 
    code_specialite= models.IntegerField(blank=True, primary_key=True)
    libelle_specialite= models.CharField(max_length=45, blank=True, null=True)

    


class Situation(models.Model) : 
    code_situation= models.IntegerField(blank=True, primary_key=True)
    libelle_situation= models.CharField(max_length=45, blank=True, null=True)

    



class Region(models.Model) : 
    code_region= models.IntegerField(blank=True, primary_key=True)
    libelle_region= models.CharField(max_length=45, blank=True, null=True)

    


class Arme(models.Model) : 
    code_arme= models.AutoField(primary_key=True)
    libelle_arme= models.CharField(max_length=45, blank=True, null=True)

    


class Service(models.Model) : 
    code_service= models.AutoField(primary_key=True)
    libelle_service= models.CharField(max_length=45, blank=True, null=True)

    


class Fonction(models.Model) : 
    code_fonction= models.IntegerField(blank=True, primary_key=True)
    libelle_fonction= models.CharField(max_length=45, blank=True, null=True)

    



class Qualification_mil(models.Model) : 
    code_qualification_mil= models.IntegerField(blank=True, primary_key=True)
    libelle_qualification_mil= models.CharField(max_length=45, blank=True, null=True)

    


class Bureau(models.Model) : 
    code_bureau= models.IntegerField(blank=True, primary_key=True)
    libelle_bureau= models.CharField(max_length=45, blank=True, null=True)
    code_service= models.ForeignKey(Service,  on_delete=models.CASCADE,db_column='code_service')

class Presence(models.Model) :
    grade= models.CharField(max_length=45, blank=True, null=True)
    nom= models.CharField(max_length=45, blank=True, null=True)
    prenom= models.CharField(max_length=45, blank=True, null=True)
    situation= models.CharField(max_length=45, blank=True, null=True)
    date= models.DateField(max_length=45, blank=True, null=True)
    cin= models.IntegerField(blank=True, null=True)

class Mission_Stage(models.Model) :
    grade= models.CharField(max_length=45, blank=True, null=True)
    nom= models.CharField(max_length=45, blank=True, null=True)
    prenom= models.CharField(max_length=45, blank=True, null=True)
    type_mission= models.CharField(max_length=45, blank=True, null=True)
    date_debut= models.DateField(max_length=45, blank=True, null=True)
    date_fin= models.DateField(max_length=45, blank=True, null=True)
    remarque= models.CharField(max_length=450, blank=True, null=True)
    cin= models.IntegerField(blank=True, null=True)


class punition(models.Model) :
    grade= models.CharField(max_length=45, blank=True, null=True)
    nom= models.CharField(max_length=45, blank=True, null=True)
    prenom= models.CharField(max_length=45, blank=True, null=True)
    type_punition= models.CharField(max_length=45, blank=True, null=True)
    date= models.DateField(max_length=45, blank=True, null=True)
    nbre_jour= models.IntegerField(blank=True, null=True)
    remarque= models.CharField(max_length=450, blank=True, null=True)    
    cin= models.IntegerField(blank=True, null=True)


class rendement(models.Model) :
    cin= models.IntegerField(blank=True, null=True)
    note_annuelle= models.IntegerField(blank=True, null=True)
    date_note_annuelle= models.DateField(blank=True, null=True)
    note_semestrielle= models.IntegerField(blank=True, null=True)
    date_note_semestrielle= models.DateField(blank=True, null=True)
    remarque= models.CharField(max_length=450, blank=True, null=True)

class diplome(models.Model) :
    cin= models.IntegerField(blank=True, null=True)
    libelle= models.CharField(max_length=450, blank=True, null=True)

#//// fish farming :

from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    class Meta:
        db_table = 'Department'

class Room(models.Model):
    name = models.CharField(max_length=100)
    consommation = models.FloatField(default=0)

    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='rooms')

    def __str__(self):
        return self.name
    class Meta:
        db_table = 'Room'

class Tank(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    consommation = models.FloatField(default=0)
    capacity = models.IntegerField()
    number_of_fish = models.IntegerField()
    biomass = models.FloatField()  # Total biomass in the tank
    average_weight = models.FloatField()  # Average weight of fish in the tank
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='tanks')

    def __str__(self):
        return self.name
    class Meta:
        db_table = 'tank'

class FishTransfer(models.Model):
    tank_from = models.ForeignKey(Tank, related_name='transfers_out', on_delete=models.CASCADE)
    tank_to = models.ForeignKey(Tank, related_name='transfers_in', on_delete=models.CASCADE)
    number_of_fish = models.IntegerField()
    average_weight = models.FloatField()
    date_of_transfer = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Transfer from {self.tank_from.name} to {self.tank_to.name} on {self.date_of_transfer}"
    class Meta:
        db_table = 'FishTransfer'