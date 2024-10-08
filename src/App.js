import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import { AboutPage } from './components/AboutPage/AboutPage';
import './App.css';

function App() {
  const { login } = useSelector(state => state.auth);

  const routes = [
    { path: '/profile', element: <ProfilePage login={login} /> },
    { path: '/', element: <><h1>Вход</h1><LoginPage /></> },
    { path: '/about', element: <AboutPage /> }
  ];

  return (
    <div className="App">
      <Router>
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
