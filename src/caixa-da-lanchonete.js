class CaixaDaLanchonete {

 

      

    calcularValorDaCompra(metodoDePagamento, itens) {

        
    
        //atributos

    let  codigo = ["cafe", "chantily","suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

    let  preco = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50];
    let precoDoProduto = 0.00;

    let produtosLista = [];

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

                if ( (itens[i].substr(0, virgula) === codigo[z]) == false){

                    return "Item inválido!";
                } else

                produtosLista.push(produto[0]);

                

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

          produtosLista.sort();

          for (let i = 0; i < produtosLista.length; i++) {

            if (produtosLista[i] === "queijo") {
                let e = i ;
          

                while ((produtosLista[e] === "sanduiche") == false){

                    
                for ( e ; e < produtosLista.length; e++) {

                    if (produtosLista[e] === "sanduiche") break;
                    
                
            } 
           if  ((produtosLista[e] === "sanduiche") == false){
            return "Item extra não pode ser pedido sem o principal";
           }
        }
    }

          }

          produtosLista.reverse();

          for (let i = 0; i < produtosLista.length; i++) {

            if (produtosLista[i] === "chantily") {
                let e = i ;
          

                while ((produtosLista[e] === "cafe") == false){

                    
                for ( e ; e < produtosLista.length; e++) {

                    if (produtosLista[e] === "cafe") break;
                    
                
            } 
           if  ((produtosLista[e] === "cafe") == false){
            return "Item extra não pode ser pedido sem o principal";
           }
        }
    }

          }

          


          if (metodoDePagamento === "dinheiro"){

            precoFinal = precoFinal - (precoFinal * 0.05);
          } else if( metodoDePagamento === "credito"){

            precoFinal = precoFinal + (precoFinal * 0.03);

          }

          if ((precoFinal == 0)){

            return "Não há itens no carrinho de compra!";
    
    
    
        } else 

          precoFinal = precoFinal.toFixed(2);

         let  precoFinalString = precoFinal.toString();

          precoFinalString = precoFinalString.replace(".", ",");

          precoFinalString =  "R$ " + precoFinalString ;
       
        return precoFinalString;
    }

    

}

let a = new CaixaDaLanchonete()
  .calcularValorDaCompra('dinheiro', ['chantily,2', 'cafe,2' ,  ]);

  console.log(a);

export { CaixaDaLanchonete };
