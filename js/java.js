var total = 0
var itens = 0
    function addItem(valor){
        total = total + valor
        att_qnt_itens()
        att_total_carrinho(total, itens)
    }

    function att_qnt_itens(){
        itens = itens + 1
        document.getElementById("total-itens").innerHTML="<img class='img-carrinho' src='img/sacolas-de-compras(1).png'> " + itens + " itens";
    }
    function att_total_carrinho(valor,nItens){
        valor = valor.toFixed(2);
        document.getElementById("test").innerHTML="";
        document.getElementById("total-carrinho").innerHTML="Total R$ " + valor;
        document.getElementById("conteudo-carrinho").innerHTML+="<div class='row shadow'>"+
                                                                    "<div class='col-3'>"+
                                                                        "<img src='img/images.jpg' style='width:100%'></img>"+
                                                                    "</div>"+
                                                                    "<div class='col-9'>"+
                                                                        "cucucucucucucuucu"+
                                                                    "</div>"+
                                                                "</div><hr>";                                                                 
    }