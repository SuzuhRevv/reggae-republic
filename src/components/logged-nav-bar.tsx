import { useSession, signOut } from 'next-auth/react';

export default function LoggedNavbar() {
  const { data: session } = useSession();

  return (
    <div className="nav-bar">
      <div className="links">
        <a href="#" id="home">
          <li>
            <span className="home">HOME</span>
          </li>
        </a>
        <a href="/atracoes" id="home">
          <li>ATRAÇÕES</li>
        </a>
        <a href="/compras" id="home">
          <li>INGRESSOS</li>
        </a>
        <a href="#" id="home">
          <li>EDIÇÕES</li>
        </a>
        <a href="#" id="home">
          <li>REGISTROS</li>
        </a>
      </div>
      <div className="profile">
        <button className="profile-img" id="profile-imgButton">
          <img src="profile-pic.svg" alt="Profile" />
        </button>
        <a href="#">
          <li className="profile-name">{session?.user?.name}</li>
        </a>
        <button className="profile-arrow" id="profile-arrow-Button">
          <img src="feArrowDown2.svg" alt="Profile Arrow" />
        </button>
      </div>
    </div>
  );
}