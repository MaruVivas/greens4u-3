const products = [
    {
      name: "Macetero feliz rosa",
      description: "De porcelana pintado a mano con acuarela",
      src:"https://maruvivas.github.io/greens4u-2/assets/img/macetero1.jpg",
      size: 5,
      price: 10
    },
    {
      name: "Macetero cer\u00E1mica",
      description: "Tama\u00F1o mediano y dise\u00F1o vanguardista",
      src: "https://maruvivas.github.io/greens4u-2/assets/img/macetero2.jpg",
      size: 10,
      price: 20
    },
    {
      name: "Macetero con base",
      description: "Macetero con pedestal de material duradero",
      src: "https://maruvivas.github.io/greens4u-2/assets/img/macetero3.jpg",
      size: 15,
      price: 10
    },
    {
      name: "Macetero madera clara",
      description: "Tama\u00F1o peque\u00F1o y material innovador",
      src: "https://maruvivas.github.io/greens4u-2/assets/img/macetero4.jpg",
      size: 5,
      price: 10
    },
    {
      name: "Macetero pintado wayuu",
      description: "Tama\u00F1o mediano con dise\u00F1o rupestre",
      src: "https://maruvivas.github.io/greens4u-2/assets/img/macetero5.jpg",
      size: 5,
      price: 20
    },
    {
      name: "Macetero cemento pulido",
      description: "Dise\u00F1o industrial y mayor durabilidad",
      src: "https://maruvivas.github.io/greens4u-2/assets/img/macetero6.jpg",
      size: 15,
      price: 30
    }
  ];

 

  const cargarProducts = (data) => {
    let galeria ="";
    for (const product of data) {
    const templateOfProducts = `
      <div class="card">
        <img src="${product.src}">
          <div class="product-info">
          <p>${product.name}</p>
          <p>${product.description}</p>
          <p>${product.size} cm</p>
          <p>$ ${product.price}</p>
          
          </div>
      <a href="#">Agregar al carro</a>
      </div>
      `;
      galeria += templateOfProducts;
    }
    const productsCard = document.getElementById("product");
    productsCard.innerHTML = galeria;
  };

  const mostrarTotal = (total) => {
    const spanTotal = document.getElementById("total");
    spanTotal.innerHTML = total;
  };

  const filtrar = () => {
    const size = document.getElementById("size").value;
    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;
    
    if (!size || !minPrice || !maxPrice) {
      alert("Todos los campos son requeridos");
      return;
    }
  

  const seleccion = [];
  for (let product of products) {
    if (
    product.size == Number(size) &&
    product.price >= Number(minPrice) &&
    product.price <= Number(maxPrice) 
    ) {
      seleccion.push(product);
    }
  }
  
  return seleccion;
  };
      

  const init = () => {
    cargarProducts(products);
    mostrarTotal(products.length);


  const btnFiltra = document.getElementById("btn");
  btnFiltra.addEventListener("click", () => {
    const seleccion = filtrar();

    if(seleccion) {
      cargarProducts(seleccion);
      mostrarTotal(seleccion.length);
    }
  });
};

  init();

  

