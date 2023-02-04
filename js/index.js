

function renderItem(i){
    item_title = title[i];
    item_price = price[i];
    food.innerHTML +=  `<div class="card">
        <img src="assets/goods/${i+1}.jpg">
        <div class="card-body">
            <span class="food-title">${item_title}</span>
            <span class="food-price">${item_price}</span>
        </div>
        </div>`
};
function render(){
    food.innerHTML = ``;
    for(let i = 0; i<title.length;i++){
        renderItem(i);
    };
};
function searchAll(){
    food.innerHTML = ``;
    valueItem = select.value;
    for(let i = 0; i < title.length;i++ ){
        checkItem = check[i];
        if(valueItem == 'all' ||
        valueItem == 'ki' & checkItem == `ki`||
        valueItem == 'gost' & checkItem == `gost`){
            renderItem(i);
        };
    };
    
};
function searchTitle(){
    valueItem = select.value;
    food.innerHTML =``;
    val = input.value;
    val = val.toLowerCase();
    for(let i = 0; i < title.length;i++ ){
      let checkItem = check[i];
      let titleItem = title[i].toLowerCase();
      if(titleItem.includes(val)){
        if(valueItem == 'all' ||
        valueItem == 'ki' & checkItem == `ki`||
        valueItem == 'gost' & checkItem == `gost`){
            renderItem(i);
        };
       
      };
    };
};
function renderBuy(){
    sidebarL.innerHTML = ``;
    for(let i = 0; i<buy.length;i++){
        item = buy[i];
        sidebarL.innerHTML += `<li>${item}</li>`;
    };
    
};
function renderPrice(){
    sidebarP.innerHTML = ``;
    price_1 = 0;
    for(let i = 0; i<pri.length;i++){
        item = pri[i];
        price_1 += Number(item);
    };
    sidebarP.innerHTML += `<li>Итого: ${price_1} рублей</li>`;
    
};


let input = document.querySelector(`.search-input`);
let food = document.querySelector(`.food-container`);
let foodAll = document.querySelectorAll(`.card`);
let sidebarL = document.querySelector(`.sidebar-list`);
let sidebarP = document.querySelector(`.sidebar-total`);
let select = document.querySelector(`.form-select`);
let button = document.querySelector(`.cart-button`);
let sidebar = document.querySelector(`.sidebar`);

let title = [`Кактус`, `Настенные часы`,`Телевизор`, `Блендер`, `Шторы`, `Комплект посуды`];
let price = [`200`, `1500`, `25000`, `1200`, `3000`, `5000`];
let check = [
    `gost`,
    `gost`,
    `gost`,
    `ki`,
    `gost`,
    `ki`
  ];

let buy = [];
let pri = [];

render();
select.addEventListener(`input`, searchAll);
input.addEventListener(`input`, searchTitle );
food.addEventListener(`click`, function(e){
    item = e.target;
    item_1 = item.closest(`.card`);
    item = item_1.querySelector(`.food-title`);
    itemp = item_1.querySelector(`.food-price`);
    item_1.classList.toggle(`card-active`);
    if(item_1.classList.contains(`card-active`)){
        buy.push(item.innerHTML);
        pri.push(itemp.innerHTML);
    }else{
        ind = buy.indexOf(item.innerHTML);
        buy.splice(ind,1);
        indp = pri.indexOf(itemp.innerHTML);
        pri.splice(indp,1);
    }
    renderBuy();
    renderPrice();
} )
button.addEventListener(`click`, function(e){
    sidebar.classList.toggle(`hidden_1`);
});
