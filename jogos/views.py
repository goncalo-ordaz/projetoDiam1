from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .models import Jogo, Liga
from .serializers import JogoSerializer, LigaSerializer

# ---- LIGAS -----
class LigaListAPIView(generics.ListAPIView):
    queryset = Liga.objects.all()
    serializer_class = LigaSerializer

# ---- JOGOS ----
@api_view(['GET', 'POST'])
def jogos(request):
    if request.method == 'GET':
        todos = Jogo.objects.all()
        serializer = JogoSerializer(todos, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = JogoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def jogo_detail(request, jogo_id):
    try:
        jogo = Jogo.objects.get(pk=jogo_id)
    except Jogo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = JogoSerializer(jogo)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = JogoSerializer(jogo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        jogo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def login_view(request):
    print("ola")
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user_obj = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Credenciais inválidas!'}, status=status.HTTP_400_BAD_REQUEST)

    # Autentica com o username associado ao email
    user = authenticate(request, username=user_obj.username, password=password)