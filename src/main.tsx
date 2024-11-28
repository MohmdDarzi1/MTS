import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store/Store.ts";

const queryClinet = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
    <QueryClientProvider client={queryClinet}>
          <App />
        </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
