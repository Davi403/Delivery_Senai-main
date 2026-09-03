import { useEffect, useState } from 'react';
function App() {
  const [cardapio, setCardapio] = useState([]);
  useEffect (() => {
console.log("Conectando ao servidor...");
  setTimeout(() => {
    setCardapio([
      { id: 101, nome: "Combo Master", descricao: "Dois lanches + refri 2L", preco: 65.00 },
      { id: 102, nome: "Hambúrguer de Grão de Bico", descricao: "Opção Vegana", preco: 28.00 },
      { id: 103, nome: "Açaí na Tigela", descricao: "500ml com morango e leite condensado", preco: 18.00 }
    ]);
  }, 2000); 
  }, []);
  return (
<div>
  {cardapio.legth === 0 ? <h2>🔄 Carregando restaurante...</h2>  : 
      cardapio.map((item) => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <p>{item.preco}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
