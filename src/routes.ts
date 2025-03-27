import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing';
import PublicLayout from './layouts/PublicLayout';
import SignUpPage from './pages/SignUp';
import PrivateLayout from './layouts/PrivateLayout';
import HomePage from './pages/Home';
import AnalyticsPage from './pages/Analytics';
import LinksPage from './pages/Links';
import ShortUrlIdPage from './pages/Links/ShortUrlId';
import RootLayout from './layouts/RootLayout';
import CreatePage from './pages/Create';
import LoginPage from './pages/Login';
import ShortUrlResolverPage from './pages/ShortUrlResolver';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: ":shortUrlId",
        Component: ShortUrlResolverPage, // This route is used to resolve short URLs. It should be the first route to match.
      },
      // Public routes are accessible to non-logged-in users.
      {
        Component: PublicLayout,
        children: [
          { index: true, Component: LandingPage },
          { path: 'signup',  Component: SignUpPage },
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
              { path: 'create', Component: CreatePage },
              { path: ':shortUrlId', Component: ShortUrlIdPage }
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
