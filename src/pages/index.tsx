import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Routes
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home";
import { ServicePage } from "./Services";
import { ServiceDetails } from "./Services/ui/ServiceDetails";

export const MyRoutes: FC = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route></Route>
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path={ROUTE_CONSTANTS.SERVICES} element={<ServicePage />} />
        <Route
          path={ROUTE_CONSTANTS.SERVICE_DETAILS}
          element={<ServiceDetails {...content} />}
        />
      </Routes>
    </Router>
  );
};
