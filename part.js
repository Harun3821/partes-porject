const adProdctes = () =>{
    const prodectFilled = document.getElementById('prodctes-name');
    const prodctesQuantity = document.getElementById('prodctes-quantity');
    const prodctes = prodectFilled.value;
    const quantity = prodctesQuantity.value;
    prodectFilled.value = '';
    prodctesQuantity.value = '';
    displyProdect(prodctes, quantity);
    saveprodecttoLocalstorage(prodctes, quantity)
   
}



const displyProdect = (prodctes, quantity) =>{
    const listProdect = document.getElementById('prodect-continer');
    const li = document.createElement('li')
    li.innerText = `${prodctes} ${quantity}`
    listProdect.appendChild(li);
}

const getstrodeCard = () =>{
    let card = {}
    const strotCard = localStorage.getItem('card');
    if(strotCard){
       card = JSON.parse(strotCard)
    }
    return card;
}

const saveprodecttoLocalstorage = (prodctes, quantity) =>{
    const card = getstrodeCard();
    card [prodctes] = quantity;
    const cardSteringfy = JSON.stringify(card);
    console.log(cardSteringfy)
    localStorage.setItem('card', cardSteringfy);
 
}

const displyFormlocalStroge = () =>{
    const saveCard = getstrodeCard()
    console.log(saveCard);
    for(const prodctes in saveCard){
        const quantity = saveCard[prodctes];
        console.log(prodctes, quantity);
        displyProdect(prodctes, quantity)
    }
}

displyFormlocalStroge();