
function toggle(x){
  if(x==0){
  document.getElementById("ecoproductssl_products").style.display="block";
  document.getElementById("ecowarelanka_products").style.display="none";
  document.getElementById("trickeldown_products").style.display="none";
  document.getElementById("backtoearth_products").style.display="none";
  }
  else if(x==1){
    document.getElementById("ecoproductssl_products").style.display="none";
    document.getElementById("ecowarelanka_products").style.display="block";
    document.getElementById("trickeldown_products").style.display="none";
    document.getElementById("backtoearth_products").style.display="none";  
  }
  else if(x==2){
    document.getElementById("ecoproductssl_products").style.display="none";
    document.getElementById("ecowarelanka_products").style.display="none";
    document.getElementById("trickeldown_products").style.display="block";
    document.getElementById("backtoearth_products").style.display="none";  
  }
  else{
    document.getElementById("ecoproductssl_products").style.display="none";
    document.getElementById("ecowarelanka_products").style.display="none";
    document.getElementById("trickeldown_products").style.display="none";
    document.getElementById("backtoearth_products").style.display="block";  
  }

}

//cart window
let popup = document.getElementById("cartWindow");
let btn = document.getElementById("cart");
let span = document.getElementsByClassName("close")[0]; 

btn.onclick = function() {
  popup.style.display = "block";
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
}
span.onclick = function() {
  popup.style.display = "none";
  document.body.style.position = '';
  document.body.style.top = '';
  
}
popup.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
  }
  
}

//favorites window
let popupf = document.getElementById("favoritesWindow");
let btnf = document.getElementById("fav");
let spanf = document.getElementsByClassName("closef")[0]; 

btnf.onclick = function() {
  popupf.style.display = "block";
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
}
spanf.onclick = function() {
  popupf.style.display = "none";
  document.body.style.position = '';
  document.body.style.top = '';
  
}
popupf.onclick = function(event) {
  if (event.target == popupf) {
    popupf.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
  }
  
}


  let removeItem = document.getElementsByClassName('removebutton')
  for (let i = 0; i < removeItem.length; i++) {
      let button = removeItem[i]
      button.addEventListener('click', removeCartItem)
  }

  let quantity = document.getElementsByClassName('productquantity')
  for (let i = 0; i < quantity.length; i++) {
      let input = quantity[i]
      input.addEventListener('change', quantityUpdate)
  }

  let addToCartButtons = document.getElementsByClassName('addtocart')
  for (let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  let addToFavoritesButtons = document.getElementsByClassName('fav_icon')
  for (let i = 0; i < addToFavoritesButtons.length; i++) {
      let fbutton = addToFavoritesButtons[i]
      fbutton.addEventListener('click', addToFavoritesClicked)
  }

  document.getElementsByClassName('placeorder')[0].addEventListener('click', purchase)
  document.getElementsByClassName('placeorderFav')[0].addEventListener('click', purchaseFav)

 function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  } 

 function quantityUpdate(event) { 
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
  }
function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let name = shopItem.getElementsByClassName('product_item')[0].innerText
  let price = shopItem.getElementsByClassName('product_price')[0].innerText
  let image = shopItem.getElementsByClassName('item_image')[0].src
  addItemToCart(name,price,image)
  updateCartTotal()
}

function addToFavoritesClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement
  let name = shopItem.getElementsByClassName('product_item')[0].innerText
  let price = shopItem.getElementsByClassName('product_price')[0].innerText
  let image = shopItem.getElementsByClassName('item_image')[0].src
  
  addItemToFavorites(name,price,image)
  updateCartTotal()
}
//add to favorites
function addItemToFavorites(name, price, image) {
  document.getElementById('favoritestop').style.visibility='visible'
  let favoritesRow = document.createElement('tr')
  favoritesRow.classList.add('favoritesItem')
  let favoritesItems = document.getElementsByClassName('favoritesTable')[0]
    let favoritesItemNames = favoritesItems.getElementsByClassName('namecol')
    for (let i = 0; i < favoritesItemNames.length; i++) {
    if (favoritesItemNames[i].innerText == name) {
    alert('This item is already added to the cart')
    return
    }
    }
  let favoritesRowContents = 
  `<tr>
    <td class="imgcol"><img class="productimg" src="${image}" alt="image">
    <td class="namecol">${name}</td>
    <td class="itemPrice">${price}</td>
    <td><input type="number" id="quantity" name="quantity" class="productquantity" value="1" min="1" max="99"></td>
    <td><button class="removebutton" id="remove" type="button">x</button></td>
  </tr>`
  
  favoritesRow.innerHTML = favoritesRowContents
  favoritesItems.append(favoritesRow)
  favoritesRow.getElementsByClassName('removebutton')[0].addEventListener('click', removeCartItem)
  favoritesRow.getElementsByClassName('productquantity')[0].addEventListener('change', quantityUpdate)
  }



//add to cart
function addItemToCart(name, price, image) {
  document.getElementById('carttop').style.visibility='visible'
  let cartRow = document.createElement('tr')
  cartRow.classList.add('cartItem')
  let cartItems = document.getElementsByClassName('cartTable')[0]
    let cartItemNames = cartItems.getElementsByClassName('namecol')
    for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == name) {
    alert('This item is already added to the cart')
    return
    }
    }
  let cartRowContents = 
  `<tr>
    <td class="imgcol"><img class="productimg" src="${image}" alt="image">
    <td class="namecol">${name}</td>
    <td class="itemPrice">${price}</td>
    <td><input type="number" id="quantity" name="quantity" class="productquantity" value="1" min="1" max="99"></td>
    <td><button class="removebutton" id="remove" type="button">x</button></td>
  </tr>`
  
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('removebutton')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('productquantity')[0].addEventListener('change', quantityUpdate)
  }

  //total calculation
  function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cartTable')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cartItem')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('itemPrice')[0]
    let quantityElement = cartRow.getElementsByClassName('productquantity')[0]
    let price = parseInt(priceElement.innerText.replace('LKR', ''))
    let quantity = quantityElement.value
    total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cartPrice')[0].innerText = 'LKR' + total
    
    }

    //purchase button
    function purchase() {
      let cartProducts = document.getElementsByClassName('cartTable')[0]
      while (cartProducts.hasChildNodes()) {
          cartProducts.removeChild(cartProducts.firstChild)
      }
      updateCartTotal()
      alert(`Thank you for your purchase.`)
    }

    //purchase button
    function purchaseFav() {
      
      alert(`Your favorite items added to order.`)
    }


  
