const allTotalValue = document.getElementById("total-price");
const arifulitemTotalPriceButton = document.getElementById("ariful-item-purchase");
const sell200Btn = document.getElementById("cupon");
const sellCuponInput = document.getElementById("cupon-input");
let arifulitemTitle = document.getElementById("user-item-select-title");
let i = 0;

// -----------totalPrice set funtion ----------------
function valueSet(price) {
  let totalPriceTagConvet = textToNumber("total-price");
  let sum = totalPriceTagConvet + price;
  let sumFised = sum.toFixed(2);
  let sumFisedConvert = parseFloat(sumFised);
  allTotalValue.innerText = sumFisedConvert;
  allPriceBtn(sumFisedConvert);
  totalCuponPriceValue(sumFisedConvert);
  // cuponApplyBtn(sumFisedConvert);
  i = sumFisedConvert;
}
// ------------------purchase funtion --------------------------
function allPriceBtn(value) {
  if (value > 0) {
    arifulitemTotalPriceButton.removeAttribute("disabled");
    // alert("Total price");
  } else {
    console.log("disabled");
    arifulitemTotalPriceButton.setAttribute("disabled", true);
  }
}
// ---------------cupon active btn function  -------------------
function totalCuponPriceValue(value) {
  if (value >= 200) {
    sell200Btn.classList.add("active");
    sell200Btn.removeAttribute("disabled", true);
  } else {
    sell200Btn.setAttribute("disabled", true);
  }
}
//-------------- cupon apply button -----------------
document.getElementById("cupon").addEventListener("click", function () {
  const discount = document.getElementById("discount");
  const total = document.getElementById("total");
  if (sellCuponInput.value === "SELL200") {
    let calculationDiscount = (i / 100) * 20;
    discount.innerText = calculationDiscount.toFixed(2);
    let calculationTotla = i - calculationDiscount;
    total.innerText = calculationTotla.toFixed(2);
    alert("Your cupon successfull");
  } else {
    alert("Your cupon Wrong \nwrite cupon here\nSELL200");
    console.log(i);
  }
});

// ----------------------text convert number funtion -------------------
function textToNumber(id) {
  let priceId = document.getElementById(id);
  let priceValue = priceId.innerText;
  let priceConvertNumber = parseFloat(priceValue);
  let priceValueFixed = priceConvertNumber.toFixed(2);
  let newPriceConvert = parseFloat(priceValueFixed);
  return newPriceConvert;
}
function titleAddText(id) {
  let chaildCounter = arifulitemTitle.childElementCount;
  let titleId = document.getElementById(id);
  let titleIdValue = titleId.innerText;
  let h2 = document.createElement("h2");
  h2.classList.add("font-medium", "mb-2");
  h2.innerText = `${chaildCounter + 1}. ${titleIdValue}`;
  arifulitemTitle.appendChild(h2);
}
//------------- ariful-item 1 -------------

document.getElementById("ariful-item-1").addEventListener("click", function () {
  const productConvert = textToNumber("ariful-item-price-1");
  titleAddText("ariful-item-title-1");
  valueSet(productConvert);
  console.log(productConvert);
});

// ------------- ariful-item 2 ---------------
document.getElementById("ariful-item-2").addEventListener("click", function () {
  const productConvert = textToNumber("ariful-item-price-2");
  titleAddText("ariful-item-title-2");
  valueSet(productConvert);
});

// ----------- ariful-item 3 ---------------
document.getElementById("ariful-item-3").addEventListener("click", function () {
  const productConvert = textToNumber("ariful-item-price-3");
  titleAddText("ariful-item-title-3");
  valueSet(productConvert);
});
// ----------- ariful-item 4 --------------
document.getElementById("ariful-item-4").addEventListener("click", function () {
  const productConvert = textToNumber("ariful-item-price-4");
  titleAddText("ariful-item-title-4");
  valueSet(productConvert);
});
// ---------- ariful-item 5 ------------
document.getElementById("ariful-item-5").addEventListener("click", function () {
  const productConvert = textToNumber("ariful-item-price-5");
  titleAddText("ariful-item-title-5");
  valueSet(productConvert);
});
// ----------- ariful-item 6 ------------
document.getElementById("ariful-item-6").addEventListener("click", function () {
  const productConvert = textToNumber("ariful-item-price-6");
  titleAddText("ariful-item-title-6");
  valueSet(productConvert);
});

// ----------all price button add--------------
sell200Btn.addEventListener('click', function(){
  if(i >= 200 && sellCuponInput.value === 'SELL200'){
    let discountIdPrice = document.getElementById('discount-ariful');
    let totalValue = document.getElementById('total-ariful');
    let valueSum = i / 100 * 20;
    let value = i - valueSum;
    discountIdPrice.innerText = valueSum.toFixed(2);
    totalValue.innerText = value.toFixed(2);
  }   
})
document.getElementById('go-home').addEventListener('click', function(){
  location.href = 'index.html';
})

