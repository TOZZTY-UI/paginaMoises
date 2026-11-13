const form = document.querySelector<HTMLFormElement>('#contact-form');
const phoneInput = document.querySelector<HTMLInputElement>('#telefono');

const formatChileanPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    let localNumber = digits;

    if (digits.startsWith('569')) {
        localNumber = digits.slice(3);
    } else if (digits.startsWith('56')) {
        localNumber = digits.slice(2);
    }

    // If the user pastes a complete Chilean mobile number (9 + 8 digits),
    // remove the mobile prefix 9 because +569 already contains it.
    if (localNumber.length > 8 && localNumber.startsWith('9')) {
        localNumber = localNumber.slice(1);
    }

    localNumber = localNumber.slice(0, 8);
    return localNumber ? `+569${localNumber}` : '';
};

phoneInput?.addEventListener('input', () => {
    phoneInput.value = formatChileanPhone(phoneInput.value);
});

form?.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
        return;
    }

    event.preventDefault();

    const data = new FormData(form);
    const message = [
        'Hola, quiero consultar por un evento.',
        `Tu nombre: ${data.get('nombre')}`,
        `Tu número de teléfono: ${data.get('telefono') || 'No indicado'}`,
        `Tipo de evento: ${data.get('evento')}`,
        `Describe tu evento: ${data.get('mensaje')}`,
    ].join('\n');

    window.open(`https://wa.me/56949251898?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
