import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { ShowcasePage } from "./views/layouts";
import "./utils/styles/global.scss";
const root = document.getElementById("root")!;
const app = <StrictMode><ShowcasePage /></StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
