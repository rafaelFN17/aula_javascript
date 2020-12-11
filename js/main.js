function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado mano";
}

function redirecionar(){
    window.open("https://www.google.com.br/");
}

function mouse(elemento){
    //document.getElementById("mouse").innerHTML = "mudou mano :o";
    elemento.innerHTML = "Mudou mano :o"
}

function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "voltou mano :)";
    elemento.innerHTML = "Voltou mano :)"
}









/*var nome = "Rafael Nascimento";

var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + "tem "  + idade + "anos");
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"))


var lisa = ['pera', 'maça', 'laranja']
lisa.push("uva")
lisa.pop("uva")
console.log(lisa.toString())


var fruta = {nome:"maça", cor:"vermelha"}

console.log(fruta.nome)


var fruta = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxo"}]


console.log(fruta)


var idade = prompt("Qual a sua idade")

if(idade >= 18){
    alert("maior de idade")
}
else{
    alert("menor de idade")
}


var count = 0;

while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}


var dia = new Date();
alert(dia.getTime())


function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/