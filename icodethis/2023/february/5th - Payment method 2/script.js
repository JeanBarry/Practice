const continueButton = document.querySelector('#pay');

const paymentOptions = {
    card: document.querySelector('#card'),
    payLater: document.querySelector('#later'),
};


const paymentElements = {
    card: {
        number: document.querySelector('#card-number'),
        expiration: document.querySelector('#expiration'),
        cvc: document.querySelector('#cvc'),
    },
    payLater: {},
};

const activateButton = (activate) => {
    if (activate) {
        continueButton.removeAttribute('disabled');
        continueButton.classList.add('bg-blue-900');
        continueButton.classList.remove('bg-slate-200');
    } else {
        if (!continueButton.classList.contains('bg-slate-200')) {
            continueButton.setAttribute('disabled', true);
            continueButton.classList.remove('bg-blue-900');
            continueButton.classList.add('bg-slate-200');
        }
    }
};

const getCardFieldsValidation = () => {
    return {
        number: new RegExp(/\d{4} \d{4} \d{4} \d{4}/).test(paymentElements.card.number.value),
        expiration: new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9])|3[0-1]$/).test(paymentElements.card.expiration.value),
        cvc: new RegExp(/^\d{3}$/).test(paymentElements.card.cvc.value),
    };
}

const validateCardInputs = () => {
    const fieldValidity = getCardFieldsValidation();

    const formIsValid = Object.values(fieldValidity).every(field => field);

    if (formIsValid) {
        activateButton(true);
    } else {
        activateButton(false);
    }
}

const handleCardInputs = (event) => {
    const target = event.target;
    let value = target.value;

    switch (target.id) {
        case 'card-number':
            value = value.replace(/\D/g, '');
            value = value.replace(/(\d{4})/g, '$1 ').trim();
            value = value.substring(0, 19);
            break;
        case 'expiration':
            value = value.replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            value.substring(0, 5);
            break;
        case 'cvc':
            value = value.replace(/\D/g, '');
            value = value.substring(0, 3);
            break;
    }

    target.value = value;
    validateCardInputs();
}

Object.values(paymentElements.card).forEach(element => {
    element.addEventListener('input', handleCardInputs);
});

paymentOptions.card.addEventListener('click', () => {
    validateCardInputs();
})

paymentOptions.payLater.addEventListener('click', () => {
    activateButton(true);
});



