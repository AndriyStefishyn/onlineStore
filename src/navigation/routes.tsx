import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound";
export const NavigationContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/error" element={<PageNotFound />}></Route>
        <Route path="/about" element={<h1>about </h1>}></Route>
      </Routes>
    </>
  );
};
