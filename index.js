let serial = 0;

document.getElementById("first-card").addEventListener("click", function () {
  serial += 1;
  const pd = getData("first-name", "first-price", "first-quantity");

  const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);

  displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);

  disabledButton("first-card");
});

document.getElementById("second-card").addEventListener("click", function (e) {
  serial += 1;
  const pd = getAllData(e);

  const sumTotal = parseInt(pd.pPrice) + parseInt(pd.pQuantity);

  displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);

  disabledButton("second-card");
});

document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
  const pd = getData("third-title", "third-price", "third-quantity");

  const priceTotal = parseInt(pd.productPrice) - parseInt(pd.productQuantity);

  displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);

  disabledButton("third-card");
});

document.getElementById("second-last").addEventListener("click", function (e) {
  serial += 1;
  const pd = getAllData(e);

  const sumTotal = parseInt(pd.pPrice) ** parseInt(pd.pQuantity);

  displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);

  disabledButton("second-card");
});

document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("last-title").innerText;
  const productPrice = document.getElementById("first-input").value;
  const productQuantity = document.getElementById("second-input").value;
  if (
    productPrice == "" ||
    productQuantity == "" ||
    productPrice <= 0 ||
    productQuantity <= 0
  ) {
    return alert("please enter any valid number");
  }
  const total = parseInt(productPrice) / parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, total);

  disabledButton("last-card");
});

function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    <td>
    <button class="btn btn-sm btn-red-500">Square</button>
    </td>
    
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

function getAllData(e) {
  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;

  const pd = {
    pName: pName,
    pPrice: pPrice,
    pQuantity: pQuantity,
  };

  return pd;
}

function getData(id1, id2, id3) {
  const productName = document.getElementById(id1).innerText;
  const productPrice = document.getElementById(id2).innerText;
  const productQuantity = document.getElementById(id3).innerText;

  const pd = {
    productName: productName,
    productPrice: productPrice,
    productQuantity: productQuantity,
  };
  return pd;
}
