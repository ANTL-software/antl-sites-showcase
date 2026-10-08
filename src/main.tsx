import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ShowcasePage } from "./views/layouts";
import "./utils/styles/global.scss";
createRoot(document.getElementById("root")!).render(<StrictMode><ShowcasePage /></StrictMode>);
