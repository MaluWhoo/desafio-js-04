// 1.0 - Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// alert("Bem-vindo ao meu programa!");

// 2.0 - Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = prompt("Qual é o seu nome?");
alert (`Bem-vindo ao meu programa ${nome}!`);

// 4.0 - Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual a sua linguagem de programação favorita?");
console.log(`Linguagem de programação favorita: ${linguagem}`);



// 5.0 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 5;

let restultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${restultado}.`);

// 6.0 - Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor3 = 10;
let valor4 = 2;

let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

// 7.0 - Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Você é maior de idade! Já pode ser preso e beber!");
} else {
    alert("Você é menor de idade! Ainda não pode ser preso, mas já pode beber em alguns países!");
}

// 8.0 -  Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt("Digite um número:");
if (numero > 0){
    alert("O número é positivo!")
}else if(numero < 0){
    alert("O número é negativo!")
}else{
    alert("O número é zero!")
}

// 9.0 - um loop while para imprimir os números de 1 a 10 no console.

let contagem = 1;
while (contagem <= 10){
    console.log(contagem); 
    contagem++;
}

// 10.0 - Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = prompt("Digite sua nota final:")
if (nota >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado");
}

// 11.0 - Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

// 12.0 - Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let random = parseInt(Math.random() * 10 + 1);
console.log(random);

// 13.0 - Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let randomMil = parseInt(Math.random() * 1000 + 1);
console.log(randomMil);
