import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "./components/GuardRoutes/ProtectedRoute";
import { Dashboard, Login } from "./pages";

const Routes = () => (
  <Router>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/">
      <Dashboard />
    </ProtectedRoute>
  </Router>
);

export default Routes;
