

// products = []
// quantity, price

// handleChange = () => {
//   document.getElementById('price').innerHTML = price;
// }



// products = loop(products)

count = 1;

var sum = 0;
var net = 0;
var total = 0;

window.onload = () => {
  fetch('https://yellowriddle.netlify.app/products.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
     
      const {products} = data;
      
      let content = '';
      products.forEach((prod) => {
      
        if(prod.delivery.freeDelivery == true){
            content += `
        <div class="inner_box" >
          <div class="imageBox">
              <img class="productImg" src="${prod.img}" />
              <div class="buttonsContainer">
                  <button class="productAddButton" type="button" onclick="obj.testVar--, delProduct(${prod.finalPrice});">-</button>
                  <p class="productAddBox" id="prodCount"></p>
                  <button class="productAddButton" type="button" onclick="obj.testVar++ , addProduct(${prod.finalPrice});">+</button>
              </div>
          </div>
          <div class="productBox">
              <p class="productName">${prod.name}</p>
              <p class="sellerName">${prod.seller}</p>
              <div class="priceContainer">
              <p class="price" id="finalPrice">₹ ${prod.finalPrice }   |  </p>
              <p class="originalPrice"> ₹ ${prod.originalPrice}</p> 
              <p class="percentageOff"> ${prod.discountPercentage} % Off</p>
              <p class="offersAvailable">${prod.offers.count} offers available</p>
              </div>
              <button class="removeButton" type="button">REMOVE</button>
          </div>
          <p class="delivery">Delivery by ${prod.delivery.estimatedDate} | Free  <br><br> ${prod.delivery.replacementPolicyDuration} replacement policy</p>
      </div>
        `

        }
        // else{
        //     content += `
        //     <div class="inner_box" >
        //       <div class="imageBox">
        //           <img class="productImg" src="${prod.img}" />
        //           <div class="buttonsContainer">
        //               <button class="productAddButton" type="button">-</button>
        //               <p class="productAddBox">1</p>
        //               <button class="productAddButton" type="button">+</button>
        //           </div>
        //       </div>
        //       <div class="productBox">
        //           <p class="productName">${prod.name}</p>
        //           <p class="sellerName">${prod.seller}</p>
        //           <p class="price">₹ ${prod.finalPrice}</p>
        //           <button class="removeButton" type="button">REMOVE</button>
        //       </div>
        //       <p class="delivery">Delivery by ${prod.delivery.estimatedDate} | ${prod.delivery.originalDeliveryCharge}  <br><br> ${prod.delivery.replacementPolicyDuration} replacement policy</p>
        //   </div>
        //     `
        // }
         total= getTotal(prod.finalPrice);
         document.getElementById('totalPrice').innerHTML = total;
         document.getElementById('fullPrice').innerHTML = total;
      })
      document.getElementById('products').innerHTML = content;
      document.getElementById('prodCount').innerHTML = 1;
    });
    
}


var obj = {
    count: 1,
    letMeKnow() {
        document.getElementById('prodCount').innerHTML = Math.max(this.testVar , 0);
    },
    get testVar() {
      return this.count;
    },
    set testVar(count) {
      this.count = parseInt(count);
      this.letMeKnow();
      console.log(obj.testVar)
    }
  }


function getTotal(price){
    total += parseInt(price);
    console.log(total);
    return total;
}

function getNumberOfItems(){
    var items = 0;
    items = document.getElementById('prodCount').innerHTML;
    console.log("the number of items are" + items);
    document.getElementById('noOfItems') .innerHTML = "Price(" + items + " item/s)" ;
    document.getElementById('cartItems') .innerHTML = "Price(" + items + " item/s)" ;
}

function addProduct(productPrice){
sum += productPrice;
console.log(sum);
console.log(productPrice);
 net = total + sum;
document.getElementById("fullPrice").innerHTML ="₹"+ net;
document.getElementById('totalPrice').innerHTML ="₹" +net;
}

function delProduct(productPrice){
sum -= Math.max(productPrice,0);
console.log(sum);
console.log("deleted" + sum);
net = total + sum;
document.getElementById('totalPrice').innerHTML ="₹" +net ;
document.getElementById("fullPrice").innerHTML = "₹" +net;
}

 