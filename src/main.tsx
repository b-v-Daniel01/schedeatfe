import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import ThemeWrapper from "@/providers/ThemeWrapper";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeWrapper />
  </React.StrictMode>
);
