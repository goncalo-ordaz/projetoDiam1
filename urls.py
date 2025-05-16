from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('jogos/', include('jogos.urls')),  # redireciona para a app jogos
    path('admin/', admin.site.urls),
]
