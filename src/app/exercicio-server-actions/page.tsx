"use client";
import { useState } from "react";
import { login } from "@/actions/server-actions-exercicio";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const submitLogin = async () => {
    const authToken = await login(username, password);
    if (authToken) {
      setToken(authToken);
    }
  };

  return (
    <main>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={submitLogin}>
        Logar
      </button>

      {token && <div>Token: {token}</div>}
    </main>
  );
}
