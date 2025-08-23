import { axiosInstance } from "./instance";

export const service = {
  registerUser: async (
    nome: string,
    course: string,
    email: string,
    senha: string,
  ) => {
    try {
      const res = await axiosInstance.post("/api/", {
        username: nome,
        password: senha,
        course: course,
        email: email,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  loginUser: async (email: string, senha: string) => {
    try {
      const res = await axiosInstance.post("/api/login/", {
        email: email,
        password: senha,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },

  getUserData: async (acesso: string) => {
    try {
      const res = await axiosInstance.get("/api/refresh", {
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
      const res = await axiosInstance.post("api/auth/login/", {
        nome,
        senha,
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};
