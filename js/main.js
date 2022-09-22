/*
// Arrays
const figuras = [];


//Variables

let envio = 500;
let carritoFinalizado = false;

// Constructor de objetos
class figura {
  constructor (id,nombre, precio, categoria, stock) { 
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  this.stock = stock;
}
}

//Objetos construidos
let Jinx = new figura (1,"Jinx", 10000, "Videojuegos",3);
let Nezuko = new figura (2,"Nezuko", 11590, "Anime", 8);
let Luffy = new figura (3,"Luffy", 11050, "Anime", 1);
let Daenerys = new figura (4, "Daenerys", 10500, "Series y peliculas",9);
let HarryPotter = new figura (5,"Harry Potter" , 8500, "Series y peliculas",9);
let Ragnar = new figura (6,"Ragnar", 6000, "Series y peliculas",12);
let Tanjiro = new figura (7,"Tanjiro", 8900, "Anime",16);

figuras.push(Jinx, Nezuko, Luffy, Daenerys, HarryPotter, Ragnar, Tanjiro);

//FUNCIONES
   function cuotificar (cuotas) {
      return productoFiltrado.precio / cuotas;
    };  

// Inicio

/*

alert("Bienvenido a Geekworld, registrese para continuar.");

function registrarse(){
  let usuario = prompt("Ingrese su usuario.");
  let password = prompt("Ingrese su contraseña.");
  alert("Hola " + usuario + " gracias por registrarse.");
}
registrarse();

BuscarFigura();

function BuscarFigura () {
    Filtro = prompt("En GeekWorld tenemos muchas figuras, de que forma te gustaria ver nuestro stock?:\n 1-Por Categoria\n 2-Por Nombre\n 3-Por Precio \n 4- Ver todas las figuras \n 5-Salir");
    if (Filtro === "5") {
        alert("Gracias, hasta luego!");
    }
    else if(Filtro ==="1"){
        porCategoria();
    }
    else if(Filtro ==="2"){
        porNombre();
    }
    else if(Filtro ==="3"){
        PorPrecio();
    }
    else if(Filtro ==="4"){
        pedirProducto();
    }
    else{
        alert("Porfavor, utiliza los numeros al lado de las opciones")
        BuscarFigura();
    }

}

function porCategoria (){
    categoriaFigura = prompt("Seleccionaste por Categoria, en cual estas buscando? \n Anime \n Videojuegos \n Series y Peliculas")
    buscarCategoria = figuras.filter((figura) => figura.categoria == categoriaFigura)
    console.log(buscarCategoria)
    if(buscarCategoria === false){
        nombreFigura = prompt("Ingresa el nombre de una categoria valida \n Anime \n Videojuegos \n Series y Peliculas");
    } else {
        filtroNombre = buscarCategoria.map(nombres => {
            return nombres.nombre
        })
        alert(`Las figuras que se encuentran en la categoria ${categoriaFigura} son las de: ${filtroNombre}
        A continuacion, podra seleccionar la figura de tu interes para su compra`)
        
        pedirProducto();
    }

}

function pedirProducto () {
    productoElegido = prompt("Estas son las figuras en stock, cual es de tu interes?:\n 1-Jinx\n 2-Nezuko\n 3-Luffy \n 4-Daenerys \n 5-Harry Potter \n 6-Ragnar \n 7-Tanjiro \n 8-Salir");
    console.log(productoElegido);
    if (productoElegido === "8") {
        alert("Gracias, hasta luego!");
    }
    else {
        productoIngresado()
    }
}

function porNombre () {

    nombreFigura = prompt("Ingresa el nombre de la figura que estas buscando");
    
    buscarNombre = figuras.some((figura) => figura.nombre === nombreFigura)
    console.log(buscarNombre)
    if(buscarNombre === false){
        alert("No esta la figura")
    } else {
        productoFiltrado = figuras.find (item => item.id == productoElegido);
        alert("La Figura si esta en stock! A continuacion vera todo el catalogo, seleccione su figura para realizar la compra")

        pedirProducto();
    }

}

function PorPrecio(){
    precioFigura = prompt("Cuanto puedes gastas?");

    filtroPrecio = figuras.filter(figura => {
        return figura.precio > precioFigura
    })
    console.log(filtroPrecio)
    filtroNombre = filtroPrecio.map(nombres => {
        return nombres.nombre
    })
    alert(`Las figuras que puedes comprar con ese monto son ${filtroNombre}
    A continuacion, podra elegir esas figuras para su compra`)
    
    pedirProducto();
    
}

function productoIngresado () {
    productoFiltrado = figuras.find (item => item.id == productoElegido);
    console.log(productoFiltrado);

    alert(`El La Figura seleccionada es ${productoFiltrado.nombre}
    Pertenece a la categoria ${productoFiltrado.categoria} 
    Su precio es de $${productoFiltrado.precio}
    Actualmente tenemos ${productoFiltrado.stock} en stock`);

    let comprar = prompt(`Desea comprar la figura de ${productoFiltrado.nombre}? \n 1-Si \n 2-No`)
    if (comprar === "1") {
        alert("El valor de la compra es de $" + productoFiltrado.precio);
        carritoFinalizado = true;
        finalizarCompra();
      }
      else if (comprar == "2") {
        alert("Te interesa alguna de las otras figuras?")
        pedirProducto();
      }

}


function finalizarCompra (){
    if (carritoFinalizado) {

        let formaPago = prompt("Seleccione como desea abonar su compra, usando la palabra correspondiente: \n 1-MERCADOPAGO \n 2-TRANSFERENCIA \n 3-CREDITO");
        while (formaPago !== "1" && formaPago !== "2" && formaPago !== "3") {
          formaPago = prompt("Ingrese una forma de pago válida:\n1-MERCADOPAGO\n2-TRANSFERENCIA\n3-CREDITO");
        }
        
        switch (formaPago) {
          case "1":
          alert(`Continue la operacion desde la app abonando un total de: ${productoFiltrado.precio}`);  
          break;  
          case "2":
          alert(`Se debitaran $${productoFiltrado.precio}" de su cuenta bancaria.`);
          break;
          case "3":
          let cuotas = 0;
          let cuotasAprobado = true;
          cuotas = parseInt(prompt("Elija cantidad de cuotas: \n1\n3\n6\n12"));
          while (cuotasAprobado) {
          if (cuotas === 1 || cuotas === 3 || cuotas === 6 || cuotas === 12 ) {
            alert("Su pago será de "+cuotas+" cuotas de $"+cuotificar(cuotas)+"." );
            cuotasAprobado= false;
          }
          else {
            cuotas = parseInt(prompt("Ingrese un número de cuotas válido: 1, 3, 6 o 12 cuotas."));
          }
          let creditCard = prompt("Ingrese número de tarjeta de crédito");
          alert("Su tarjeta "+creditCard+" ha sido aprobada. Muchas gracias por su compra!");
        }
          break;
        }
        let envio = prompt("Indique su direccion para el envio");
        alert("Su envio ha sido programado para mañana en el horario de 9 am a 2 pm a la direccion de " + envio);
        }
}

*/
/*
// clase DOM

alert("Bienvenido a Geekworld, registrese para continuar.");

function registrarse(){
  const usuario = prompt("Ingrese su usuario.");
  const password = prompt("Ingrese su contraseña.");
  alert("Hola " + usuario + " gracias por registrarse.");
}
registrarse();

/*
cambiarDescripcion();

function cambiarDescripcion () {
    Cambiar = prompt("En geekworld estamos renovando, queremos darle un aire fresco a nuestra descripcion de Quienes Somos, que se te ocurre que podria ser una buena descripcion?");
    
    const quienesSomos = document.getElementsByClassName("box__quienes__somos__parrafo")

    for (const descripcion of quienesSomos) {
        descripcion.innerText=Cambiar
    }

}
alert('Excelente Es una idea Fantastica, vamos a tenerla en cuenta, quizas la veas en la proxima actualizacion de la pagina :)');

*/

