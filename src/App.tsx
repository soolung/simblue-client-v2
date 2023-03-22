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
import { RecordStudent } from "./pages/record/student/RecordStudent";
import { RecordTeacher } from "./pages/record/teacher/RecordTeacher";
import ReactModal from "react-modal";
import { ModalProvider } from "./components/shared/Modal/ModalProvider";
import { STUDENT, TEACHER } from "./constants/user/auth.constant";
<<<<<<< HEAD
import { Form } from "./pages/form/Form";
=======
import { Application } from "./pages/application/Application";
>>>>>>> c05158ebe81c6c0dd72d75f367e23484735def34

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
<<<<<<< HEAD
              <Route
                path="/record"
                element={
                  <AuthRequired
                    children={<RecordStudent />}
                    authority={STUDENT}
                  />
                }
              />
              <Route
                path="/record/teacher"
                element={
                  <AuthRequired
                    children={<RecordTeacher />}
                    authority={TEACHER}
                  />
                }
              />
              <Route
                path="/application/:applicationId"
                element={<ApplicationDetail />}
              />
              <Route path="/application/create" element={<Form />} />
=======
              <Route path="/record" element={<AuthRequired children={<RecordStudent />} authority={STUDENT} />} />
              <Route path="/record/teacher" element={<AuthRequired children={<RecordTeacher />} authority={TEACHER} />} />
              <Route path="/application/:applicationId/*" element={<Application />} />
              <Route path="/create" element={<AuthRequired children={<Create />} />} />
>>>>>>> c05158ebe81c6c0dd72d75f367e23484735def34
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
