import React from "react";
import { navMenuData } from "../config-data/MainData";

const Home = React.lazy(() => import("../views/home/Home"));
const Login = React.lazy(() => import("../views/login/Login"));

// Static Routes
var indexRoutes = [
  { path: "/shop/", name: "Home", component: Home },
  { path: "/", name: "Login", component: Login },
];

// For calculating dynamic routes based on links
const calculateDynamicRoutes = () =>
  Object.keys(navMenuData).forEach((item) => {
    navMenuData[item].forEach((subitem) => {
      subitem.subcategories.forEach((x) => {
        indexRoutes.push({
          path: "/shop/" + x.link,
          name: "Home",
          component: Home,
        });
      });
    });
  });
calculateDynamicRoutes();
export default indexRoutes;
