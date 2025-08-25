import { useState } from "react";
import { service } from "../../api/service";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("informatica");
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await service.registerUser(nome, course, email, senha);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <div>
        <h1> Criar Conta</h1>
      </div>

      <form onSubmit={(e) => handleLogin(e)} action="" method="post">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            required
            onChange={(e) => setNome(e.target.value)}
            id="nome"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="curso">Escolha o curso:</label>
          <select
            required
            onChange={(e) => setCourse(e.target.value)}
            id="curso"
            name="curso"
          >
            <option value="informatica">Informática</option>
            <option value="engenharia">Engenharia</option>
            <option value="medicina">Medicina</option>
            <option value="direito">Direito</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            required
            onChange={(e) => setSenha(e.target.value)}
            id="senha"
            type="password"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
