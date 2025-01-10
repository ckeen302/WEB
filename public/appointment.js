document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const petTypeSelect = document.getElementById('petType');
    const otherPetTypeGroup = document.getElementById('otherPetTypeGroup');
    const serviceSelect = document.getElementById('service');
    const otherServiceGroup = document.getElementById('otherServiceGroup');
    const hoursOfOperation = {
        monday: { start: "08:00", end: "18:00" },
        tuesday: { start: "08:00", end: "18:00" },
        wednesday: { start: "08:00", end: "18:00" },
        thursday: { start: "08:00", end: "18:00" },
        friday: { start: "08:00", end: "18:00" },
        saturday: { start: "09:00", end: "16:00" },
        sunday: null // Closed
    };

    petTypeSelect.addEventListener('change', function() {
        otherPetTypeGroup.style.display = this.value === 'other' ? 'block' : 'none';
    });

    serviceSelect.addEventListener('change', function() {
        otherServiceGroup.style.display = this.value === 'other' ? 'block' : 'none';
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        const errorMessages = document.querySelectorAll('.error');
        const appointmentTimeField = form.querySelector('#appointmentTime');
        const appointmentDate = new Date(appointmentTimeField.value);

        errorMessages.forEach(msg => msg.remove());

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                showError(field, 'This field is required');
            } else if (field.type === 'email' && !isValidEmail(field.value)) {
                isValid = false;
                showError(field, 'Please enter a valid email address');
            } else if (field.type === 'tel' && !isValidPhone(field.value)) {
                isValid = false;
                showError(field, 'Please enter a valid phone number');
            }
        });

        if (otherPetTypeGroup.style.display === 'block' && !form.otherPetType.value.trim()) {
            isValid = false;
            showError(form.otherPetType, 'Please specify the pet type');
        }

        if (otherServiceGroup.style.display === 'block' && !form.otherService.value.trim()) {
            isValid = false;
            showError(form.otherService, 'Please specify the service');
        }

        if (!isFutureDate(appointmentDate)) {
            isValid = false;
            showError(appointmentTimeField, 'Please select a future date and time.');
        } else if (!isWithinHours(appointmentDate)) {
            isValid = false;
            showError(appointmentTimeField, 'Appointment must be scheduled within business hours.');
        }

        return isValid;
    }

    function showError(field, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\+?[\d\s-]{10,}$/.test(phone);
    }

    function isFutureDate(date) {
        const now = new Date();
        return date > now;
    }

    function isWithinHours(date) {
        const day = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const hours = hoursOfOperation[day];
        if (!hours) return false; // Closed
        const appointmentTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return appointmentTime >= hours.start && appointmentTime <= hours.end;
    }

    function submitForm() {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        setTimeout(() => {
            console.log('Form submitted:', data);
            alert('Appointment scheduled successfully!');
            window.location.href = '/thank-you.html'; // Redirect to the Thank You page
        }, 1000);
    }
});
