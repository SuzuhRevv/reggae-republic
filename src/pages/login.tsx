import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ZodError, z } from 'zod';
import Cabeçalho from '../components/cabeçalho';
import Rodape from '../components/rodape';

const loginSchema = z.object({
  email: z.string().email({ message: 'Insira um email válido' }),
  password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    try {
      loginSchema.parse({ email, password });
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.issues.map((issue) => issue.message).join(', ');
        setError(errorMessage);
        return;
      }
    }

    const result = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });}

  return (
    <div className="page-container">
      <Cabeçalho />
      <div className="background">
        <img src="loginbg.svg" className="loginbg"></img>
      </div>
      <div className="spacer"></div>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="input-container" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" className="input-container" />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Mantenha-me conectado</label>
          </div>
          <button className="login-button" type="submit">
            LOGIN
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <hr className="divider" />
        <p className="register-link">
          Não possui uma conta? <a href="/cadastro" className="verde">Cadastre-se</a>
        </p>
      </div>
      <Rodape />
    </div>
  );
}
