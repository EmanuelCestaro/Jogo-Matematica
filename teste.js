var segundos = 10;
const gameOver = document.getElementById("gameOver");
var input = document.getElementById("num1");
var numero = document.getElementById("numero");
var x = document.getElementById("conta1");
var y = document.getElementById("conta2");
document.getElementById("sinal");
var a = document.getElementById("streak")
var q = questao
document.getElementById("submitBt").addEventListener("click", function() {
    var valorInput = document.getElementById("num1").value;
});

gameOver.style.display = "none";
function contagem() {
    if (segundos > 0) {
        segundos--;
        numero.textContent = segundos; 
    } else if (segundos === 0) {
        clearInterval(intervalo); 
        numero.style.display = "none";
        gameOver.style.display = "block"; 
        input.style.display = "none";
    }
}

var intervalo = setInterval(contagem, 1000); 
function questao() {   
        var operacao = Math.floor(Math.random() * 4 + 1);

        if (operacao === 1) {
            x = Math.floor(Math.random() * 100);
            conta1.textContent = x;
            y = Math.floor(Math.random() * 100);
            conta2.textContent = y;
            z = x + y;
            sinal.innerHTML = " + "
        }
        else if (operacao === 2) {
            x = Math.floor(Math.random() * 100);
            conta1.textContent = x;
            y = Math.floor(Math.random() * 100);
            conta2.textContent = y;
                while( y > x ){
                    x = Math.floor(Math.random() * 100);
                    conta1.textContent = x;
                }
            z = x - y;
            sinal.innerHTML = " - "
        }
        else if (operacao === 3) {
            x = Math.floor(Math.random() * 10 + 1);
            y = Math.floor(Math.random() * 10 + 1);
            conta1.innerHTML = x;
            conta2.innerHTML = y;
            z = x * y;
            sinal.innerHTML = " * "
        }
        else {
            x = Math.floor(Math.random() * 100);
            sinal.innerHTML = " / "
            y =  x * Math.floor(Math.random() * 10)
            conta1.innerHTML = y;
            conta2.innerHTML = x;
            z = y / x;
        }
    }
   document.getElementById("submitBt").addEventListener("click", function () {
        var valorInput = parseInt(input.value);
       if (valorInput === z) {
          alert("Acertou!");
           segundos = 10
           input.value = ""; 
            a.innerHTML++
        questao(); 
        } else {
            alert("Errou! Tente novamente.");
        }
});
    document.getElementById("num1").addEventListener("keydown", function (event) {
    if (event.key!="Enter")
    return
    var valorInput = parseInt(input.value);
    if (valorInput === z) {
        alert("Acertou!");
        segundos = 10
        input.value = ""; 
        a.innerHTML++
        questao(); 
    } else {
        alert("Errou! Tente novamente.");
    }
    });
questao();