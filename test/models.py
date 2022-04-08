# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


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


class PersonnelPersonnel(models.Model):
    matricule = models.IntegerField()
    matr_corps = models.IntegerField()
    code_grd = models.IntegerField()
    iu = models.IntegerField(db_column='IU')  # Field name made lowercase.
    cin = models.IntegerField(db_column='CIN', primary_key=True)  # Field name made lowercase.
    date_cin = models.DateField()
    date_nomination = models.DateField()
    prenom = models.CharField(db_column='Prenom', max_length=40)  # Field name made lowercase.
    nom = models.CharField(db_column='NOM', max_length=40)  # Field name made lowercase.
    prenom_pere = models.CharField(db_column='Prenom_pere', max_length=40)  # Field name made lowercase.
    prenom_mere = models.CharField(db_column='Prenom_mere', max_length=40)  # Field name made lowercase.
    situation_familial = models.CharField(db_column='Situation_familial', max_length=15)  # Field name made lowercase.
    date_naissance = models.DateField()
    lieu_naiss = models.CharField(db_column='Lieu_naiss', max_length=40)  # Field name made lowercase.
    cd_spec = models.IntegerField()
    code_qualification = models.IntegerField()
    date_entr_serv = models.DateField()
    date_deb_contrat = models.DateField()
    date_fin_contrat = models.DateField()
    adresse = models.TextField(db_column='Adresse')  # Field name made lowercase.
    telephone = models.IntegerField(db_column='Telephone')  # Field name made lowercase.
    telephone2 = models.IntegerField(db_column='Telephone2')  # Field name made lowercase.
    cd_unite = models.IntegerField()
    obsrv = models.TextField()
    date_fin_cim = models.DateField(db_column='date_fin_CIM')  # Field name made lowercase.
    cim = models.IntegerField(db_column='CIM')  # Field name made lowercase.
    taille = models.IntegerField()
    poids = models.IntegerField()
    sexe = models.CharField(max_length=10)
    pointure = models.IntegerField()
    gp_sanguin = models.CharField(max_length=10)
    etat_civil = models.CharField(max_length=20)
    img = models.IntegerField()
    code_service = models.IntegerField()
    code_fonction = models.IntegerField()
    prenom_partenaire = models.CharField(max_length=20)
    prenom_grandpere = models.CharField(max_length=20)
    nbr_enfant = models.IntegerField()
    armee = models.CharField(max_length=20)
    prenomf = models.CharField(max_length=20)
    nomf = models.CharField(max_length=20)
    arme = models.CharField(max_length=20)
    etat = models.CharField(max_length=20)
    groupe = models.CharField(max_length=20)
    office = models.CharField(max_length=20)
    situation = models.CharField(max_length=20)
    niv_int = models.CharField(max_length=30)
    origine_recrutement = models.CharField(max_length=30)
    date_diplome = models.DateField()
    date_entr_hopi = models.DateField()
    date_specialite = models.DateField()
    date_fonction = models.DateField()
    date_qualif_militaire = models.DateField()
    matricule1 = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'personnel_personnel'


