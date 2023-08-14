class CaixaDaLanchonete {

 

      

    calcularValorDaCompra(metodoDePagamento, itens) {

        
    
        //atributos

    let  codigo = ["cafe", "chantily","suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

    let  preco = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50];
    let precoDoProduto = 0.00;

    

    let  quantidade = 0;
    let  precoFinal = 0;


    if ((itens == null) || (itens === "")){

        return "Não há itens no carrinho de compra!";



    } else 


    if (((metodoDePagamento === "debito") || (metodoDePagamento === "credito") || (metodoDePagamento === "dinheiro")) == false){

        return "Forma de pagamento inválida!";


    } else 




        for (let i = 0; i < itens.length; i++) {
            let produto = "";
            let produtoPrincipal = "";
            let quantidadeCerta = 0;

            for (let z = 0; z < codigo.length; z++) {
             produto = itens[i].match(codigo[z]);

            if (produto) {
                console.log(produto[0]);
              let virgula =  itens[i].indexOf(",", 0);

                if ( (itens[i].substr(0, virgula) === codigo[z]) == false){

                    return "Item inválido!";
                } else

                

                produtoPrincipal = produto[0];
                
                 precoDoProduto = preco[z];
                 precoDoProduto = precoDoProduto. toFixed(2);
                
            }
            
            }
            if (produtoPrincipal === ""){
                return "Item inválido!";
            } else

            

            quantidade = itens[i].match(/\d+/g);

            if (quantidade) {
                

                if( (produtoPrincipal === "combo1") || (produtoPrincipal=== "combo2")){

                    quantidadeCerta = quantidade[1] ;
    
    
                } else

                quantidadeCerta = quantidade[0] ;

                console.log(quantidadeCerta);

                if (quantidadeCerta <= 0){
                    return "Quantidade inválida!";
                } else

                precoFinal = precoFinal + (quantidadeCerta *  precoDoProduto);


                
            }
          }


          if (metodoDePagamento === "dinheiro"){

            precoFinal = precoFinal - (precoFinal * 0.05);
          } else if( metodoDePagamento === "credito"){

            precoFinal = precoFinal + (precoFinal * 0.03);

          }

          precoFinal = precoFinal.toFixed(2);

         let  precoFinalString = precoFinal.toString();

          precoFinalString = precoFinalString.replace(".", ",");

          precoFinalString =  "R$ " + precoFinalString ;
       
        return precoFinalString;
    }

    

}

let a = new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['combo1,2','chantily,2']);

  console.log(a);

export { CaixaDaLanchonete };
