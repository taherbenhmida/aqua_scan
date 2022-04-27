from rest_framework import serializers
from personnel.models import Personnel
#user
from pyexpat import model
from rest_framework import serializers
from .models import User



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
        fields = ['id', 'name', 'last_name','email', 'password','service','role','phone','date_joined','date_de_naissance','adresse','sexe','city','state','city','logged','grade','last_login']
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

