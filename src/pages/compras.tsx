import Cabeçalho from '../components/cabeçalho'
import Navbar from '../components/nav-bar'
import LoggedNavbar from '../components/logged-nav-bar'
import { useSession } from 'next-auth/react';
import Rodape from '../components/rodape'
import { useState } from 'react';
import { createPedidoConfirmado } from './api/pedidoConfirmado';

export default function Home() {
    const { data: session, status } = useSession();
    const [lougeQuantity, setLougeQuantity] = useState(0);
    const [arenaQuantity, setArenaQuantity] = useState(1);
    const [backstageQuantity, setBackstageQuantity] = useState(0);

    const ingressoLougePrice = 77.0;
    const ingressoArenaPrice = 77.0;
    const ingressoBackstagePrice = 77.0;
    const taxaPorIngresso = 7.7;

    const handleLougeIncrement = () => {
        if (lougeQuantity < 3) {
          setLougeQuantity(lougeQuantity + 1);
        }
      };
      
      const handleLougeDecrement = () => {
        if (lougeQuantity > 0) {
          setLougeQuantity(lougeQuantity - 1);
        }
      };
      
      const handleArenaIncrement = () => {
        if (arenaQuantity < 3) {
          setArenaQuantity(arenaQuantity + 1);
        }
      };
      
      const handleArenaDecrement = () => {
        if (arenaQuantity > 0) {
          setArenaQuantity(arenaQuantity - 1);
        }
      };
      
      const handleBackstageIncrement = () => {
        if (backstageQuantity < 3) {
          setBackstageQuantity(backstageQuantity + 1);
        }
      };
      
      const handleBackstageDecrement = () => {
        if (backstageQuantity > 0) {
          setBackstageQuantity(backstageQuantity - 1);
        }
      };

      

    const subtotal =
        lougeQuantity * ingressoLougePrice +
        arenaQuantity * ingressoArenaPrice +
        backstageQuantity * ingressoBackstagePrice;

    const taxas = (lougeQuantity + arenaQuantity + backstageQuantity) * taxaPorIngresso;

    return (
        <>
            <Cabeçalho />

            {session ? <LoggedNavbar /> : <Navbar />}

            <div className="buy-container">
                <div className="efetuar-pedido">
                    <h1 className="titulo1">Efetuar pedido</h1>
                </div>
                <img className="line3" src="line3.svg"></img>
                <img className="line4" src="line4.svg"></img>

                <div className="selecionar-ingressos">
                    <div className="selection-row1">
                        <div className="ingresso-text">
                            <h2 className="selecionar-louge">LOUGE REPÚBLICA PARA SEMPRE</h2>
                            <h3 className="louge-price">R$ 77,00 (+R$ 7,70 taxa)</h3>
                        </div>
                        <div className="add-buttons">
                            <img
                                className="add"
                                src="add.svg"
                                onClick={handleLougeIncrement}
                            ></img>
                            <h3 className="num1">{lougeQuantity}</h3>
                            <img
                                className="rmv"
                                src="rmv.svg"
                                onClick={handleLougeDecrement}
                            ></img>
                        </div>
                    </div>
                    <div className="selection-row2">
                        <div className="ingresso-text">
                            <h2 className="selecionar-arena">ARENA 20 ANOS</h2>
                            <h3 className="arena-price">R$ 77,00 (+R$ 7,70 taxa)</h3>
                        </div>
                        <div className="add-buttons">
                            <img
                                className="add"
                                src="add.svg"
                                onClick={handleArenaIncrement}
                            ></img>
                            <h3 className="num1">{arenaQuantity}</h3>
                            <img
                                className="rmv"
                                src="rmv.svg"
                                onClick={handleArenaDecrement}
                            ></img>
                        </div>
                    </div>
                    <div className="selection-row3">
                        <div className="ingresso-text">
                            <h2 className="selecionar-arena">BACKSTAGE</h2>
                            <h3 className="arena-price">R$ 77,00 (+R$ 7,70 taxa)</h3>
                        </div>
                        <div className="add-buttons">
                            <img
                                className="add"
                                src="add.svg"
                                onClick={handleBackstageIncrement}
                            ></img>
                            <h3 className="num1">{backstageQuantity}</h3>
                            <img
                                className="rmv"
                                src="rmv.svg"
                                onClick={handleBackstageDecrement}
                            ></img>
                        </div>
                    </div>
                    <div className="subtotal">
                        <h3 className="count-subtotal">Valor Ingressos: R$ {subtotal.toFixed(2)}</h3>
                        <h3 className="count-subtotal">Descontos: R$ 0,00</h3>
                        <h3 className="count-subtotal">Taxas: R$ {taxas.toFixed(2)}</h3>
                        <h3 className="sub-total">Sub-Total: R$ {(subtotal + taxas).toFixed(2)}</h3>
                    </div>
                    <button className="pay-button1" type="submit">SEGUIR PARA PAGAMENTO</button>
                    <div className="disclaimer">
                        <h3 className="disc-text">
                            Compras limitadas a 3 ingressos por CPF<br />
                            Evento para maiores de 18 anos<br />
                            <span className="verde">Leia o regulamento</span><br />
                        </h3>
                    </div>
                </div>
                <div className="forma-de-pagamento">
                    <h1 className="titulo1">Pagamento</h1>
                    <img className="line3" src="line3.svg"></img>
                    <img className="line4-2" src="line4.svg"></img>
                </div>
            <div className="payment1">
                <div className="method-info">
                    <h1 className="credit-card">Cartão de débito</h1>
                    <div className="card-imgs">
                        <img src="logos_mastercard.svg" className="mastercard"></img>
                        <img src="logos_visa.svg"></img>
                    </div>
                </div>
                
                <form className="payment-form">
                    <div className="form-group1">
                        <label htmlFor="card-num">Número do cartão</label>
                        <input type="card-num" id="card-num" name="card-num" className="input-container1" />
                    </div>
                    <div className="form-group2">
                        <div className="inp1">
                            <label htmlFor="name">Nome</label>
                            <input type="name" id="name" name="name" className="input-container2" />
                        </div>
                        < div className="inp2">
                                <label htmlFor="cvv">CVV</label>
                                <input type="cvv" id="cvv" name="cvv" className="input-container3" />
                        </div>
                    </div>
                    <div className="form-group3">
                        <label htmlFor="name">Vencimento</label>
                        <input type="name" id="name" name="name" className="input-container1" />
                        <h3 className="sub-total">Sub-Total: R$ 132,00</h3>
                    </div>
                    <button className="confirm-button" type="submit">
                        CONFIRMAR DADOS
                    </button>
                </form>
            </div>
            <div className="forma-de-pagamento">
                <h1 className="titulo1">Confirmação do pedido</h1>
                <img className="line3" src="line3.svg"></img>
                <img className="line4-3" src="line4.svg"></img>
            </div>
            <div className="confirmaçao">
                <h3 className="conf-text1">
                    <span className="bold">Produto: </span>
                    Ingresso República do Reggae 2023</h3>
                <h3 className="conf-text">
                    <span className="bold">Setor: </span>
                    Arena 20 anos</h3>
                <h3 className="conf-text">
                    <span className="bold">Valor: </span>
                    80,00</h3>
                <h3 className="conf-text">
                    <span className="bold">Quantidade: </span>
                    2</h3>
                <h3 className="conf-text">
                    <span className="bold">Forma de pagamento: </span>
                    Cartão de débito</h3>
                <h3 className="conf-text">
                    <span className="bold">Número do cartão: </span>
                    xxxxxxxxxxxxxxxx</h3>
                <h3 className="conf-text">
                    <span className="bold">Nome: </span>
                    {session?.user?.name}</h3>
                <button className="confirm2-button" type="submit">
                    CONFIRMAR DADOS
                </button>
            </div>
        </div>
  
        <Rodape/>
      </>
    )
  }
  