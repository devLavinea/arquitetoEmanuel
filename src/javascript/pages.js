
var caminho = window.location.search;
console.log(caminho);

// Segundo projeto do portifólio

if(caminho === "?projeto=projects_2"){

  let img1 = document.querySelector('#a');
  img1.setAttribute ("src", "/src/images/img2.jpg");


   let img23 = document.querySelector('.content-img-center');
   img23.remove();
 
  let img4 = document.querySelector('#d');
  img4.setAttribute ("src", "/src/images/img2.1.jpg");

  let text = document.querySelector('#content_projects_text_1');
  text.innerHTML = "O projeto do lavabo mistura o rústico e o moderno com harmonia. <br>A bancada preta em contraste com os azulejos verdes na parede cria um visual sofisticado, enquanto o teto de madeira marrom escuro adiciona aconchego e um toque acolhedor. <br>O piso claro em tom neutro equilibra o ambiente, proporcionando leveza. <br>Detalhes em cerâmica complementam a composição, tornando o espaço elegante, acolhedor e com um toque de personalidade.";
  
  let text_2 = document.querySelector('#content_projects_text_2');
  text_2.textContent = "Campinas - 2024";
  


}

// Terceiro projeto do portifólio

if(caminho === "?projeto=projects_3"){

  let img1 = document.querySelector('#a');
  img1.setAttribute ("src", "/src/images/img3.jpg");

  let img2 = document.querySelector('#b');
  img2.setAttribute ("src", "/src/images/img3.1.jpg");
  
  let img3 = document.querySelector('#c');
  img3.setAttribute ("src", "/src/images/img3.2.jpg");

  let img4 = document.querySelector('#d');
  img4.remove();


  let text = document.querySelector('#content_projects_text_1');
  text.innerHTML = "O projeto da sala de estar combina leveza e contraste de forma equilibrada. <br> Predominam elementos claros, como paredes neutras e móveis de tons suaves, enquanto toques de elementos escuros, como poltonas e painéis em tons escuros, criam profundidade e sofisticação. <br> As grandes janelas garantem abundante luz natural, integrando o ambiente externo. <br> A decoração minimalista e os contrastes entre claro e escuro tornam o espaço moderno e acolhedor.";

  let text_2 = document.querySelector('#content_projects_text_2');
  text_2.textContent = "Rio de Janeiro - 2024";
  

  
 


}

// Quarto projeto do portifólio

if(caminho === "?projeto=projects_4"){

  let img1 = document.querySelector('#a');
  img1.setAttribute ("src", "/src/images/img4.jpg");

  let img2 = document.querySelector('#b');
  img2.setAttribute ("src", "/src/images/img4.1.jpg");
  
  let img3 = document.querySelector('#c');
  img3.setAttribute ("src", "/src/images/img4.2.jpg");
 
  let img4 = document.querySelector('#d');
  img4.setAttribute ("src", "/src/images/img4.3.jpg");

  let text = document.querySelector('#content_projects_text_1');
  text.innerHTML = "O projeto da área gourmet combina charme rústico com elementos naturais e modernos.<br> A parede de pedras cria um ambiente acolhedor e robusto, enquanto uma parte da parede é revestida com plantas, trazendo frescor e verde ao espaço.<br> O sofá-balanço, posicionado estrategicamente, oferece conforto e relaxamento, complementando o ambiente com um toque lúdico. <br> Detalhes em madeira e iluminação suave finalizam o design, tornando a área perfeita para momentos de convivência e lazer.";
  
  let text_2 = document.querySelector('#content_projects_text_2');
  text_2.textContent = "Espírito - 2025";
  


}



// Inicialização da biblioteca ScrollReveal e configuração das animações
document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('#content_projects_text h2', {
    origin: 'right',
    duration: 3000,
    distance: '20%'
  });

  ScrollReveal().reveal('#content_projects', {
    origin: 'bottom',
    duration: 2000,
    distance: '100%'
  });

});

















  
