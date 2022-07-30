window.alert("Contexto: Voce precisa mover todas as posses do fazendeiro para outra margem, O FAZENDEIRO PRECISA SER SEMPRE O PRIMEIRO ESCOLHIDO(tanto na ida quanto na volta)");
window.alert("O fazendeiro poderia levar apenas a si mesmo e uma única de suas compras — o lobo, o carneiro, ou a alface. Se fossem deixados sozinhos em uma mesma margem, o lobo comeria o carneiro e o carneiro comeria a alface. ")

const farmer = document.querySelector("#farmer");
const wolf = document.querySelector("#wolf");
const sheep = document.querySelector("#sheep");
const lettuce = document.querySelector("#lettuce");

farmer.addEventListener("click", moveFarmer);
wolf.addEventListener("click", moveWolf);
sheep.addEventListener("click", moveSheep);
lettuce.addEventListener("click", moveLettuce);

function moveFarmer(event) {
    embarque_desembarque(farmer);
}

function moveWolf(event) {
    embarque_desembarque(wolf);
}

function moveSheep(event) {
    embarque_desembarque(sheep);
}

function moveLettuce(event) {
    embarque_desembarque(lettuce);
}

function avaliaIda() {
    if (farmer.parentElement == idaParaDireita){
        return true;
    }
    else{
        return false;
    }
}

function avaliaVolta() {
    if (farmer.parentElement == voltaPelaEsquerda){
        return true;
    }
    else{
        return false;
    } 
}

function irDirparaEsq(event) //movim
{
    if (avaliaIda() == true) {
        while (idaParaDireita.firstChild) voltaPelaEsquerda.appendChild(idaParaDireita.firstChild);
            voltaPelaEsquerda.style.visibility = "hidden";
            idaParaDireita.style.visibility = "visible";
    }
}

function irEsqparaDir(event) {
    if (avaliaVolta() == true) {
        while (voltaPelaEsquerda.firstChild) idaParaDireita.appendChild(voltaPelaEsquerda.firstChild);
        voltaPelaEsquerda.style.visibility = "visible";
        idaParaDireita.style.visibility = "hidden";
    }
}

function embarque_desembarque(passageiro) {
    //IR DA DIREITA PARA A ESQUERDA
    if (passageiro.parentElement == leftMargin) {
        if (idaParaDireita.childElementCount == 2) return;
        else idaParaDireita.appendChild(passageiro);
    } else if (passageiro.parentElement == idaParaDireita) {
        if (avaliaIda()) {
            rightMargin.appendChild(passageiro);
        }
        else {
            leftMargin.appendChild(passageiro);
        }
    }


    //VOLTAR DA ESQUERDA PARA A DIREITA
    else if (passageiro.parentElement == rightMargin) {
        if (voltaPelaEsquerda.childElementCount == 2) return;
        else voltaPelaEsquerda.appendChild(passageiro);
    } else if (passageiro.parentElement == voltaPelaEsquerda) {
        if (avaliaVolta()) {
            leftMargin.appendChild(passageiro);
        }
        else {
            rightMargin.appendChild(passageiro);
        }
    }
}
const reset = document.querySelector('reset-button');

reset.appendChild('click', recomecar);

function recomecar() {
    console.log("PASSOU")
    window.alert("BOTAO APERTADO")
}
