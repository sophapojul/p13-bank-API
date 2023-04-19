import { createBrowserRouter } from 'react-router-dom';
import Home from '~/pages/home';
import SignIn from '~/pages/signIn';
import Root from '~/routes';

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
        path: 'user',
        element: <div>User page</div>,
      },
    ],
  },
]);
export default router;
