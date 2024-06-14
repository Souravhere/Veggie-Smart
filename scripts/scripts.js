function calculateTotalPrice() {
    const vegPrice = parseFloat(document.getElementById('vegPrice').value) || 0;
    const vegQtyKg = parseFloat(document.getElementById('vegQtyKg').value) || 0;
    const vegQtyG = parseFloat(document.getElementById('vegQtyG').value) || 0;

    const totalQtyKg = vegQtyKg + (vegQtyG / 1000);
    const totalPrice = vegPrice * totalQtyKg;

    document.getElementById('totalResult').innerHTML = `<span style="display: block; background-color: #00ff00; border-radius: 8px; padding-top: 8px; padding-bottom: 8px; font-weight: bold; font-size: larger; color: black;">Total Price: ₹${totalPrice.toFixed(2)}</span>`;
    //<span style="display: block; background-color: #00ff00; border-radius: 8px; padding-top: 8px; padding-bottom: 8px; font-weight: bold; font-size: larger; color: black;">Total Price: ₹${totalPrice.toFixed(2)}</span>
}

function calculatePricePerKg() {
    const totalQtyKg = parseFloat(document.getElementById('totalQtyKg').value) || 0;
    const totalQtyG = parseFloat(document.getElementById('totalQtyG').value) || 0;
    const totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;

    const totalQty = totalQtyKg + (totalQtyG / 1000);
    const pricePerKg = totalPrice / totalQty;

    document.getElementById('perKgResult').innerHTML = `<span style="display: block; background-color: #00ff00; border-radius: 8px; padding-top: 8px; padding-bottom: 8px; font-weight: bold; font-size: larger; color: black;">Price per Kg: ₹${pricePerKg.toFixed(2)}</span>`;
}

function calculateQuantity() {
    const amountPerKg = parseFloat(document.getElementById('amountPerKg').value) || 0;
    const amountToSpend = parseFloat(document.getElementById('amountToSpend').value) || 0;

    const quantityKg = amountToSpend / amountPerKg;
    const quantityG = (quantityKg * 1000).toFixed(2);

    document.getElementById('quantityResult').innerHTML = `<span style="display: block; background-color: #00ff00; border-radius: 8px; padding-top: 8px; padding-bottom: 8px; font-weight: bold; font-size: larger; color: black;">Quantity: ${quantityKg.toFixed(2)} kg (${quantityG} g)</span>`;
    //<span style="display: block; background-color: #00ff00; border-radius: 8px; padding-top: 8px; padding-bottom: 8px; font-weight: bold; font-size: larger; color: black;">Total Price: ₹${totalPrice.toFixed(2)}</span>
}
