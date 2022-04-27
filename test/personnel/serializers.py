from rest_framework import serializers
from personnel.models import Grade, Personnel,Arme,Bureau,Service,Situation,Specialite,Fonction,Qualification_mil,Region
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

