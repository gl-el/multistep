import { Outlet } from "react-router-dom";
import s from "./RootLayout.module.scss";

export function RootLayout() {
  return (
    <main className={s.main}>
      <Outlet />
    </main>
  );
}
