fetch('../data/data.json')
.then(res => res.json())
.then((data) => {
  console.log(data);
  
  function nuevaFigura(nombre, img){
    this.nombre = nombre;
    this.img = img;
    }
    
    let addFig = new nuevaFigura('Nezuko KNY', '../imagenes/nezukopreventa.jpg')
    
    data.push(addFig)
  const agregarfiguras = document.getElementsByClassName('proximosIngresos5')[0];
  data.forEach((figura) => {
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

})

function nuevaFigura(nombre, img){
  this.nombre = nombre;
  this.img = img;
  }
  
  let addFig = new nuevaFigura('Nezuko KNY', '../imagenes/nezukopreventa.jpg')
  
  data.push(addFig)