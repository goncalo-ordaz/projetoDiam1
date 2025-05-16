from django.urls import path
from . import views
from .views import LigaListAPIView
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse

app_name = 'jogos'

urlpatterns = [
    path('ligas/', LigaListAPIView.as_view(), name='ligas-list'),

    # APIs de jogo
    path('api/jogos/', views.jogos),
    path('api/jogo/<int:jogo_id>/', views.jogo_detail),

    # 🔒 Autenticação
    path('api/csrf/', ensure_csrf_cookie(lambda request: JsonResponse({'message': 'CSRF cookie set'}))),
    path('api/login/', views.login_view),
]