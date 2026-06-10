import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useApp } from "../../context/AppContext";

export default function Layout({ children }) {
  const { sidebarOpen, sidebarWidth } = useApp();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="flex pt-6 overflow-hidden">
        <Sidebar />

        <main
          className="flex-1 transition-all duration-300 overflow-x-auto overflow-y-auto custom-scrollbar min-w-0"
          style={{
            marginLeft: sidebarOpen ? `${sidebarWidth}px` : "80px",
            width: sidebarOpen
              ? `calc(100% - ${sidebarWidth}px)`
              : "calc(100% - 80px)",
          }}
        >
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