/*
const carrito = document.getElementsByClassName("figura-agregarCarrito")

    for (var i = 0; i < carrito.length; i++){
        carrito[i].onclick = function(){
            this.innerHTML = "En el carrito"
        }
        }

const agregarfigura = document.querySelectorAll('.figura-agregarCarrito');
agregarfigura.forEach((agregar) => {
  agregar.addEventListener('click', agregarOnClick);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
  );



function agregarOnClick(event) {
  
  const button = event.target
  const figura = button.closest('.figura')

  const itemPrice = figura.querySelector('.figura-price').textContent;
  const itemImage = figura.querySelector('.figura-imagen').src;

  addItemToShoppingCart(itemPrice, itemImage);
}

function addItemToShoppingCart(itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
      'shoppingCartItemTitle'
    );
    for (let i = 0; i < elementsTitle.length; i++) {
      if (elementsTitle[i].innerText === itemTitle) {
        let elementQuantity = elementsTitle[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          '.shoppingCartItemQuantity'
        );
        elementQuantity.value++;
        $('.toast').toast('show');
        updateShoppingCartTotal();
        return;
      }
    }
  
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${itemImage} class="shopping-cart-image">
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}
*/


/*const promptito = prompt('los mas vendidos');
console.log(promptito);

const losmasvendidos = document.getElementById('1');
console.log(losmasvendidos.innerText= promptito);



const figuraprice = document.getElementsByClassName('figura-price');
console.log(figuraprice);

for (const preciofigura of figuraprice) {
  console.log(preciofigura.innerHTML);
}*/


const h2 = document.getElementById("2")
h2.innerText = "Ultimos ingresos";

h2.addEventListener('click', ()=> {
  console.log("click sobre h2");
})