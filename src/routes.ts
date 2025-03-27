import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing';
import PublicLayout from './layouts/PublicLayout';
import SignUpPage from './pages/SignUp';
import PrivateLayout from './layouts/PrivateLayout';
import HomePage from './pages/Home';
import AnalyticsPage from './pages/Analytics';
import LinksPage from './pages/Links';
import RootLayout from './layouts/RootLayout';
import CreatePage from './pages/Create';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      // Public routes are accessible to non-logged-in users.
      {
        Component: PublicLayout,
        children: [
          { index: true, Component: LandingPage },
          { path: 'sign-up',  Component: SignUpPage },
          { path: 'login', Component: LoginPage }
        ],
      },
      // Privates routes are only accessible to logged-in users.
      {
        Component: PrivateLayout,
        children: [
          { path: 'home', Component: HomePage },
          { path: 'analytics', Component: AnalyticsPage },
          { 
            path: 'links', 
            children: [
              { index: true, Component: LinksPage },
              { path: 'create', Component: CreatePage }
            ] 
          },
        ],
      },
      // Show 404 page if no routes match.
      {
        path: "*",
        Component: () => "404 Not Found",
      }
    ]
  }
]);

export default router;
