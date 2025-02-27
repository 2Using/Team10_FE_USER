import React from "react";
import { Outlet } from "react-router-dom";
import { GNB } from "../components/atoms/GNB";

export const MainLayout = () => {
  return (
    <div className="relative h-screen">
      <div className="p-4">
        <Outlet />
      </div>
      <GNB />
    </div>
  );
};
