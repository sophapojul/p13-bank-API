import { createBrowserRouter } from 'react-router-dom';
import Home from '~/pages/home';
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
        element: <div>Sign In page</div>,
      },
      {
        path: 'profile',
        element: <div>Profile page</div>,
      },
      {
        path: 'user',
        element: <div>User page</div>,
      },
    ],
  },
]);
export default router;
