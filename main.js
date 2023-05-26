let menu = document.querySelector(".cabecalho_navbar");
document.querySelector("#menu-barra").onclick = () => {
  menu.classList.toggle("active");
};

let pesquisa = document.querySelector(".cabecalho_pesquisa");

var swiper = new Swiper(".produtos_row", {
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs_row", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".avaliacao_row", {
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function pedirConeTrufado() {
  var numero = "5516988171285";
  var mensagem = "TESTE 1";

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link);
}

function pedirPocket() {
  var numero = "5516988171285";
  var mensagem = "TESTE 2";

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link);
}

function pedirPipocaGourmet() {
  var numero = "5516988171285";
  var mensagem = "TESTE 3";

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link);
}

function pedirBoloDePote() {
  var numero = "5516988171285";
  var mensagem = "TESTE 4";

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link);
}

function pedirTrufa() {
  var numero = "5516988171285";
  var mensagem = "TESTE 5";

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link);
}

document.getElementById("fale_conosco").addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(event.target.action, {
    method: 'POST',
    body: new FormData(event.target)
  })
    .then(function (response) {
      if (response.ok) {
        alert("Mensagem enviada com sucesso ! Obrigado por entrar em contato");
      } else {
        alert("Houve um erro ao enviar mensagem. Tente novamente mais tarde.");
      }
    })
    .catch(function (error) {
      console.error('Erro:', error);
    });
});