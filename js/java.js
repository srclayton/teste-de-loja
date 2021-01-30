var total = 0
var itens = 0
const nameItens = {1:'Conjunto de roupas 1', 2:'Conjunto de roupas 2', 3:'Conjunto de roupas 3', 4:'Conjunto de roupas 4'}
    function addItem(valor,nomeItem){
        total = total + valor
        att_qnt_itens()
        att_total_carrinho(valor, total, itens, nomeItem)
    }

    function att_qnt_itens(){
        itens = itens + 1
        document.getElementById("total-itens").innerHTML="<img class='img-carrinho' src='img/sacolas-de-compras(1).png'> " + itens + " itens";
    }
    function att_total_carrinho(valor, total, itens, nomeItem){
        valor = valor.toFixed(2);
        document.getElementById("test").innerHTML="";
        document.getElementById("total-carrinho").innerHTML="Total R$ " + total + " " + itens + " itens";
        document.getElementById("conteudo-carrinho").innerHTML+="<div class='row shadow'>"+
                                                                    "<div class='col-3'>"+
                                                                        "<img src='img/images.jpg' style='width:100%'></img>"+
                                                                    "</div>"+
                                                                    "<div class='col-9'>"+
                                                                    "<strong id='titulo-da-roupa-carrinho'> </strong>" + valor + nameItens[nomeItem] +
                                                                    "</div>"+
                                                                "</div><hr>";                                                                
    }