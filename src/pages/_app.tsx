import '@/styles/globals.css'
import '@/styles/cabeçalho.css'
import '@/styles/nav-bar.css'
import '@/styles/logged-nav-bar.css'
import '@/styles/rodape.css'
import '@/styles/aboutus.css'
import '@/styles/atraçoes.css'
import '@/styles/ingressos.css'
import '@/styles/grandesnomes.css'
import '@/styles/login.css'
import '@/styles/cadastro.css'
import '@/styles/atraçoes-page.css'
import '@/styles/compras.css'


import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
