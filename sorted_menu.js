document.querySelector('button#sort-asc').onclick = function () {
    sortASC('data-price');
}
document.querySelector('button#sort-desc').onclick = function () {
    sortDESC('data-price');
}
document.querySelector('button#sort-rating').onclick = function () {
    sortDESC('data-rating');
}
const wrap = document.querySelector('.wrap');

fetch('https://react-pizza-server.herokuapp.com/pizza')
  .then(response => response.json())
  .then(json => {
    console.log(json.pizzas)
    for (let i = 0; i < json.pizzas.length; i++) {

        let wrap  = document.querySelector('.wrap');
        let div = document.createElement('div');
        div.setAttribute('class','goods-card');
        div.setAttribute('data-price',json.pizzas[i].price)
        div.setAttribute('data-rating',json.pizzas[i].rating)

        let img = document.createElement('img');
        img.setAttribute('src',json.pizzas[i].imageUrl);

        let name = document.createElement('h1');
        name.setAttribute('class','name');
        name.innerHTML += `${json.pizzas[i].name}`


        let price = document.createElement('p');
        price.setAttribute('class','price');
        price.innerHTML += `₽ ${json.pizzas[i].price}`

        let btn = document.createElement('button');
        btn.setAttribute('class','btn buy')
        btn.innerHTML = 'Купить'


        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(price)
        div.appendChild(btn)
        wrap.appendChild(div);

    }
})

function sortASC(type) {
    for (let i = 0; i < wrap.children.length - 1; i++) {
        for (let j = i; j < wrap.children.length; j++) {
            if (+wrap.children[i].getAttribute(type) > +wrap.children[j].getAttribute(type)) {
                let replacedNode = wrap.replaceChild(wrap.children[j], wrap.children[i]);
                insertAfter(replacedNode, wrap.children[i]);
            }
        }
    }
}

function sortDESC(type) {
    for (let i = 0; i < wrap.children.length - 1; i++) {
        for (let j = i; j < wrap.children.length; j++) {
            if (+wrap.children[i].getAttribute(type) < +wrap.children[j].getAttribute(type)) {
                let replacedNode = wrap.replaceChild(wrap.children[j], wrap.children[i]);
                insertAfter(replacedNode, wrap.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}