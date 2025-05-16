
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Obter o token CSRF
            const csrfResponse = await axios.get('http://localhost:8000/api/csrf/', {
                withCredentials: true,
            });
            const csrfToken = csrfResponse.data.csrfToken;

            // Fazer o pedido de logout com o token CSRF
            await axios.post('http://localhost:8000/api/logout/', {}, {
                withCredentials: true,
                headers: {
                    'X-CSRFToken': csrfToken,
                },
            });

            onLogout?.();  // executa função se existir
            navigate('/');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <div className="wrapper">
            <div className="container">
                <h2>Tens a certeza que queres terminar sessão?</h2>
                <button onClick={handleLogout}>Terminar Sessão</button>
            </div>
        </div>
    );
}

export default Logout;
