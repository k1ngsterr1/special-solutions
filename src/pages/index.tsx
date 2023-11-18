import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routes
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
};
