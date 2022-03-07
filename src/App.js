import * as React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider, RequireAuth  } from "./Auth";
import { ProtectedPage, SubPageA, SubPageB } from './Content';
import Layout from "./Layout";
import LoginPage from "./Login";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>

      <Routes>
        <Route element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }>
          <Route path="/" element={<ProtectedPage />} />
          <Route path="/sub-A" element={<SubPageA />} />
          <Route path="/sub-B" element={<SubPageB />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
}

