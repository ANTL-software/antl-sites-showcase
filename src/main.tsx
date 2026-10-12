import { CookieConsentProvider } from "./context";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { ShowcasePage } from "./views/layouts";
import "./utils/styles/global.scss";
const root = document.getElementById("root")!;
const app = <StrictMode><CookieConsentProvider><ShowcasePage /></CookieConsentProvider></StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
