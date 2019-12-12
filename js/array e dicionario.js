var lista = ["Maçã", "Pêra", "Laranja"];
// .push || Adiciona um novo elemento ao Array.
lista.push("Uva");
// .pop || Remove o último elemento do Array.
lista.pop();
// .lenght || Mostra a quantidade de elementos do Array.
console.log(lista.length);
// .reverse || Mostra os elementos do Array no sentido contrário.
console.log(lista.reverse);
// .toString || Transforma o Array por completo em String.
console.log(lista.toString());
// .join || Transforma em string e dá a possibilidade de alterar o separador do Array.
console.log(lista.join(" - "));
// dicionário || Organiza vários elementos similar á um objeto.
var fruta = {nome: "Maçã", cor: "Vermelho"}
console.log(fruta.cor);
// lista de dicionários || Mesma definição, porém, se comporta como Array.
var frutas = [{nome: "Maçã", cor: "Vermelho"}, {nome: "Uva", cor: "Roxo"}]
console.log(frutas);
alert(frutas[1].nome);