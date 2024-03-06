// const Allbtn = document.getElementsByClassName("btn-Add");
// for(const btn of Allbtn){
//     btn.addEventListener('click', function(event){
//     const name = event.target.parentNode.childNodes[1].innerText;
//      const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    
//    const Catagorrey = event.target.parentNode.childNodes[5].childNodes[1].innerText;
//    const seletedplayersContiner = document.getElementById("seleted-players-continer");
//    event.target.setAttribute("disabled", false);





    
// // card limit 
// const cardLimit = getvalueId("card");
// if(cardLimit + 1 > 4){
//    alert("limit Cores")
//    return;
// }
// event.target.parentNode.style.backgroundColor = "orange"




// const BugteUpdet = getvalueId("Bught");
// document.getElementById("Bught").innerText = BugteUpdet - parseInt(price);

// const cardCount = getvalueId("card");
// document.getElementById("card").innerText = cardCount + 1;


// const CardLeft = getvalueId("left");
// document.getElementById("left").innerText = CardLeft - 1;


// const leftLimit = getvalueId("left");
// if(leftLimit - 1 > 4){
//     alert("are tipa jaba na");
//     return;
// }






//     // জাভা দিয়ে ডিভ তৈরি করা 
//    const div = document.createElement("div");
//     div.classList.add("flex");
//     div.classList.add("gap-6")
   
//     const p1 = document.createElement('p')
//     const p2 = document.createElement('p')
//     const p3 = document.createElement('p')

//     p1.innerText = name;
//     p2.innerText = price;
//     p3.innerText = Catagorrey;

//     div.appendChild(p1)
//     div.appendChild(p2)
//     div.appendChild(p3)

//     seletedplayersContiner.appendChild(div);








//     updetTotalCos(price);

//     updetGrentTotal()     
   
    
// })
// } 

// function updetGrentTotal(statas){
//     const TotallCost = getvalueId("Total-cost");
//     if(statas == undefined){
//     document.getElementById("gren-total").innerText = TotallCost;
//     }
//     else{
//         const couponCode = document.getElementById('Coupon-cod').value;

//         if(couponCode == "love420"){
//             const discountCost = TotallCost * 0.2;
//             document.getElementById("gren-total").innerText = TotallCost - discountCost;
//         }
//         else{
//             alert("Plles Enter Valide Coupon Code");
//           }
//     }
    
// }

// function updetTotalCos(price){

//     const Totalcost = getvalueId("Total-cost");
//     const connvatPrice = parseInt(price)
//     const sum = Totalcost + connvatPrice;
//     document.getElementById('Total-cost').innerText = sum;
  
// }




// function getvalueId(id){
//     const price = document.getElementById(id).innerText;
//     const pricevaiue = parseInt(price);
//     return pricevaiue;
// }
   

