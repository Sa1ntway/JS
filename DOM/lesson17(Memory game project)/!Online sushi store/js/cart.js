const cartWrapper = document.querySelector(".cart-wrapper");
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const cart = event.target.closest(".card");

    const productInfo = {
      id: cart.dataset.id,
      imgSrc: cart.querySelector(".product-img").getAttribute("src"),
      title: cart.querySelector(".item-title").innerText,
      itemsInBox: cart.querySelector("[data-items-in-box]").innerText,
      weight: cart.querySelector(".price_weight").innerText,
      price: cart.querySelector(".price_currency").innerText,
      counter: cart.querySelector("[data-counter]").innerText,
    };
  }
});
