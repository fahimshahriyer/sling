import Dashboard from "layouts/Dashboard/Dashboard";
import Login from "views/Auth/Login";
import Register from "views/Auth/Register";
import ForgotPassword from "views/Auth/ForgotPassword";
import ResetPassword from "views/Auth/ResetPassword";
import Error404 from "views/Error/404";
import Error500 from "views/Error/500";

const indexRoutes = [
  { path: "/login", exact: true, name: "Support", component: Login },
  { path: "/register", exact: true, name: "Support", component: Register },
  {
    path: "/forgot-password",
    exact: true,
    name: "Support",
    component: ForgotPassword
  },
  {
    path: "/reset-password",
    exact: true,
    name: "Support",
    component: ResetPassword
  },
  { path: "/404", exact: true, name: "Support", component: Error404 },
  { path: "/500", exact: true, name: "Support", component: Error500 },
  { path: "/", component: Dashboard }
];

export default indexRoutes;
