// Cart.js

// Copy the contents of the 'cart' variable to 'cartInfo'
const cartInfo = cart;

const prod_key = (new URL(document.location).searchParams.get("product_type") || "Specials");
// Get products from different groups
const products = all_products[prod_key];

let subtotal = 0;
let tax_rate = 0.04;

// generates rows with prices based on quantities
function generateCartRows() {
    for (let pkey in cartInfo) {
        let products = all_products[pkey];

        for (let i in products) {
            let qty = cartInfo[pkey]["quantity" + i];
            if (qty > 0 && validateQuantity(qty)) {
                subtotal += qty * products[i].price;
                document.write('<tr><td><div class="img-mouseover"><img style="border-radius: 50%;" src="./img/' + products[i].image + '" height="100px" width="100px"><div class="product-description">' +

                products[i].description + '</div></div></td><td>' + 
                products[i].name + '</td><td align="center"><input type="number" name="cart_' + pkey + '_' + i + '" value="' + qty + '" min="0" max="' + 
                products[i].sets_available +'"></td><td>$' + 
                products[i].price + '</td><td>$' + (qty * products[i].price).toFixed(2) + '</td></tr>');
            }  }    }
};

        
function validateQuantity(q, returnErrors = false) {
    // the function returns non-negative integers in the object.
    errors = []; // assume no errors at first
    return returnErrors ? errors : errors.length == 0;
}

generateCartRows();

// Shipping
if (subtotal <= 300) {
        shipping = 12;  } 
else {  shipping = 25;  }

// tax
let tax = tax_rate * subtotal;
// total
let total = subtotal + tax + shipping;

document.write(`
    <tr><td colspan="5"></td></tr>
    <tr><td style="text-align: right;" colspan="3">Subtotal</td><td colspan="2">$${subtotal.toFixed(2)}</td></tr>
    <tr><td style="text-align: right;" colspan="3">4% Tax</span></td><td colspan="2">$${tax.toFixed(2)}</td></tr>
    <tr><td style="text-align: right;" colspan="3">Shipping</span></td><td colspan="2">$${shipping}</td></tr>
    <tr><td style="text-align: right;" colspan="3"><b>Total</b></td><td colspan="2"><b>$${total.toFixed(2)}</b></td></tr>
    `);