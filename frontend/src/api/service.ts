import { AxiosError } from "axios";
import { axiosInstance } from "./instance";

export const service = {
  registerUser: async (
    nome: string,
    course: string,
    email: string,
    senha: string,
  ) => {
    try {
      const res = await axiosInstance.post("/api/users/register/", {
        username: nome,
        password: senha,
        course: course,
        email: email,
      });

      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      } else {
        console.error("Erro desconhecido: ", error);
      }
    }
  },

  loginUser: async (user: string, senha: string) => {
    try {
      const res = await axiosInstance.post("/api/users/login/", {
        username: user,
        password: senha,
      });
      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
  },

  getUserData: async (acesso: string) => {
    try {
      const res = await axiosInstance.get("/api/users/refresh", {
        headers: {
          Authorization: `Bearer ${acesso}`,
        },
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  getToken: async (nome: string, senha: string) => {
    try {
      const res = await axiosInstance.post("/api/users/refresh/", {
        nome,
        senha,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};
