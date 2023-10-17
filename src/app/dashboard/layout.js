import React from "react";

export const metadata = {
    title: 'DASHBOARD | NEXT HERO',
    description: 'NEXT HERO',
  }

const DashboardLayoutPage = ({ children }) => {
  return (
    <div>
      {children}
      <div>DashboardLayoutPage</div>
    </div>
  );
};

export default DashboardLayoutPage;
