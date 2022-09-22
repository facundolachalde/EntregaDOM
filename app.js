class products {
    constructor(id, name, price, img, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = quantity;
    }
}

const cartProducts = [];

const titular = new products ("1", "Ruge titular", 6000, "src/img/ksk.jpg");
const suplente = new products ("2", "Ruge suplente", 6000, "src/img/ksk.jpg");
const alternativa = new products ("3", "Ruge alternativa", 6000, "src/img/ksk.jpg");
const gorra = new products ("4", "Ruge gorra", 1000, "src/img/ksk.jpg");

cartProducts.push(titular,suplente,alternativa,gorra);
// console.log(cartProducts)

const showProducts = (products) => {
    const productContainer = document.getElementById("container");
    console.log(productContainer)
    products.forEach(product => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card" style ="width:18rem;">
                            <img src="${product.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">Price:$ ${product.price} </p>
                                    <p id="quantity" class="card-text"> ${product.quantity}</p>
                                    <button class="btn btn-primary" id="button${product.id}">add to cart</button>
                                </div>
                            </div>`
        productContainer.appendChild(card);

        const button = document.getElementById(`button${product.id}`)
        button.addEventListener('click', ()=>{
            cart(`${product.id}`);
            alert(`Agregaste ${product.name}`)
        })
    })
}
showProducts(cartProducts)