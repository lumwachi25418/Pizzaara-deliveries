const cartCounter = document.querySelector("#counter");
const buttons = document.querySelectorAll(".cart");
const cartTotal=document.querySelector(".cart_total")
let cartItems = [];
let cartIcon = document.querySelector("#cart-icon");

let cartSection = document.querySelector("#cart-section");
let cartSectionContainer = document.querySelector(".cartSection-container");
cartIcon.addEventListener(`click`, function () {
  cartSection.classList.toggle("show-cart");
  
});

function updateCartItems() {
  cartSection.innerHTML=""
  cartItems.map((pizzaitems) => {
    const cartproducts = document.createElement("div");
    cartproducts.innerHTML = ` 
        <img src="${pizzaitems.image}" width="50">
        <h3>${pizzaitems.name}</h3>
        
      <h2 class="single-price">${pizzaitems.price}</h2>
      <div>
        <button class=decrement>-</button>
        <p class="quantity">1</p>
        <button class=increment>+</button>
        </div>
        <p class="price">${pizzaitems.price}</p>

        `;

    cartproducts.classList.add("cartp");
    // console.log(pizzaitems);

    cartSection.append(cartproducts);
  });
  updatePrices();
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const pizzaname = e.target.parentElement.children[1].textContent;
    const pizzaprice = e.target.parentElement.children[3].textContent.replace("KSH",""
    );

    const pizzaimage = e.target.parentElement.children[0].src;
    if (e.target.textContent.toLowerCase() === "add to cart") {
      let pizzaitems = {
        name: pizzaname,
        price: pizzaprice,
        image: pizzaimage,
      };

      console.log(pizzaitems);

      cartItems.push(pizzaitems);

      console.log(cartItems);

      cartCounter.textContent = cartItems.length;
      e.target.textContent = "Remove from cart";
      e.target.style.background = "orange";

      updateCartItems();
    } else {
      const indexToRemove = cartItems.findIndex(
        (item) => item.name === pizzaname
      );
      // console.log(cartItems)
      cartItems.splice(indexToRemove, 1);
      cartCounter.textContent = cartItems.length;
      updateCartItems();

      e.target.style.background = "black";
      e.target.textContent = "Add to cart";
    }
  });
});

cartSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("increment")) {
    const currentQuantity = e.target.previousElementSibling;
    currentQuantity.textContent++;
    console.log("adding items");
  } else if (e.target.classList.contains("decrement")) {
    console.log("remove items");
    const currentQuantity = e.target.nextElementSibling;
    if (currentQuantity.textContent > 1) {
      currentQuantity.textContent--;
    }
  }

  updatePrices();
});
function updatePrices() {
  let cartTotals = 0;
  let cartitemProducts = document.querySelectorAll(".cartp");
 
  console.log(cartitemProducts)
  for(let i = 0; i < cartitemProducts.length; i++) {
    const product=cartitemProducts[i]
    console.log(product)
    const itemName = cartitemProducts[i].querySelector("h3").textContent;
    console.log(itemName)
    let itemfound = cartItems.find((element) => element.name === itemName);
    if (itemfound) {
      const quantity = parseInt(product.querySelector(".quantity").textContent);
      // console.log(quantity);
      const price = parseInt(product.querySelector(".single-price").textContent);
      console.log(price);
      let total = price * quantity;
      console.log(total);
      product.querySelector(".price").textContent = total
      cartTotals += total
      console.log(cartTotals)
    }
    cartTotal.textContent = `Total price: KSH ${cartTotals}`;
    console.log(cartTotals)
  }

}
