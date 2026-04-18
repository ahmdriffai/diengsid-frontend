import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "./components/ui/sonner";
import "./index.css";
import AppRouter from "./routes/routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="314501383101-t83bulhqb5ugib4s57t5hepheqt2rdgo.apps.googleusercontent.com">
        <Toaster position="top-center" />
        <AppRouter />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
