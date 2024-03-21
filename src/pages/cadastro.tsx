import { FormEvent } from "react";
import Cabeçalho from '../components/cabeçalho';
import Rodape from '../components/rodape';

import Link from 'next/link';

import { signIn } from 'next-auth/react'

export default function Cadastro(){
    async function handleSubmit(e: FormEvent) {

        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement)

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                email: form.get('email'),

                name: form.get('name'),

                password: form.get('password'),
            })
        })
        const data = await res.json();

        if (!data.user) return null;
        await signIn('credentials', { 
            email: data.user.email,
            name: data.user.name,
            password: form.get('password'),
            callbackUrl: '/login' 
        });


    } 

    return(
      <>
        <div className="background">
        <img src="loginbg.svg" className="loginbg"></img>
        </div>
        <Cabeçalho/>
        <div className="container">
        <h1 className="register-title">Criar Conta</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group-registro">
            <label htmlFor="name">Nome:</label>
            <input  className="input-container-1"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="form-group-registro">
            <label htmlFor="email">E-mail:</label>
            <input  className="input-container-1"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group-registro">
            <label htmlFor="password">Senha:</label>
            <input  className="input-container-1"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className="register-button" type="submit">Cadastrar</button>
        </form>
        <p className="login-link">
          Já está registrado? <a href="/login" className="verde">Faça login!</a>
        </p>
      </div>
      <Rodape/>
    </>
    )
}
