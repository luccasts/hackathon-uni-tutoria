import { useState } from "react";
import { service } from "../../api/service";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await service.registerUser(nome, curso, email, senha);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      Criar Conta
      <form onSubmit={(e) => handleLogin(e)} action="" method="post">
        <label htmlFor="nome">Nome</label>
        <input
          onChange={(e) => setNome(e.target.value)}
          id="nome"
          type="text"
        />
        <label htmlFor="curso">Escolha o curso:</label>
        <select id="curso" name="curso">
          <option value="informatica">Informática</option>
          <option value="engenharia">Engenharia</option>
          <option value="medicina">Medicina</option>
          <option value="direito">Direito</option>
        </select>
        <input
          onChange={(e) => setSenha(e.target.value)}
          id="senha"
          type="password"
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
