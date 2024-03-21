export default function Cabeçalho(){
    return(
        <div className="cabeçalho">
            <a href="/"><img src="logo.svg" className="logo"></img></a>
            <ul className="cabeçalho-redes-icons">
                <a href="https://www.instagram.com" className="icon"><img src="instagram.svg" ></img></a>
                <a href="https://www.facebook.com" className="icon"><img src="facebook.svg"></img></a>
                <a href="https://www.youtube.com" className="icon"><img src="youtube.svg" ></img></a>
            </ul>
            <img src="sanduiche.svg" className="sanduiche"></img>
        </div>
    )
}
