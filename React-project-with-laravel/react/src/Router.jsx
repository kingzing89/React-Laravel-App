import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import NotFound from './views/NotFound';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Home from './views/Home'; // Import a Home component for the root route
import Dashboard from './views/dashboard';
const router = createBrowserRouter([

  {
    path: '/', // Root path should display Home or DefaultLayout
    element: <DefaultLayout />, // You can replace this with Home if you don't need layout here
    children: [
      {
        path: '/', // When visiting `/`, show the Home component
        element: <Home />,
      },
      {
        path: 'users', // Nested route for users
        element: <Users />,
      },
      {
        path: 'dashboard', // Nested route for users
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/GuestLayout',
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
  
  {
    path: '*', // Catch-all route for undefined paths
    element: <NotFound />,
  },
]);

export default router;
