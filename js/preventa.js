figuras = [
  {
    nombre: 'Dva MEK',
    img: '../imagenes/dvapreventa.png', 
  },
  {
    nombre: 'Gengar',
    img: '../imagenes/gengarpreventa.jpg', 
  },
  {
    nombre: 'Tomioka KNY',
    img: '../imagenes/tomiokapreventa.jpg',

  },
  {
    nombre: 'Zoro One Piece',
    img: '../imagenes/onepiecepreventa.jpg', 
  },
  {
    nombre: 'Jinx LOL',
    img: '../imagenes/jinxpreventa.jpg', 
  },
  {
    nombre: 'Mewtwo',
    img: '../imagenes/mewtwopreventa.jpg',

  },
  {
    nombre: 'Blastoise',
    img: '../imagenes/pokemonpreventa.jpg', 
  },
]

function nuevaFigura(nombre, img){
this.nombre = nombre;
this.img = img;
}

let addFig = new nuevaFigura('Nezuko KNY', '../imagenes/nezukopreventa.jpg')

figuras.push(addFig)

const agregarfiguras = document.getElementsByClassName('proximosIngresos5')[0];
figuras.forEach((figura) => {
  let itemF = document.createElement('div')
  
let addFiguras =
  `
  <div class="col">
  <div class="card">
    <article>
    <img src=${figura.img} class="card-img-top" alt=${figura.nombre}>
    </article>
      <div class="card-body">
        <h5 class="card-title">${figura.nombre}</h5>
        <h6 class="agregarCarrito2" id="agregarCarrito2">Reservar</h6>
      </div>
  </div>
</div>
  ` 
  itemF.innerHTML = addFiguras
  agregarfiguras.append(itemF);
  });