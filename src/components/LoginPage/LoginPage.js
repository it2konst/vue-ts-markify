import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN, PASSWORD } from '../../constants/constants';
import { login } from '../../redux/actions/actions';
import './style.css';
import { useMemo } from 'react';

const LoginPage = () => {
    const { login: userLogin, password } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (type) => (event) => {
        dispatch(login(type, event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userLogin === 'developer12' && password === '123456') {
            navigate('/');
        }
    };

    // Проверка, соответствуют ли логин и пароль условиям для авторизации
    const isLoginValid = useMemo(() => {
        return userLogin === 'developer12' && password === '123456';
    }, [userLogin, password]);

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    className='form__input'
                    onChange={handleInputChange(LOGIN)}
                    value={userLogin || ''}
                    placeholder='Введите логин'
                />
                <input
                    className='form__input'
                    type='password'
                    onChange={handleInputChange(PASSWORD)}
                    value={password || ''}
                    placeholder='Введите пароль'
                />
                <Link
                    className={`form__link ${isLoginValid ? '' : 'form__link--disabled'}`}
                    to={isLoginValid ? '/profile' : '#'}
                >
                    Войти
                </Link>
            </form>

            <div className="interview-task">
                <span>Для входа используйте:<br />логин "developer12"<br />пароль "123456"</span>
                <h2>Тестовое задание:</h2>
                <p>Есть две страницы:</p>
                <ul>
                    <li>• / - главная страница</li>
                    <li>• /profile – страница профиля</li>
                </ul>
                <br />
                <p>1) На главной странице нужно ввести логин и пароль: login – developer21, password – 123456, если введены логин/пароль верно, то можно нажать на кнопку «войти» (если нет, то она disabled).</p>
                <br />
                <p>2) После нажатия на кнопку «войти», должно пользователя перенаправить на страницу профиля, где в теге h1 должен быть отображен логин.</p>
                <br />
                <p>Для хранения / отображения логина, нужно использовать redux.</p>
                <p>Для маршрутизации - react-router.</p>
            </div>
        </>
    );
}

export default LoginPage;
