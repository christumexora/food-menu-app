const menu = [
  {
    id: 0,
    name: "buttermilk pancakes",
    imgSrc: "/images/item-1.jpeg",
    category: "breakfast",
    price: "$15.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 1,
    name: "country delight",
    imgSrc: "/images/item-2.jpeg",
    category: "breakfast",
    price: "$20.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 2,
    name: "bacon overflow",
    imgSrc: "/images/item-3.jpeg",
    category: "breakfast",
    price: "$8.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 3,
    name: "dinner double",
    imgSrc: "/images/item-4.jpeg",
    category: "lunch",
    price: "$90.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 4,
    name: "egg attack",
    imgSrc: "/images/item-5.jpeg",
    category: "lunch",
    price: "$58.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 5,
    name: "america classic",
    imgSrc: "/images/item-6.jpeg",
    category: "lunch",
    price: "$68.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 6,
    name: "godzilla milkshake",
    imgSrc: "/images/item-7.jpeg",
    category: "shakes",
    price: "$58.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 7,
    name: "orea dream",
    imgSrc: "/images/item-8.jpeg",
    category: "shakes",
    price: "$88.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 8,
    name: "quarantine buddy",
    imgSrc: "/images/item-9.jpeg",
    category: "shakes",
    price: "$48.99",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
  {
    id: 9,
    name: "steak dinner",
    imgSrc: "/images/item-10.jpeg",
    category: "dinner",
    price: "$67.89",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisinam ratione quod,",
  },
];

let main = document.querySelector(".main__container");
let button = document.querySelectorAll(".button");

button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // main.innerHTML = "";
    const category = e.currentTarget.dataset.id;

    let filtered = menu.filter((items) => {
      if (items.category === category) {
        return items;
      }
    });
    if (category === "all") {
      window.location.reload();
    } else {
      displayMenu(filtered);
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
});
// display the the ui
let displayMenu = (menuItems) => {
  let display = menuItems.map((items) => {
    //  destructuring the menu data to give us the name imgSrc price overview
    const { name, imgSrc, price, overview } = items;
    // console.log(items);
    return `
    <div class="row1">
          <div class="dish1">
            <div class="col image">
              <img src="${imgSrc}" alt="${name}" class="image1" />
            </div>
            <div class="col text">
              <div class="text-head">
                <h6 class="name">${name}</h6>
                <h6>${price}</h6>
              </div>
              <div class="underline"><hr /></div>
              <p>
               ${overview}
              </p>
            </div>
          </div>
        </div>
    `;
  });
  display = display.join("");

  main.innerHTML = display;
};

displayMenu(menu);
