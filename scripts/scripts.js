function calculateTotalPrice() {
    const vegPrice = parseFloat(document.getElementById('vegPrice').value) || 0;
    const vegQtyKg = parseFloat(document.getElementById('vegQtyKg').value) || 0;
    const vegQtyG = parseFloat(document.getElementById('vegQtyG').value) || 0;

    const totalQtyKg = vegQtyKg + (vegQtyG / 1000);
    const totalPrice = vegPrice * totalQtyKg;

    document.getElementById('totalResult').innerText = `Total Price: ₹${totalPrice.toFixed(2)}`;
}

function calculatePricePerKg() {
    const totalQtyKg = parseFloat(document.getElementById('totalQtyKg').value) || 0;
    const totalQtyG = parseFloat(document.getElementById('totalQtyG').value) || 0;
    const totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;

    const totalQty = totalQtyKg + (totalQtyG / 1000);
    const pricePerKg = totalPrice / totalQty;

    document.getElementById('perKgResult').innerText = `Price per Kg: ₹${pricePerKg.toFixed(2)}`;
}
