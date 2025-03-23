import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "@/pages/Home";
import FeaturesPage from "@/pages/Features";
import PricingPage from "@/pages/Pricing";
import ResourcesPage from "@/pages/Resources";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto px-6 lg:p-0">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "features",
        element: <FeaturesPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
