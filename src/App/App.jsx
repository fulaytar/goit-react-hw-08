import { lazy, Suspense } from "react";
import Layout from "../components/Layout/Layout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
