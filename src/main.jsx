import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App.jsx";
const queryClient = new QueryClient();
const theme = createTheme({
 palette: {
 mode: "dark",
 primary: { main: "#e50914" },
 background: { default: "#141414", paper: "#1f1f1f" },
 },
});
createRoot(document.getElementById("root")).render(
 <StrictMode>
 <ThemeProvider theme={theme}>
 <CssBaseline />
 <QueryClientProvider client={queryClient}>
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </QueryClientProvider>
 </ThemeProvider>
 </StrictMode>
);
