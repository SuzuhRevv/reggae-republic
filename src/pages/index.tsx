import styles from '@/styles/Home.module.css';
import Cabeçalho from '../components/cabeçalho';
import Navbar from '../components/nav-bar';
import LoggedNavbar from '../components/logged-nav-bar';
import Rodape from '../components/rodape';
import AboutUs from '../components/aboutus';
import Atraçoes from '../components/atraçoes';
import Ingressos from '../components/ingressos';
import Grandesnomes from '../components/grandesnomes';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <Cabeçalho />

      {session ? <LoggedNavbar /> : <Navbar />}

      <img src="banner.svg" className="banner-img" alt="Banner" />

      <AboutUs />

      <Atraçoes />

      <Ingressos />

      <Grandesnomes />

      <Rodape />
    </>
  );
}
