const sectionBlock = document.querySelector(".section-block");
const search = document.querySelector(".search");
const overall = document.querySelector(".site-header__overal");
const modalBox = document.querySelector(".modal-box");
const modalBtn = document.querySelector(".modal-btn");
const noModal = document.querySelector(".no-modal");
const korzinka = document.querySelector(".site-header__karzinka");
const totalPrice = document.querySelector(".total-price");
const sectinList = document.querySelector(".site-section__list");
const span = document.querySelector(".site-header__span");
let url = "https://fakestoreapi.com/products/categories";

const arr = [];

const arr2 = [];

fetch(url)
  .then((Response) => Response.json())
  .then((data) => datas(data));

function datas(data) {
  render(data);
}
let sectionList = document.querySelector(".site-section__list");
function render(data) {
  for (let i of data) {
    sectionList.innerHTML += `
    <li class="site-section__link">${i}</li>
    `;
  }
}
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => product(products));

function product(data1) {
  for (let i of data1) {
    sectionBlock.innerHTML += `
          <div class="sellery">
            <div class="section-item">
                <img src="${i.image}" alt="" class="section-img">
            </div>
            <div class="section-box">
                <h3 class="sextion-title">${i.title.slice(0, 25)}</h3>
                <h4 class="section-price">
                <div class="span-size">${(i.price - i.price * 0.24).toFixed(
                  3
                )}$</div>
                <div class="off-price">$${i.price}</div>
                <div class="out-price"> 24 % </div></h4>
                <button onclick='addCart("+(i++)+")' class="section-btn">BUY</button>
            </div>
          </div>
            `;
  }
  arr.push(data1);
}

korzinka.addEventListener("click", (e) => {
  modalBox.classList.add("open");
  noModal.classList.add("close");

  console.log(arr);
  product(arr);
  for (let i of arr) {
    totalPrice.textContent =
      +totalPrice.textContent + +i.price - +i.price * 0.24;
  }
});

modalBtn.addEventListener("click", (e) => {
  modalBox.classList.remove("open");
  noModal.classList.remove("close");
});

let cart = [];

function addCart(a) {
  cart.push({ ...arr[a] });
  displaycart();
}

function displaycart(a) {
  let y = 0;

  if (cart.length == 0) {
    totalPrice.innerHTML = "You cart is empty";
  } else {
    totalPrice.innerHTML = cart
      .map((item) => {
        let { image, title, price } = item;
        return innerHTML = `
        Kamchiligi Bor<br></br>
        `
      })
      .join("");
      cart.push(item)
  }
}
