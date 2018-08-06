const axios = require('axios');

const ADD_TO_BASKET_FORM_CLASS = 'add-to-basket-form';

class Products {
  constructor() {
    this.itemTotal = document.getElementById('baketTotal');
    this.notification = document.createElement('div');
    document.body.appendChild(this.notification);
    this.initAddToBaskets();
  }

  resetNotification() {
    while (this.notification.classList.length > 0) {
      this.notification.classList.remove(this.notification.classList.item(0));
    }
    this.notification.innerHTML = '';
  }

  notifySuccess() {
    this.notification.classList.add('notification');
    this.notification.classList.add('notification--success');
    this.notification.classList.add('notification--popup');
    this.notification.innerHTML = 'Producto añadido al pedido';
  }

  notifyError() {
    this.notification.classList = 'notification notification--error notification--popup';
    this.notification.innerHTML = 'Ha ocurrido un error';
  }

  initAddToBaskets() {
    const addToBasketForms = Array.from(
      document.getElementsByClassName(ADD_TO_BASKET_FORM_CLASS)
    );

    addToBasketForms.forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        this.resetNotification();

        const form = event.target;
        const action = form.getAttribute('action');
        axios.post(action, {
          quantity: form.querySelector('input[name="quantity"]').value,
          priceId: form.querySelector('input[name="priceId"]').value,
        })
          .then(response => {
            const amount = response.data.basketTotal.toLocaleString(
              'es-ES',
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }
            );
            this.notifySuccess();
            this.itemTotal.textContent = `${amount} €`;
          })
          .catch(error => {
            this.notifyError();
            console.log(error);
          });
      })
    });
  }
}

new Products();
