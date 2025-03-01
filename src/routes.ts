import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing';
import PublicLayout from './layouts/PublicLayout';
import SignUpPage from './pages/SignUp';
import PrivateLayout from './layouts/PrivateLayout';
import HomePage from './pages/Home';
import AnalyticsPage from './pages/Analytics';
import LinksPage from './pages/Links';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      // Public routes are accessible to non-logged-in users.
      {
        Component: PublicLayout,
        children: [
          { index: true, Component: LandingPage },
          { path: 'signUp',  Component: SignUpPage }
        ],
      },
      // Privates routes are only accessible to logged-in users.
      {
        Component: PrivateLayout,
        children: [
          { path: 'home', Component: HomePage },
          { path: 'analytics', Component: AnalyticsPage },
          { path: '/links', Component: LinksPage },
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
