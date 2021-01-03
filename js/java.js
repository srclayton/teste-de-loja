var total = 0
var itens = 0
    function addItem(valor){
        total = total + valor
        att_qnt_itens()
        att_total_carrinho(total)
    }

    function att_qnt_itens(){
        itens = itens + 1
        document.getElementById("total-itens").innerHTML="<img class='img-carrinho' src='img/sacolas-de-compras(1).png'> " + itens + " itens";
    }
    function att_total_carrinho(valor){
        valor = valor.toFixed(2);
        document.getElementById("total-carrinho").innerHTML="Total R$ " + valor;
    }