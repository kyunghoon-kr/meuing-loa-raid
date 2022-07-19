import React, { ReactElement } from 'react';

import Navigation from '../Navigation';

const Layout = ({ children }): ReactElement => {
  return (
    <>
      <Navigation />
      <div>
        { children }
      </div>
    </>
  );
};

export default Layout;

