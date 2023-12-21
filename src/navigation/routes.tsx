import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound";
import { HomePage } from "../pages/HomePage/HomePage";
export const NavigationContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<PageNotFound />}></Route>
        <Route path="/about" element={<h1>about </h1>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </>
  );
};
