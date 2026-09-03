function ItemCardapio({nome, descricao, preco}) {
return (

 <div style={{textAlign: "center", margin: '15px'}}>
    <p>{nome} </p>
    <p>{descricao} </p>
    <p style={{color: "green"}}>Preço {preco}</p>

    
 </div>
)
}

export default ItemCardapio;