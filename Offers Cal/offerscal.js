function calculateDiscount() {
    const totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;
    const discount = parseFloat(document.getElementById('discount').value) || 0;

    const discountAmount = (totalPrice * discount) / 100;
    const actualPrice = totalPrice - discountAmount;

    document.getElementById('discountResult').innerHTML = `<span id="resultbox">Actual Price after Discount: ₹${actualPrice.toFixed(2)}</span>`;
}
