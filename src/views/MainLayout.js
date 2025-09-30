import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="pt-4">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
