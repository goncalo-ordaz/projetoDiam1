from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token  # ← IMPORTANTE

urlpatterns = [
    path('jogos/', include('jogos.urls')),  # redireciona para a app jogos
    path('admin/', admin.site.urls),
    path('api/login/', obtain_auth_token),  # ← ENDPOINT DE LOGIN POR TOKEN
]

