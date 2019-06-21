/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();

}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  // Removes an element from the document
  var tBodyTag = document.getElementsByTagName('tbody')[0];
  var replacementTBody = document.createElement('tbody');
  tBodyTag.parentNode.replaceChild(replacementTBody, tBodyTag);

}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

  // DONE: Find the table body
  var tBodyTag = document.getElementsByTagName('tbody')[0];

  // Grab JSON data.
  var jsonResult = localStorage.getItem('cartValue');
  var cleanData = JSON.parse(jsonResult);


  for (var i = 0; i < cleanData.length; i++) {
    var tableRow = document.createElement('tr');
    var tableDataDelete = document.createElement('td');
    var tableDataQuantity = document.createElement('td');
    var tableDataProduct = document.createElement('td');

    // Creating an ID for later delete.

    var deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.id = i;
    deleteLink.textContent = ' X ';

    // Append delete
    tableDataDelete.appendChild(deleteLink);
    tableRow.appendChild(tableDataDelete);

    // Append quantity
    tableDataQuantity.textContent = cleanData[i].quantity;
    tableRow.appendChild(tableDataQuantity);

    // Append product
    tableDataProduct.textContent = cleanData[i].product;
    tableRow.appendChild(tableDataProduct);


    tBodyTag.appendChild(tableRow);
  }




}

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  var deleteItem = cart.removeItem(event.target.id);
  console.log(event.target.id);
  console.log('this happens');
  console.log(deleteItem);

  // DONE: Save the cart back to local storage
  localStorage.setItem('cartValue', JSON.stringify(deleteItem));

  // DONE: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
