// Abrir modal Bizum
function showBizum() {
  document.getElementById('bizum-modal').style.display = 'block';
}

// Abrir modal PayPal
function showPaypal() {
  document.getElementById('paypal-modal').style.display = 'block';
}

// Cerrar modal al hacer clic fuera o en la X
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  ['bizum-modal','paypal-modal'].forEach(function(id) {
    let modal = document.getElementById(id);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
