import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { RootLayout } from "@/components/layouts/RootLayout";
import { CreatePage, ErrorPage, MainPage } from "@/pages";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreatePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
