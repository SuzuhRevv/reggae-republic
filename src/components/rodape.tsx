export default function Rodape(){
    return(
        <div className="rodape">
            <div className="esquerda">
                <div className="column1">
                    <img src="logo1.svg" className="logo1"></img>
                    <img src="logo-m.svg" className="logo2"></img>
                    <p className="rodape-p">Acompanhe nossas redes sociais:</p>
                </div>

                <div className="social-row">
                    <a href="https://www.instagram.com" className="icon1"><img src="instagram1.svg" ></img></a>
                    <a href="https://www.facebook.com" className="icon1"><img src="facebook1.svg"></img></a>
                    <a href="https://www.youtube.com" className="icon1"><img src="youtube1.svg" ></img></a>
                    <a href="https://www.twitter.com" className="icon1"><img src="twitter1.svg" ></img></a>
                </div>
                <div className="social-row-mobile">
                    <a href="https://www.instagram.com" className="icon2"><img src="insta-m.svg" ></img></a>
                    <a href="https://www.facebook.com" className="icon2"><img src="face-m.svg"></img></a>
                    <a href="https://www.twitter.com" className="icon2"><img src="twitter-m.svg" ></img></a>
                </div>
                <p className="rodape-m">República do reggae</p>

            </div>
            <div className="direita">
                <p className="rodape-p">REALIZAÇÃO:</p>
                <img src="patrocinios.svg" className="patrocinios"></img>
            </div>
        </div>
    )
}
