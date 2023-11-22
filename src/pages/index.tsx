import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routes
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home";
import { ServicePage } from "./Services";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path={ROUTE_CONSTANTS.SERVICES} element={<ServicePage />} />
      </Routes>
    </Router>
  );
};
