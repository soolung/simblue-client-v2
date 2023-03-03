import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layout/Layout";
import { AuthRequired } from "./components/shared/authRequired/AuthRequired";
import { Create } from "./components/shared/create/Create";
import { Footer } from "./components/shared/footer/Footer";
import { Header } from "./components/shared/Header/Header";
import { Login } from "./pages/auth/login/Login";
import { Look } from "./pages/look/Look";
import { SignUp } from "./pages/auth/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <QueryClientProvider client={queryClient}>
                  <Login />
                </QueryClientProvider>
              }
            />
            <Route
              path="/signup"
              element={
                <QueryClientProvider client={queryClient}>
                  <SignUp />
                </QueryClientProvider>
              }
            />
            <Route
              path="/look"
              element={
                <QueryClientProvider client={queryClient}>
                  <AuthRequired>
                    <Look />
                  </AuthRequired>
                </QueryClientProvider>
              }
            />
            <Route
              path="/create"
              element={
                <AuthRequired>
                  <Create />
                </AuthRequired>
              }
            />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
