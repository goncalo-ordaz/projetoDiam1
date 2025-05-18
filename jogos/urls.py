from django.urls import path
from . import views
from .views import LigaListAPIView, registar_utilizador
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from .views import jogos_espn_inglesa
from .views import jogos_espn_espanha
from .views import jogos_espn_italiana



app_name = 'jogos'

urlpatterns = [
    path('ligas/', LigaListAPIView.as_view(), name='ligas-list'),

    # APIs de jogo
    path('api/jogos/', views.jogos),
    path('api/jogo/<int:jogo_id>/', views.jogo_detail),

    # 🔒 Autenticação
    path('api/csrf/', ensure_csrf_cookie(lambda request: JsonResponse({'message': 'CSRF cookie set'}))),
    path('api/login/', views.login_view),

    # 🟢 ESPN Jogos em tempo real
    path('api/jogos_espn/', views.jogos_espn),
    path('api/jogos_espn_inglesa/', jogos_espn_inglesa),

    path('api/jogos_espn_espanha/', jogos_espn_espanha),
path('api/jogos_espn_italiana/', jogos_espn_italiana),

path('api/jogos_espn_bundesliga/', views.jogos_espn_bundesliga),
    path('api/registar/', registar_utilizador, name='registar'),

path('api/logout/', views.logout_view),

]
