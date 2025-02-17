"use client"

import { Route, Routes } from "react-router-dom"
import dynamic from 'next/dynamic';
const BrowserRouter = dynamic(() => import('react-router-dom').then(mod => mod.BrowserRouter), { ssr: false });
// import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter basename="">
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
