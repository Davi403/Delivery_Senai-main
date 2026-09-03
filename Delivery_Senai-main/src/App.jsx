
import './App.css'

function App() {
  const bancoDeDados = [
  { id: 1, nome: "X-Bacon Duplo", descricao: "Duas carnes e muito bacon.", preco: 35.00 },
  { id: 2, nome: "Pizza Calabresa", descricao: "Tamanho Média 8 pedaços.", preco: 45.00 },
  { id: 3, nome: "Suco de Laranja", descricao: "Copo 500ml natural.", preco: 8.00 },
  { id: 4, nome: "Pudim Caseiro", descricao: "Fatia caprichada com calda extra.", preco: 12.00 }
];

  return (
<div>
      {bancoDeDados.map((item) => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <p>{item.id}</p>
          <p>{item.preco}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
