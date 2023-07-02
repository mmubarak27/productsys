const product = [
  {
    id: 1,
    image: "source/Phone1.png",
    title: "Vivo s20",
    price: "RS.15000/-",
  },
];

const categories = product;

let cart = document.getElementById("root");
cart.innerHTML = categories
  .map((item) => {
    var { id, image, title, price } = item;
    return `
            <div class="box">
                <div class="img-box">
                    <img src=${image}></img>
                </div>
                <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button data-id="${id}" class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>`;
  })
  .join("");
