import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/layout/Layout";
import { AuthRequired } from "./components/shared/AuthRequired/AuthRequired";
import { Create } from "./components/shared/Create/Create";
import { Footer } from "./components/shared/Footer/Footer";
import { Header } from "./components/shared/Header/Header";
import { Login } from "./pages/auth/login/Login";
import { Look } from "./pages/look/Look";
import { SignUp } from "./pages/auth/signUp/SignUp";
import { Home } from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApplicationDetail } from "./pages/application/detail/ApplicationDetail";
import { SeperateAccess } from "./components/shared/AuthRequired/SeperateAccess";
import { RecordStudent } from "./pages/record/student/RecordStudent";
import { OnlyTeacher } from "./components/shared/AuthRequired/OnlyTeacher";
import { RecordTeacher } from "./pages/record/teacher/RecordTeacher";
import ReactModal from "react-modal";
import { ModalProvider } from "./components/shared/Modal/ModalProvider";

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
              <Route path="/look" element={<Look />} />
              <Route
                path="/record"
                element={
                  <SeperateAccess>
                    <RecordStudent />
                  </SeperateAccess>
                }
              />
              <Route
                path="/record/teacher"
                element={
                  <OnlyTeacher>
                    <RecordTeacher />
                  </OnlyTeacher>
                }
              />
              <Route path="/application/:applicationId" element={<ApplicationDetail />} />
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
        <ModalProvider />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

ReactModal.setAppElement("#root");
