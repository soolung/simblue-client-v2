import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layout/Layout";
import { AuthRequired } from "./components/shared/authRequired/AuthRequired";
import { Create } from "./components/shared/create/Create";
import { Footer } from "./components/shared/footer/Footer";
import { Header } from "./components/shared/header/Header";
import { Login } from "./pages/auth/login/Login";
import { Look } from "./pages/look/Look";
import { SignUp } from "./pages/auth/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/look"
                element={
                  <AuthRequired>
                    <Look />
                  </AuthRequired>
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
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
