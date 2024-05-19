import { Suspense } from "react";
import Layout from "../components/Layout/Layout";
import "./App.css";
import { Route, Router } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Router>
          <Route path="/" element={"<HomePage />"} />
          <Route path="/register" element={"<RegisterPage />"} />
          <Route path="/login" element={"<LoginPage />"} />
          <Route path="/contacts" element={"<ContactsPage />"} />
        </Router>
      </Suspense>
    </Layout>
  );
}
