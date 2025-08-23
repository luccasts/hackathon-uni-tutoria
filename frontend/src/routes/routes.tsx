import Layout from "../components/layout";
import { AuthProvider } from "../context/auth";
import { MessageProvider } from "../context/message";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/cadastrar";

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
