// const Allbtn = document.getElementsByClassName("btn-Add");
// for(const btn of Allbtn){
//     btn.addEventListener('click', function(event){
//     const name = event.target.parentNode.childNodes[1].innerText;
    
//     const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

//     const Catagorrey = event.target.parentNode.childNodes[5].childNodes[1].innerText;

//     const seletedplayersContiner = document.getElementById("seleted-players-continer");

//     event.target.setAttribute("disabled", false);
   

//     // কাডের লিমিট নিধারন
// const CardLimit = getConvatatValu("card");
// if(CardLimit + 1 > 6){
// alert("Limit Corex Hoise");
// return;
// }
// event.target.parentNode.style.backgroundColor = "orange"

// const leftLimit = getConvatatValu("left");
// if(leftLimit - 1 > 6){
// alert("Limit Corex Hoise");
// return;
// }


// // Updete Bugtee 
// const BugteUpdet = getConvatatValu("Bught");
// document.getElementById("Bught").innerText = BugteUpdet - parseInt(price);

// const cardCount = getConvatatValu("card");
// document.getElementById("card").innerText = cardCount +1;

// const cardLeft= getConvatatValu("left");
// document.getElementById("left").innerText = cardLeft -1;

// // জাভা দিয়ে ডিভ তৈরি করা 
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
      
//     })
// } 




// function updetGrentTotal(statas){
//     const TotallCost = getConvatatValu("Total-cost");
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
//  const TotallCost = getConvatatValu("Total-cost");
//  const convcatiPrice = parseInt(price);
//  const sum = TotallCost + convcatiPrice;
//  document.getElementById("Total-cost").innerText = sum;
  
// }











// function getConvatatValu(id){
//     const price = document.getElementById(id).innerText;
//     const convatprice = parseInt(price); 
//     return convatprice;
    
// }

   

