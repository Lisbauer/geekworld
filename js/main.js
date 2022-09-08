
// Arrays
const figuras = [];


//Variables

let envio = 500;
let carritoFinalizado = false;


class figura {
  constructor (id,nombre, precio, categoria, stock) { 
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  this.stock = stock;
}
}

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
      return FiguraFiltrada.precio / cuotas;
    };  

// Inicio

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
        pedirFigura();
    }
    else{
        alert("Porfavor, utiliza los numeros al lado de las opciones")
        BuscarFigura();
    }

}

function porCategoria (){
    categoriaFigura = prompt("Seleccionaste por Categoria, en cual estas buscando? \nAnime \n Videojuegos \n Series y Peliculas")
    buscarCategoria = figuras.filter((figura) => figura.categoria == categoriaFigura)
    console.log(buscarCategoria)
    if(buscarCategoria === false){
        nombreFigura = prompt("Ingresa el nombre de una categoria valida \nAnime \n Videojuegos \n Series y Peliculas");
    } else {
        filtroNombre = buscarCategoria.map(nombres => {
            return nombres.nombre
        })
        alert(`Las figuras que se encuentran en la categoria ${categoriaFigura} son las de: ${filtroNombre}. A continuacion, podra seleccionar la figura de su interes para su compra`)
        
        pedirFigura();
    }

}

function pedirFigura () {
    figuraSeleccionada = prompt("Estas son las figuras en stock, cual es de tu interes?:\n 1-Jinx\n 2-Nezuko\n 3-Luffy \n 4-Daenerys \n 5-Harry Potter \n 6-Ragnar \n 7-Tanjiro \n 8-Salir");
    console.log(figuraSeleccionada);
    if (figuraSeleccionada === "8") {
        adios = alert("Gracias, hasta luego!");
    }
    else {
        FiguraIngresada()
    }
}

function porNombre () {

    nombreFigura = prompt("Ingresa el nombre de la figura que estas buscando. Recuerda que la primer letra debe ser en Mayusculas");
    
    buscarNombre = figuras.some((figura) => figura.nombre == nombreFigura)
    console.log(buscarNombre)
    if(buscarNombre === false){
        alert("No esta la figura")
        volver = prompt("Desea volver al menu anterior?: \n 1-Si \n2-No");
        if(volver == 1){
            BuscarFigura();
        }
        else if(volver ==2){
            alert("Lamento no tener lo que buscabas :( Vuelve pronto, te dejo con el menu inicial")
            BuscarFigura();
        }
    } else {
        FiguraFiltrada = figuras.find (item => item.id == buscarNombre);
        alert("La Figura si esta en stock! A continuacion vera todo el catalogo, seleccione su figura para realizar la compra")

        pedirFigura();
    }

}

function PorPrecio(){
    precioFigura = prompt("Cuanto puedes gastas?");

    filtroPrecio = figuras.filter(figura => {
        return figura.precio < precioFigura
    })
    console.log(filtroPrecio)
    filtroNombre = filtroPrecio.map(nombres => {
        return nombres.nombre
    })
    if(filtroPrecio >= precioFigura){
    alert(`Las figuras que puedes comprar con ese monto son ${filtroNombre}
    A continuacion, podra elegir esas figuras para su compra`)
    pedirFigura();
}
else if(filtroPrecio < precioFigura){
    alert(`Lo siento, no poseemos ninguna figura cercana a tu presupuesto`)
    BuscarFigura();
}
    
}

function FiguraIngresada () {
    FiguraFiltrada = figuras.find (item => item.id == figuraSeleccionada);
    console.log(FiguraFiltrada);

    alert(`El La Figura seleccionada es ${FiguraFiltrada.nombre}
    Pertenece a la categoria ${FiguraFiltrada.categoria} 
    Su precio es de $${FiguraFiltrada.precio}
    Actualmente tenemos ${FiguraFiltrada.stock} en stock`);

    let comprar = prompt(`Desea comprar la figura de ${FiguraFiltrada.nombre}? \n 1-Si \n 2-No`)
    if (comprar === "1") {
        alert("El valor de la compra es de $" + FiguraFiltrada.precio);
        carritoFinalizado = true;
        finalizarCompra();
      }
      else if (comprar == "2") {
        alert("Te interesa alguna de las otras figuras?")
        pedirFigura();
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
          alert(`Continue la operacion desde la app abonando un total de: ${FiguraFiltrada.precio}`);  
          break;  
          case "2":
          alert(`Se debitaran $${FiguraFiltrada.precio}" de su cuenta bancaria.`);
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