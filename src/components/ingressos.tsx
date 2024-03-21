export default function Ingressos(){
    return(
        <div className="ingressos">
        <h1 className="ingressos-title">ADQUIRA JÁ O SEU INGRESSO</h1>
        <div className="category-row">
          <img src="louge.svg" className="category"></img>
          <img src="arena.svg" className="category"></img>
          <img src="backstage.svg" className="category"></img>
        </div>
        <a href="/compras"><button className="comprarIngresso" id="comprarIngresso">COMPRA INGRESSO</button></a>
      </div>
    )
}
