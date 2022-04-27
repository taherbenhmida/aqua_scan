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
    base = models.CharField(db_column='BASE', max_length=20, blank=True, null=True)  # Field name made lowercase.
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
    img = models.CharField(max_length=100, blank=True, null=True)
    service = models.CharField(max_length=50, blank=True, null=True)
    code_fonction = models.CharField(max_length=20, blank=True, null=True)
    prenom_partenaire = models.CharField(max_length=40, blank=True, null=True)
    prenom_grandpere = models.CharField(max_length=40, blank=True, null=True)
    nbr_enfant = models.IntegerField(blank=True, null=True)
    armee = models.CharField(max_length=3, blank=True, null=True)
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

    class Meta:
        managed = False
        db_table = 'personnel'


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    logged = models.CharField(max_length=255,null=True,blank=True)
    name = models.CharField(max_length=255,null=True,blank=True)
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
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    
        