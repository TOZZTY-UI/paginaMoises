const form = document.querySelector<HTMLFormElement>('#contact-form');
    const emailInput = document.querySelector<HTMLInputElement>('#correo');
    const allowedEmailDomains = new Set([
        'gmail.com',
        'gmail.cl',
        'outlook.com',
        'outlook.cl',
        'hotmail.com',
        'hotmail.cl',
        'live.com',
        'live.cl',
        'msn.com',
        'yahoo.com',
        'yahoo.cl',
        'icloud.com',
        'me.com',
        'proton.me',
        'protonmail.com',
        'zoho.com',
        'gmx.com',
        'mail.com',
        'aol.com',
    ]);

    const validateEmailDomain = () => {
        if (!emailInput || !emailInput.value) return true;

        const domain = emailInput.value.trim().toLowerCase().split('@').pop() ?? '';
        const isAllowed = allowedEmailDomains.has(domain);

        emailInput.setCustomValidity(
            isAllowed
                ? ''
                : 'Usa un correo de un proveedor reconocido, como Gmail, Outlook o Hotmail.',
        );

        return isAllowed;
    };

    emailInput?.addEventListener('input', validateEmailDomain);
    emailInput?.addEventListener('blur', validateEmailDomain);

    form?.addEventListener('submit', (event) => {
        if (!validateEmailDomain() || !form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
            return;
        }

        event.preventDefault();

        const data = new FormData(form);
        const message = [
            'Hola, quiero consultar por un evento.',
            `Tu nombre: ${data.get('nombre')}`,
            `Tu correo: ${data.get('correo')}`,
            `Tu número de teléfono: ${data.get('telefono') || 'No indicado'}`,
            `Tipo de evento: ${data.get('evento')}`,
            `Describe tu evento: ${data.get('mensaje')}`,
        ].join('\n');

        window.open(`https://wa.me/56949251898?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
