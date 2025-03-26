import React from 'react';
import { ReactElement } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }) => {
  return (
    <div className="bg-black overflow-x-hidden overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
