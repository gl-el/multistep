import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/components/routing";

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
