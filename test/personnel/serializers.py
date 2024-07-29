from rest_framework import serializers
from personnel.models import Personnel
#user
from pyexpat import model
from rest_framework import serializers
from .models import Mission_Stage, Presence, User, diplome, punition, rendement
from personnel.models import Grade, Personnel,Arme,Bureau,Service,Specialite,Fonction,Qualification_mil,Region,Situation
from personnel.models import Archive




class personnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnel
        fields = ('matricule',
                'matr_corps',
                'cd_grd',
                'grade',
                'iu',
                'cin',
                'dtecin',
                'date_nomination',
                'prenom',
                'nom',
                'prenom_pere',
                'prenom_mere',
                'situation_familiale',
                'date_naissance',
                'lieu_naiss',
                'cd_spec',
                'specialite',
                'qualification',
                'date_entr_serv',
                'date_deb_contrat',
                'date_fin_contrat',
                'adresse',
                'telephone',
                'telephone2',
                'base',
                'unite',
                'position',
                'obsrv',
                'idunique',
                'passp1',
                'passp2',
                'famille',
                'secteur',
                'categ',
                'dtefincim',
                'cim',
                'taille',
                'poids',
                'sexe',
                'pointure',
                'gpsanguin',
                'etatcivil',
                'img',
                'service',
                'code_fonction',
                'prenom_partenaire',
                'prenom_grandpere',
                'nbr_enfant',
                'armee',
                'prenomf',
                'nomf',
                'arme',
                'etat',
                'fonction',
                'groupe',
                'office',
                'situation',
                'niv_intel',
                'origine_recrutement',
                'date_diplome',
                'qualification_militaire',
                'date_entr_hopi',
                'date_specialite',
                'date_fonction',
                'date_qualif_militaire',

        )

#user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'last_name','email', 'password','service','role','phone','date_joined','date_de_naissance','adresse','sexe','city','state','city','logged','grade','last_login','img']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class archiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archive
        fields = ('matricule',
                'matr_corps',
                'cd_grd',
                'grade',
                'iu',
                'cin',
                'dtecin',
                'date_nomination',
                'prenom',
                'nom',
                'prenom_pere',
                'prenom_mere',
                'situation_familiale',
                'date_naissance',
                'lieu_naiss',
                'cd_spec',
                'specialite',
                'qualification',
                'date_entr_serv',
                'date_deb_contrat',
                'date_fin_contrat',
                'adresse',
                'telephone',
                'telephone2',
                'base',
                'unite',
                'position',
                'obsrv',
                'idunique',
                'passp1',
                'passp2',
                'famille',
                'secteur',
                'categ',
                'dtefincim',
                'cim',
                'taille',
                'poids',
                'sexe',
                'pointure',
                'gpsanguin',
                'etatcivil',
                'img',
                'service',
                'code_fonction',
                'prenom_partenaire',
                'prenom_grandpere',
                'nbr_enfant',
                'armee',
                'prenomf',
                'nomf',
                'arme',
                'etat',
                'fonction',
                'groupe',
                'office',
                'situation',
                'niv_intel',
                'origine_recrutement',
                'date_diplome',
                'qualification_militaire',
                'date_entr_hopi',
                'date_specialite',
                'date_fonction',
                'date_qualif_militaire',

        )


class gradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ('code_grade',
                'libelle_grade',
        
        )


class armeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arme
        fields = ('code_arme',
                'libelle_arme',
        
        )

class PresenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presence
        fields = ('grade','nom','prenom','situation','grade','date','cin')


class bureauSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bureau
        fields = ('code_bureau',
                'libelle_bureau',
                'code_service',
        
        )



class serviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('code_service',
                'libelle_service',
        )


class situationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Situation
        fields = ('code_situation',
                'libelle_situation',
        
        )


class specialiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialite
        fields = ('code_specialite',
                'libelle_specialite',
        
        )


class fonctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fonction
        fields = ('code_fonction',
                'libelle_fonction',
        
        )


class qualification_milSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualification_mil
        fields = ('code_qualification_mil',
                'libelle_qualification_mil',
        
        )


class regionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ('code_region',
                'libelle_region',
        
        )

class misssion_stageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission_Stage
        fields = ('grade','nom','prenom','type_mission','date_debut','date_fin','remarque','cin')

class punitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = punition
        fields = ('grade','nom','prenom','type_punition','date','nbre_jour','remarque','cin')

class rendementSerializer(serializers.ModelSerializer):
    class Meta:
        model = rendement
        fields = ('cin','note_annuelle','date_note_annuelle','note_rendement','date_note_rendement','remarque')

class diplomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = diplome
        fields = ('cin','libelle')

#//// fish farming : 
from rest_framework import serializers
from .models import Tank, Room, FishTransfer

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class TankSerializer(serializers.ModelSerializer):
    room = RoomSerializer(read_only=True)

    class Meta:
        model = Tank
        fields = '__all__'


class FishTransferSerializer(serializers.ModelSerializer):
    tank_from = TankSerializer()
    tank_to = TankSerializer()

    class Meta:
        model = FishTransfer
        fields = '__all__'