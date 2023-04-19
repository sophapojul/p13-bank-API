import { Outlet } from 'react-router-dom';

import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

/**
 * Root route
 * @returns React component for the root route
 */
function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
