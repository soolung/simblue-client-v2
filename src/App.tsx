import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layout/Layout";
import { AuthRequired } from "./components/shared/AuthRequired/AuthRequired";
import { Footer } from "./components/shared/Footer/Footer";
import { Header } from "./components/shared/Header/Header";
import { Login } from "./pages/auth/login/Login";
import { Look } from "./pages/look/Look";
import { SignUp } from "./pages/auth/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecordStudent } from "./pages/record/student/RecordStudent";
import ReactModal from "react-modal";
import { ModalProvider } from "./components/shared/Modal/ModalProvider";
import { Application } from "./pages/application/Application";
import { UpdatePassword } from "./pages/auth/password/UpdatePassword";

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
                path="/auth/update/password"
                element={<UpdatePassword />}
              />
              <Route path="/look" element={<Look />} />
              <Route
                path="/record"
                element={<AuthRequired children={<RecordStudent />} />}
              />
              <Route
                path="/application/:applicationId/*"
                element={<Application />}
              />
            </Routes>
          </Layout>
          <Footer />
        </BrowserRouter>
        <ModalProvider />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

ReactModal.setAppElement("#root");
