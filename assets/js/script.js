/**
 * ==================================================
 * LÒGICA BÀSICA DE JAVASCRIPT PER A EMERTEK
 * Funcionalitat: Validació de Formulari i Millores d'UX
 * ==================================================
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Emertek web script loaded successfully.');
    
    // ATENCIÓ: Has d'actualitzar l'URL del formulari a contacte.html 
    // amb la teva ID real de Formspree perquè funcioni l'enviament.
    const formspreeUrl = 'https://formspree.io/f/xovyqqno';
    const contactForm = document.querySelector(`form[action="${formspreeUrl}"]`);

    if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            
            // 1. Validació de camps requerits bàsica
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });

            // 2. Validació de correu electrònic simple
            const emailField = contactForm.querySelector('#email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patró bàsic de correu

            if (emailField && !emailPattern.test(emailField.value.trim())) {
                isValid = false;
                emailField.classList.add('is-invalid');
            } else if (emailField) {
                emailField.classList.remove('is-invalid');
            }
            
            // Si la validació falla, preventDefault() atura l'enviament.
            if (!isValid) {
                event.preventDefault();
                alert('Si us plau, omple tots els camps obligatoris correctament abans d\'enviar.');
            }
            // Si la validació passa (isValid = true), el JS NO FA RES, 
            // i el navegador envia les dades directament a l'URL de Formspree definida a contacte.html.
        });
        
        // Funció per netejar l'estat d'error (la classe is-invalid) quan l'usuari escriu
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                if (field.classList.contains('is-invalid')) {
                    field.classList.remove('is-invalid');
                }
            });
        });
    }

});
