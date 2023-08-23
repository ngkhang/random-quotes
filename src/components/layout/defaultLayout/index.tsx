import React from 'react';

function DefaultLayout({ children, }: { children: React.ReactElement }) {
  return (
    <div className="">
      {/* Header component */}
      {children}
      {/* Footer component */}
    </div>
  );
}

export default DefaultLayout;
