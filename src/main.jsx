import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { worker } from "./mocks/worker";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
if (process.env.NODE_ENV === "development") {
  worker.start();
}
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
