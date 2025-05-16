from django.db import models

class Liga(models.Model):
    nome = models.CharField(max_length=100)
    pais = models.CharField(max_length=50, blank=True)
    logo = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.nome

class Jogo(models.Model):
    liga = models.ForeignKey(Liga, on_delete=models.CASCADE, null=True, blank=True)
    equipa_casa = models.CharField(max_length=100)
    equipa_fora = models.CharField(max_length=100)
    golos_casa = models.IntegerField(default=0)
    golos_fora = models.IntegerField(default=0)
    hora = models.TimeField()
    capacidade_estadio = models.IntegerField(default=0)
    odd_casa = models.FloatField(default=0.0)
    odd_empate = models.FloatField(default=0.0)
    odd_fora = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.equipa_casa} vs {self.equipa_fora}"
