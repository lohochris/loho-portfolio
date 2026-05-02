import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { SEOProvider } from "./app/components/SEO";

createRoot(document.getElementById("root")!).render(
  <SEOProvider>
    <App />
  </SEOProvider>
);