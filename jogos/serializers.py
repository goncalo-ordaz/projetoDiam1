from rest_framework import serializers
from .models import Jogo, Liga

class LigaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Liga
        fields = '__all__'

class JogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jogo
        fields = [
            'id', 'liga', 'equipa_casa', 'equipa_fora', 'golos_casa', 'golos_fora',
            'hora', 'capacidade_estadio', 'odd_casa', 'odd_empate', 'odd_fora'
        ]
