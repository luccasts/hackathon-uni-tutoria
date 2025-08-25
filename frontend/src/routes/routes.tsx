import Layout from "../components/layout/Layout";
import { AuthProvider } from "../context/auth";
import { MessageProvider } from "../context/message";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Cadastrar";

export const routes = [
  {
    path: "/",
    element: (
      <MessageProvider>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </MessageProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cadastrar",
        element: <RegisterPage />,
      },
    ],
  },
];
