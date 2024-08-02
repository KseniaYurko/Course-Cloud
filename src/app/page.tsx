"use client"

import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

//import pages
import MainPage from "./pages/MainPage/MainPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

//import components
import Layout from './components/Layout/Layout';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
=======
      <BrowserRouter basename="/Course-Cloud">
>>>>>>> 82aa4c4 (test: gh-page display)
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage/>} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/courses" element={<CoursesPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
