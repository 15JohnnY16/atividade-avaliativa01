let series = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    if (!nome || !genero || descricao.length < 10) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    series.push({ nome, genero, descricao });
    form.reset();
    alert("Série cadastrada com sucesso!");
    atualizarListagem();
    navegar('listagem');
  });

  atualizarListagem();
});

function atualizarListagem() {
  const lista = document.getElementById("listaSeries");
  lista.innerHTML = "";

  series.forEach((serie, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${serie.nome}</strong> (${serie.genero})<br>${serie.descricao}
                    <button onclick="removerSerie(${index})">Remover</button>`;
    lista.appendChild(li);
  });
}

function removerSerie(index) {
  if (confirm("Deseja remover esta série?")) {
    series.splice(index, 1);
    atualizarListagem();
  }
}

function navegar(pagina) {
  document.querySelectorAll(".pagina").forEach(secao => {
    secao.classList.add("hidden");
  });
  document.getElementById(pagina).classList.remove("hidden");
}