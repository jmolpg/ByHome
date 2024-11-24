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
  
