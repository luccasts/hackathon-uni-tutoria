import { useState } from "react";
import { service } from "../../api/service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await service.loginUser(email, senha);
      console.log(res, "res login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      Login
      <form onSubmit={(e) => handleLogin(e)} action="" method="post">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
        <label htmlFor="senha">Senha</label>
        <input
          onChange={(e) => setSenha(e.target.value)}
          id="senha"
          type="password"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
