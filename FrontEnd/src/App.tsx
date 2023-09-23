import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import { RouteEl } from "types";
import CheckAccess from "hoc/CheckAccess";
import routesArr from "./routes";
import Login from "./pages/login";
import NotFound from "pages/not-found";
import AccessDenied from "pages/access-denied";
import Home from "pages/home/Home";

let allRoute: RouteEl[] = [];

routesArr.forEach((route) => {
  if (route.component) {
    allRoute.push(route);
  }
  if (route.children && route.children.length) {
    route.children.forEach((child) => {
      allRoute.push(child);
    });
  }
});

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Layout />}>
          {allRoute.map((route) => {
            const { label, path, component } = route;
            return (
              <Route
                key={label}
                path={path}
                element={
                  <React.Suspense
                    fallback={
                      <div className="w-full h-full bg-white mt-5 p-5 text-center fade-in">
                        Loading...
                      </div>
                    }
                  >
                    <CheckAccess>{component}</CheckAccess>
                  </React.Suspense>
                }
              />
            );
          })}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
