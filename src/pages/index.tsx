import { FC, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Loader
import { Loader } from "@shared/ui/Loader";

// Routes
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Data
import { serviceContent } from "@shared/lib/data/serviceContent";
import { portfolioContent } from "@shared/lib/data/portfolioContent";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";

// Pages
import { HomePage } from "./Home";

const ServicePage = lazy(() =>
  import("./Services").then((module) => ({ default: module.ServicePage }))
);
const ClientsPage = lazy(() =>
  import("./Clients/ui").then((module) => ({ default: module.ClientsPage }))
);
const ServiceDetails = lazy(() =>
  import("./Services/ui/ServiceDetails").then((module) => ({
    default: module.ServiceDetails,
  }))
);
const PortfolioPage = lazy(() =>
  import("./Portfolio/ui").then((module) => ({ default: module.PorfolioPage }))
);

const PortfolioDetails = lazy(() =>
  import("./Portfolio/ui/PortfolioList").then((module) => ({
    default: module.PortfolioDetails,
  }))
);

export const MyRoutes: FC = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/index.html" element={<Navigate replace to="/home" />} />
          <Route
            path="/index.shtml"
            element={<Navigate replace to="/home" />}
          />
          <Route path={ROUTE_CONSTANTS.SERVICES} element={<ServicePage />} />
          <Route path={ROUTE_CONSTANTS.PORTFOLIO} element={<PortfolioPage />} />
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
      </Suspense>
    </Router>
  );
};
