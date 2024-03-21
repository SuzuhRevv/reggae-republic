export default function Navbar(){
    return(
        <div className="nav-bar">
            <div className="links">
                <a href="/" id="home"><li><span className="home">HOME</span></li></a>
                <a href="/atracoes" id="home"><li>ATRAÇÕES</li></a>
                <a href="/compras" id="home"><li>INGRESSOS</li></a>
                <a href="#" id="home"><li>EDIÇÕES</li></a>
                <a href="#" id="home"><li>REGISTROS</li></a>
            </div>
            <div className="buttons">
                <a href="/login" className="login"><button className="loginButton" id="loginButton">LOGIN</button></a>
                <a href="/cadastro" className="register"><button className="registerButton" id="registerButton">CADASTRO</button></a>
            </div>
        </div>
    )
}
