import { createBrowserRouter } from 'react-router-dom';
import Home from '~/pages/home';
import SignIn from '~/pages/signIn';
import User from '~/pages/user';
import Root from '~/routes';
import PrivateRoutes from '~/routes/PrivateRoutes';

/** React router definition */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: 'user',
            element: <User />,
          },
        ],
      },
    ],
  },
]);
export default router;