class VwBilletServiceDetails(models.Model):
    date = models.DateField(db_column='DATE', blank=True, null=True)  # Field name made lowercase.
    code_unite = models.CharField(max_length=20, blank=True, null=True)
    base = models.CharField(db_column='Base', max_length=10, blank=True, null=True)  # Field name made lowercase.
    id = models.IntegerField(blank=True, null=True)
    tot_pld = models.IntegerField(blank=True, null=True)
    tot_pcd = models.IntegerField(blank=True, null=True)
    tot_mission = models.IntegerField(blank=True, null=True)
    tot_rc = models.IntegerField(db_column='tot_RC', blank=True, null=True)  # Field name made lowercase.
    tot_consultation = models.IntegerField(db_column='tot_Consultation', blank=True, null=True)  # Field name made lowercase.
    tot_repos = models.IntegerField(blank=True, null=True)
    tot_detachement = models.IntegerField(blank=True, null=True)
    tot_absence = models.IntegerField(db_column='tot_Absence', blank=True, null=True)  # Field name made lowercase.
    tot_stage = models.IntegerField(db_column='tot_Stage', blank=True, null=True)  # Field name made lowercase.
    tot_prison_civil = models.IntegerField(db_column='tot_Prison_Civil', blank=True, null=True)  # Field name made lowercase.
    tot_prison_base = models.IntegerField(blank=True, null=True)
    tot_hospitalise = models.IntegerField(blank=True, null=True)
    tot_permission_moitier_salaire = models.IntegerField(blank=True, null=True)
    tot_permission_sans_salaire = models.IntegerField(db_column='tot_permission_Sans_salaire', blank=True, null=True)  # Field name made lowercase.
    tot_escapade = models.IntegerField(blank=True, null=True)
    tot_off = models.IntegerField(db_column='tot_Off', blank=True, null=True)  # Field name made lowercase.
    tot_off_present = models.IntegerField(db_column='tot_Off_Present', blank=True, null=True)  # Field name made lowercase.
    tot_soff = models.IntegerField(db_column='tot_SOff', blank=True, null=True)  # Field name made lowercase.
    tot_soff_present = models.IntegerField(db_column='tot_SOff_Present', blank=True, null=True)  # Field name made lowercase.
    tot_ht = models.IntegerField(db_column='tot_HT', blank=True, null=True)  # Field name made lowercase.
    tot_ht_present = models.IntegerField(db_column='tot_HT_Present', blank=True, null=True)  # Field name made lowercase.
    tot_civil = models.IntegerField(db_column='tot_Civil', blank=True, null=True)  # Field name made lowercase.
    tot_civil_present = models.IntegerField(db_column='tot_Civil_Present', blank=True, null=True)  # Field name made lowercase.
    tot_present = models.CharField(db_column='Tot_Present', max_length=11, blank=True, null=True)  # Field name made lowercase.
    stat_present = models.CharField(db_column='Stat_Present', max_length=10, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'vw_billet_service_details'


class VwEtatJounalierPresence(models.Model):
    lib_grd = models.CharField(db_column='LIB_GRD', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cd_grd = models.IntegerField(db_column='CD_GRD', blank=True, null=True)  # Field name made lowercase.
    tot = models.BigIntegerField(blank=True, null=True)
    present = models.BigIntegerField(blank=True, null=True)
    inf = models.BigIntegerField(db_column='Inf', blank=True, null=True)  # Field name made lowercase.
    repos_bas = models.BigIntegerField(db_column='repos_BAS', blank=True, null=True)  # Field name made lowercase.
    prison_bas = models.BigIntegerField(db_column='prison_BAS', blank=True, null=True)  # Field name made lowercase.
    service = models.BigIntegerField(blank=True, null=True)
    pcd = models.BigIntegerField(blank=True, null=True)
    rc = models.BigIntegerField(db_column='RC', blank=True, null=True)  # Field name made lowercase.
    stage = models.BigIntegerField(db_column='Stage', blank=True, null=True)  # Field name made lowercase.
    mission = models.BigIntegerField(db_column='Mission', blank=True, null=True)  # Field name made lowercase.
    prison = models.BigIntegerField(db_column='Prison', blank=True, null=True)  # Field name made lowercase.
    detach = models.BigIntegerField(db_column='Detach', blank=True, null=True)  # Field name made lowercase.
    pld = models.BigIntegerField(blank=True, null=True)
    conges_sans_solde = models.BigIntegerField(blank=True, null=True)
    conges_moitie_salaire = models.BigIntegerField(blank=True, null=True)
    consultaion = models.BigIntegerField(blank=True, null=True)
    repos_hopital = models.BigIntegerField(blank=True, null=True)
    absence = models.BigIntegerField(blank=True, null=True)
    escapade = models.BigIntegerField(blank=True, null=True)
    repos = models.BigIntegerField(db_column='Repos', blank=True, null=True)  # Field name made lowercase.
    date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vw_etat_jounalier_presence'


class VwPermissions(models.Model):
    id_permission = models.IntegerField(blank=True, null=True)
    unite = models.CharField(max_length=50, blank=True, null=True)
    categorie = models.CharField(max_length=50, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    nom_complet = models.CharField(max_length=50, blank=True, null=True)
    destination = models.CharField(max_length=50, blank=True, null=True)
    date_fin = models.DateField(blank=True, null=True)
    date_deb = models.DateField(blank=True, null=True)
    duree_str = models.CharField(max_length=11, blank=True, null=True)
    duree = models.CharField(max_length=20, blank=True, null=True)
    etat = models.CharField(max_length=1, blank=True, null=True)
    remarque = models.CharField(max_length=100, blank=True, null=True)
    matricule = models.CharField(max_length=50, blank=True, null=True)
    hr_sortie = models.CharField(max_length=5, blank=True, null=True)
    hr_retour = models.CharField(max_length=5, blank=True, null=True)
    grade = models.CharField(db_column='Grade', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cd_grd = models.IntegerField(blank=True, null=True)
    cin = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vw_permissions'


class VwToteffectifbase(models.Model):
    tot_colmajor = models.BigIntegerField(db_column='tot_ColMajor', blank=True, null=True)  # Field name made lowercase.
    tot_colplein = models.BigIntegerField(db_column='tot_ColPlein', blank=True, null=True)  # Field name made lowercase.
    tot_ltcol = models.BigIntegerField(db_column='tot_LtCol', blank=True, null=True)  # Field name made lowercase.
    tot_cdt = models.BigIntegerField(db_column='tot_Cdt', blank=True, null=True)  # Field name made lowercase.
    tot_cpt = models.BigIntegerField(db_column='tot_Cpt', blank=True, null=True)  # Field name made lowercase.
    tot_lt = models.BigIntegerField(db_column='tot_Lt', blank=True, null=True)  # Field name made lowercase.
    tot_slt = models.BigIntegerField(db_column='tot_Slt', blank=True, null=True)  # Field name made lowercase.
    tot_major = models.BigIntegerField(db_column='tot_Major', blank=True, null=True)  # Field name made lowercase.
    tot_adjchef = models.BigIntegerField(db_column='tot_AdjChef', blank=True, null=True)  # Field name made lowercase.
    tot_adj = models.BigIntegerField(db_column='tot_Adj', blank=True, null=True)  # Field name made lowercase.
    sergchef = models.BigIntegerField(db_column='SergChef', blank=True, null=True)  # Field name made lowercase.
    serg = models.BigIntegerField(db_column='Serg', blank=True, null=True)  # Field name made lowercase.
    caprolchef = models.BigIntegerField(db_column='CaprolChef', blank=True, null=True)  # Field name made lowercase.
    caprol = models.BigIntegerField(db_column='Caprol', blank=True, null=True)  # Field name made lowercase.
    soldat = models.BigIntegerField(blank=True, null=True)
    soussoldatgrade = models.BigIntegerField(db_column='sousSoldatGrade', blank=True, null=True)  # Field name made lowercase.
    soldatappele = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vw_toteffectifbase'


class VwToteffectifbase2(models.Model):
    tot_colmajor = models.BigIntegerField(db_column='tot_ColMajor', blank=True, null=True)  # Field name made lowercase.
    tot_colplein = models.BigIntegerField(db_column='tot_ColPlein', blank=True, null=True)  # Field name made lowercase.
    tot_ltcol = models.BigIntegerField(db_column='tot_LtCol', blank=True, null=True)  # Field name made lowercase.
    tot_cdt = models.BigIntegerField(db_column='tot_Cdt', blank=True, null=True)  # Field name made lowercase.
    tot_cpt = models.BigIntegerField(db_column='tot_Cpt', blank=True, null=True)  # Field name made lowercase.
    tot_lt = models.BigIntegerField(db_column='tot_Lt', blank=True, null=True)  # Field name made lowercase.
    tot_slt = models.BigIntegerField(db_column='tot_Slt', blank=True, null=True)  # Field name made lowercase.
    tot_major = models.BigIntegerField(db_column='tot_Major', blank=True, null=True)  # Field name made lowercase.
    tot_adjchef = models.BigIntegerField(db_column='tot_AdjChef', blank=True, null=True)  # Field name made lowercase.
    tot_adj = models.BigIntegerField(db_column='tot_Adj', blank=True, null=True)  # Field name made lowercase.
    sergchef = models.BigIntegerField(db_column='SergChef', blank=True, null=True)  # Field name made lowercase.
    serg = models.BigIntegerField(db_column='Serg', blank=True, null=True)  # Field name made lowercase.
    caprolchef = models.BigIntegerField(db_column='CaprolChef', blank=True, null=True)  # Field name made lowercase.
    caprol = models.BigIntegerField(db_column='Caprol', blank=True, null=True)  # Field name made lowercase.
    soldat = models.BigIntegerField(blank=True, null=True)
    soussoldatgrade = models.BigIntegerField(db_column='sousSoldatGrade', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'vw_toteffectifbase2'


class Vwauthentication(models.Model):
    matr = models.CharField(db_column='MATR', max_length=20, blank=True, null=True)  # Field name made lowercase.
    pwd = models.CharField(db_column='PWD', max_length=70, blank=True, null=True)  # Field name made lowercase.
    user_type = models.CharField(db_column='USER_TYPE', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cd_grd = models.IntegerField(blank=True, null=True)
    lib_grd = models.CharField(max_length=20, blank=True, null=True)
    prenom = models.CharField(db_column='Prenom', max_length=40, blank=True, null=True)  # Field name made lowercase.
    cin = models.IntegerField(db_column='CIN', blank=True, null=True)  # Field name made lowercase.
    nom = models.CharField(db_column='NOM', max_length=40, blank=True, null=True)  # Field name made lowercase.
    unite = models.CharField(db_column='UNITE', max_length=40, blank=True, null=True)  # Field name made lowercase.
    service = models.CharField(max_length=50, blank=True, null=True)
    telephone = models.CharField(db_column='TELEPHONE', max_length=30, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'vwauthentication'


class VwbilletApp(models.Model):
    matricule = models.CharField(max_length=20, blank=True, null=True)
    matr_corps = models.CharField(max_length=20, blank=True, null=True)
    cd_grd = models.IntegerField(blank=True, null=True)
    nom = models.CharField(db_column='NOM', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom = models.CharField(db_column='Prenom', max_length=40, blank=True, null=True)  # Field name made lowercase.
    grade = models.CharField(db_column='Grade', max_length=20, blank=True, null=True)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=30, blank=True, null=True)  # Field name made lowercase.
    adresse = models.TextField(db_column='Adresse', blank=True, null=True)  # Field name made lowercase.
    unite = models.CharField(db_column='UNITE', max_length=40, blank=True, null=True)  # Field name made lowercase.
    nom_complet = models.CharField(max_length=50, blank=True, null=True)
    date_fin = models.DateField(blank=True, null=True)
    date_deb = models.DateField(blank=True, null=True)
    duree_str = models.CharField(max_length=11, blank=True, null=True)
    duree = models.CharField(max_length=20, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    etat = models.CharField(max_length=1, blank=True, null=True)
    date = models.DateField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    situation = models.CharField(max_length=50, blank=True, null=True)
    code_unite = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vwbillet_app'


class Vwpermissions(models.Model):
    id_permission = models.IntegerField(blank=True, null=True)
    unite = models.CharField(max_length=50, blank=True, null=True)
    unite1 = models.CharField(max_length=50, blank=True, null=True)
    categorie = models.CharField(max_length=50, blank=True, null=True)
    type = models.CharField(max_length=50, blank=True, null=True)
    nom_complet = models.CharField(max_length=50, blank=True, null=True)
    destination = models.CharField(max_length=50, blank=True, null=True)
    date_fin = models.DateField(blank=True, null=True)
    date_deb = models.DateField(blank=True, null=True)
    duree_str = models.CharField(max_length=11, blank=True, null=True)
    duree = models.CharField(max_length=20, blank=True, null=True)
    etat = models.CharField(max_length=1, blank=True, null=True)
    remarque = models.CharField(max_length=100, blank=True, null=True)
    matricule = models.CharField(max_length=50, blank=True, null=True)
    grade = models.CharField(db_column='Grade', max_length=20, blank=True, null=True)  # Field name made lowercase.
    cd_grd = models.IntegerField(blank=True, null=True)
    cin = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vwpermissions'


class Vwpersonnel(models.Model):
    matricule = models.CharField(max_length=20, blank=True, null=True)
    matr_corps = models.CharField(max_length=20, blank=True, null=True)
    cd_grd = models.IntegerField(blank=True, null=True)
    grade = models.CharField(db_column='Grade', max_length=20, blank=True, null=True)  # Field name made lowercase.
    iu = models.CharField(db_column='IU', max_length=15, blank=True, null=True)  # Field name made lowercase.
    cin = models.IntegerField(db_column='CIN', blank=True, null=True)  # Field name made lowercase.
    dtecin = models.DateField(db_column='DTECIN', blank=True, null=True)  # Field name made lowercase.
    date_nomination = models.DateField(blank=True, null=True)
    prenom = models.CharField(db_column='Prenom', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenomf = models.CharField(max_length=40, blank=True, null=True)
    nomf = models.CharField(max_length=40, blank=True, null=True)
    nom = models.CharField(db_column='NOM', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_pere = models.CharField(db_column='Prenom_pere', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_mere = models.CharField(db_column='Prenom_mere', max_length=40, blank=True, null=True)  # Field name made lowercase.
    prenom_partenaire = models.CharField(max_length=40, blank=True, null=True)
    prenom_grandpere = models.CharField(max_length=40, blank=True, null=True)
    nbr_enfant = models.IntegerField(blank=True, null=True)
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
    cim = models.IntegerField(db_column='CIM', blank=True, null=True)  # Field name made lowercase.
    taille = models.IntegerField(blank=True, null=True)
    poids = models.IntegerField(blank=True, null=True)
    sexe = models.CharField(max_length=10, blank=True, null=True)
    pointure = models.IntegerField(blank=True, null=True)
    gpsanguin = models.CharField(max_length=3, blank=True, null=True)
    armee = models.CharField(max_length=3, blank=True, null=True)
    service = models.CharField(max_length=50, blank=True, null=True)
    etatcivil = models.CharField(max_length=20, blank=True, null=True)
    img = models.CharField(max_length=100, blank=True, null=True)
    code_fonction = models.CharField(max_length=20, blank=True, null=True)
    arme = models.CharField(max_length=40, blank=True, null=True)
    etat = models.CharField(max_length=40, blank=True, null=True)
    fonction = models.CharField(max_length=40, blank=True, null=True)
    groupe = models.CharField(max_length=10, blank=True, null=True)
    office = models.CharField(max_length=40, blank=True, null=True)
    situation = models.CharField(max_length=10, blank=True, null=True)
    lib_fonction = models.CharField(max_length=255, blank=True, null=True)
    lib_service = models.CharField(max_length=255, blank=True, null=True)
    lib_section = models.CharField(max_length=255, blank=True, null=True)
    nom_complet = models.CharField(max_length=102, blank=True, null=True)
    nomprenom = models.CharField(max_length=81, blank=True, null=True)
    lib_spec = models.CharField(db_column='LIB_SPEC', max_length=100, blank=True, null=True)  # Field name made lowercase.
    lib_grd = models.CharField(db_column='LIB_GRD', max_length=20, blank=True, null=True)  # Field name made lowercase.
    lib_etatcivil = models.CharField(max_length=20, blank=True, null=True)
    code_unite = models.CharField(db_column='Code_Unite', max_length=20, blank=True, null=True)  # Field name made lowercase.
    appartenance = models.CharField(max_length=6, blank=True, null=True)
    lib_unite = models.CharField(db_column='Lib_Unite', max_length=50, blank=True, null=True)  # Field name made lowercase.
    lib_gpsanguin = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vwpersonnel'


class Vwsituation(models.Model):
    date = models.DateField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    code_unite = models.CharField(max_length=50, blank=True, null=True)
    situation = models.CharField(max_length=50, blank=True, null=True)
    matr_corps = models.CharField(max_length=20, blank=True, null=True)
    nom_complet = models.CharField(max_length=102, blank=True, null=True)
    telephone = models.CharField(db_column='Telephone', max_length=30, blank=True, null=True)  # Field name made lowercase.
    telephone2 = models.CharField(db_column='Telephone2', max_length=30, blank=True, null=True)  # Field name made lowercase.
    categ = models.CharField(max_length=45, blank=True, null=True)
    grade = models.CharField(max_length=20, blank=True, null=True)
    rang = models.CharField(max_length=20, blank=True, null=True)
    cd_grd = models.IntegerField(blank=True, null=True)
    matricule = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vwsituation'
