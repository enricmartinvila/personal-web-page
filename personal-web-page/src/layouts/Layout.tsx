import React from 'react';
import { ReactElement } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }) => {
  return (
    <div className='bg-black'>
      {children}
    </div>
  );
};

export default Layout;
