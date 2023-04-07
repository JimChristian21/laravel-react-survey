import {createBrowserRouter} from "react-router-dom";
import App from './App.jsx';
import Dashboard from './views/Dashboard.jsx';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import Surveys from './views/Surveys.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/surveys',
        element: <Surveys />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
]);

export default router;