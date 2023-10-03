const items = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const tbodydata = document.getElementById("filtercard");

function renderDataOntoUI(data) {
  data.map((item) => {
    const card = document.createElement("div");
    card.className = "filter_card";
    card.className = "store_item";

    const { name, imageSrc, type, isLiked, time, rating } = item;

    card.innerHTML = `
        <img src="${imageSrc}" />
        <div class="res_cart">
          <p>${type}</p>
          <div class="filter_nav">
            <div ="pname">
                <span style="font-weight: 700;" id="filter_name">${name}</span>
            </div>
            <div>
              <span class="img_cart"><i class="fa-light fa-star" style="color: #00060f;"></i></span>
              <span>${rating}</span>
            </div>
          </div>
          <div class="filter_nav">
            <span>${time}</span>
            <div>
              <button style="border:none">
                <span class="heart">
                <i class="fa-regular fa-heart" style="color: #1962e1;"></i>
                </span>
              </button>
              <span class="heart"><i class="fa-regular fa-comment" style="color: #030812;"></i></span>
            </div>
          </div>
          `;
    tbodydata.appendChild(card);
  });
}

renderDataOntoUI(items);

 let btns = document.querySelectorAll(".button_value");
 let storeproduct = document.querySelector(".filter_card");

 for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", (e) => {
     e.preventDefault();

     const filter = e.target.dataset.filter;
    
    storeproduct.forEach((product) => {
      if (filter == "AllRecipes") {
        product.style.display = "block";
      } else {
         if (product.classList.contains(filter)) {
           product.style.display = "block";
         } else {
           product.style.display = "none";
         }
       }
     });
   });
 }

// // search  

// const search = document.getElementById("in_btn")

// search.addEventListener('keyup',(e) => {
//      e.preventDefault();
//      const searchvalue = search.value.toLowerCase().trim();
//      console.log(searchvalue)

//     for(let i=0;i<tbodydata.length;i++){
           
//          if(storeproduct[i].classList.contains(searchvalue).trim()){
//              storeproduct[i].style.display = "block"
//          }
//          else if(searchvalue === " "){
//             storeproduct[i].style.display = "block"
//          }
//          else{
//             storeproduct[i].style.display = "none"
//          }
//     }
// })

