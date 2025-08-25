import { useState } from "react";
import { service } from "../../api/service";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await service.loginUser(user, senha);
      console.log(res, "res login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div>
        <h1> Login</h1>
      </div>

      <form onSubmit={(e) => handleLogin(e)} action="" method="post">
        <label htmlFor="text">User</label>
        <input
          onChange={(e) => setUser(e.target.value)}
          id="text"
          type="text"
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
