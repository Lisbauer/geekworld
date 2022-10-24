
// Carrito 

let openPanelButton = document.getElementById("open-panel");
let closePanelButton = document.getElementById("close-panel");
let cartPanel = document.querySelector(".cart-panel");


function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}


openPanelButton.onclick = () => {
    cartPanel.classList.add("open");
    openPanelButton.classList.add("hide")
}

closePanelButton.onclick = () => {
    cartPanel.classList.remove("open");
    openPanelButton.classList.remove("hide");
}

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

const products = document.querySelector(
    '.products'
  );


function agregarOnClick(event) {
  
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Agregado al carrito',
    showConfirmButton: false,
    timer: 1500
  })
  
  const button = event.target
  const figura = button.closest('.figura')

  const itemPrice = figura.querySelector('.figura-price').textContent;
  const itemImage = figura.querySelector('.figura-imagen').src;

  addItemToShoppingCart(itemPrice, itemImage);
  cartPanel.classList.add("open");
  openPanelButton.classList.add("hide")
}


function addItemToShoppingCart(itemPrice, itemImage) {
    const elementsTitle = products.getElementsByClassName(
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
<div class="product" id="product">
    <img width="80" src=${itemImage} alt="iphone">
  <div>
      <span>
      Figura
      </span>
      <p class="shoppingCartItemPrice">
      ${itemPrice}
    </p>
    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
  </div>
    <button class="btn btn-danger buttonDelete" type="button">X</button>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
  products.append(shoppingCartRow);

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
  const shoppingCartItems = document.querySelectorAll('.product');

  shoppingCartItems.forEach((product) => {
    const shoppingCartItemPriceElement = product.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = product.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value
    );

    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;

  });
  shoppingCartTotal.innerHTML = `$${total}`;

}


function removeShoppingCartItem(event) {
  Swal.fire({
    title: '¿Quieres eliminar esta figura del carrito?',
    text: "Tendras que agregarla nuevamente en caso de aceptar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No, gracias',
    confirmButtonText: 'Si, eliminar figura!'
  }).then((result) => {
    if (result.isConfirmed) {
      const buttonClicked = event.target;
      buttonClicked.closest('.product').remove();
      updateShoppingCartTotal();
      Swal.fire(
        'Figura Eliminada!',
        'La figura fue removida del carrito.',
        'success'
      )
    }
  })
}

function comprarButtonClicked() {

 let emptyCart = document.getElementById('product')
 let emptytotal = document.getElementById('cartshopping')

 document.getElementById('products').innerText === "" 
 ?
 Swal.fire('Tu carrito esta vacio, selecciona un producto') :
 Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Gracias por su compra',
  showConfirmButton: false,
  timer: 1500
})
  cartPanel.classList.remove("open");
  openPanelButton.classList.remove("hide");
  emptyCart.remove();
  emptytotal.innerText = "$0"

}


