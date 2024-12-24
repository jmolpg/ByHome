// Função para realizar uma busca (simulada)
function searchProperties() {
    alert("A busca por imóveis será realizada!");
  }

  function toggle(activeButton) {
    // Remove a classe 'active' de ambos os botões
    document.getElementById("comprar").classList.remove("active");
    document.getElementById("alugar").classList.remove("active");
  
    // Adiciona a classe 'active' ao botão clicado
    document.getElementById(activeButton).classList.add("active");
  }
  

  // Lista de imagens do carrossel
  const carrosseis = {
 carrossel1:
[
  '../carrossel images/pexels-fotoaibe-1571453.jpg',
  '../carrossel images/pexels-fotoaibe-1571460.jpg',
  '../carrossel images/pexels-fotoaibe-1643384.jpg',
  '../carrossel images/pexels-fotoaibe-1668860.jpg'
],
carrossel2:
[
  '../carrossel images/pexels-fotoaibe-813692.jpg',
  '../carrossel images/pexels-homelane-com-492179-1776574.jpg',
  '../carrossel images/pexels-home-decor-interiors-634144-1827054.jpg'
],
carrossel3:
[
  '../carrossel images/pexels-pixabay-259962.jpg',
  '../carrossel images/pexels-pixabay-265004.jpg',
  '../carrossel images/pexels-itsterrymag-2635038.jpg',
  '../carrossel images/pexels-emrecan-2079246.jpg'
],
carrossel4:
[
  '../carrossel images/pexels-andrew-3201763.jpg',
  '../carrossel images/pexels-houzlook-3797991.jpg',
  '../carrossel images/pexels-jvdm-1457842.jpg'
]
}

// Armazenar os índices atuais de cada carrossel
const indicesAtuais = {
  carrossel1: 0,
  carrossel2: 0,
  carrossel3: 0,
  carrossel4: 0,
};

// Função para mudar as imagens dentro de cada carrossel
function mudarImagem(idCarrossel, direcao) {
  const carrossel = document.getElementById(idCarrossel);
  const imagem = carrossel.querySelector('img');
  const imagens = carrosseis[idCarrossel];

  // Obter o índice atual
  let indiceAtual = indicesAtuais[idCarrossel];

  // Atualiza o índice de acordo com a direção
  indiceAtual += direcao;

  // Se o índice ultrapassar os limites, reinicia a sequência
  if (indiceAtual >= imagens.length) {
    indiceAtual = 0; // Vai para a primeira imagem
  } else if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1; // Vai para a última imagem
  }

  // Atualiza o src da imagem para a próxima ou anterior
  imagem.src = imagens[indiceAtual];

  // Atualiza o índice armazenado
  indicesAtuais[idCarrossel] = indiceAtual;
}

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os elementos de checkbox (que controlam os dropdowns)
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdownToggleComprar = document.getElementById('dropdown-toggle-comprar');

  // Adiciona evento de clique para o dropdown de "Arrendar"
  dropdownToggle.addEventListener('change', function () {
      if (dropdownToggle.checked) {
          // Se o "Arrendar" estiver marcado, fechamos o "Comprar"
          dropdownToggleComprar.checked = false;
      }
  });

  // Adiciona evento de clique para o dropdown de "Comprar"
  dropdownToggleComprar.addEventListener('change', function () {
      if (dropdownToggleComprar.checked) {
          // Se o "Comprar" estiver marcado, fechamos o "Arrendar"
          dropdownToggle.checked = false;
      }
  });
});



// Seleciona o botão de filtros e o dropdown de filtros
const filterButton = document.getElementById('filter-btn');
const filtersDropdown = document.getElementById('filters-dropdown');

// Função para alternar a exibição do dropdown
filterButton.addEventListener('click', function() {
    // Alterna a visibilidade do dropdown de filtros
    if (filtersDropdown.style.display === "none" || filtersDropdown.style.display === "") {
        filtersDropdown.style.display = "block";  // Exibe o dropdown
    } else {
        filtersDropdown.style.display = "none";   // Oculta o dropdown
    }
});

// Função para fechar o dropdown se o usuário clicar fora
window.addEventListener('click', function(event) {
    if (!event.target.closest('.search-container')) {
        filtersDropdown.style.display = "none";
    }
});
