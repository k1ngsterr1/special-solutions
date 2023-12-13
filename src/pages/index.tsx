import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Routes
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "./Home";
import { ServicePage } from "./Services";
import { ServiceDetails } from "./Services/ui/ServiceDetails";

// Data
import { serviceContent } from "@shared/lib/data/serviceContent";
import { portfolioContent } from "@shared/lib/data/portfolioContent";
import { PorfolioPage } from "./Portfolio/ui";
import { PortfolioDetails } from "./Portfolio/ui/PortfolioList";
import { ClientsPage } from "./Clients/ui";

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
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/index.html" element={<Navigate replace to="/home" />} />
        <Route path="/index.shtml" element={<Navigate replace to="/home" />} />
        <Route path={ROUTE_CONSTANTS.SERVICES} element={<ServicePage />} />
        <Route path={ROUTE_CONSTANTS.PORTFOLIO} element={<PorfolioPage />} />
        <Route path={ROUTE_CONSTANTS.CLIENTS} element={<ClientsPage />} />+
        {Object.entries(serviceContent).map(([serviceType, content]) => (
          <Route
            key={serviceType}
            path={ROUTE_CONSTANTS.SERVICE_DETAILS.replace(
              ":serviceType",
              serviceType
            )}
            element={<ServiceDetails {...content} />}
          />
        ))}
        {Object.entries(portfolioContent).map(([portfolioType, content]) => (
          <Route
            key={portfolioType}
            path={ROUTE_CONSTANTS.PORTFOLIO_DETAILS.replace(
              ":portfolioType",
              portfolioType
            )}
            element={<PortfolioDetails {...content} />}
          />
        ))}
      </Routes>
    </Router>
  );
};
