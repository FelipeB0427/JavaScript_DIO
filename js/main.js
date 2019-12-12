function carrega()
{
  alert("Página Carregada!");
}

function muda(elemento)
{
  console.log(elemento.value);
}

function botao()
{

// .getElementById || Pede como parametro um id de uma tag HTML, para poder realizar a manupulação.

  document.getElementById("click").innerHTML = "<b>Obrigado por clicar!</b>";
  console.log(document.getElementById("click"));
  alert("Clicou!");

//

}

function redirecionar()
{

// .open || Abre o site que deseja em uma nova aba.
  window.open("https://google.com.br");
//

// .location.href || Abre o site que deseja na mesma aba. 
  window.location.href = "https://google.com.br";
//

}

function trocar(elemento)
{
  //document.getElementById("mousemove").innerHTML = "<b>Texto alterado por ter passado o mouse!<b>";
  elemento.innerHTML = "<b>Texto alterado por ter passado o mouse!<b>";
}

function voltar(elemento)
{
  //document.getElementById("mousemove").innerHTML = "Passe o mouse sobre.";
  elemento.innerHTML = "Passe o mouse sobre.";
}