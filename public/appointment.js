document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const petTypeSelect = document.getElementById('petType');
    const otherPetTypeGroup = document.getElementById('otherPetTypeGroup');
    const serviceSelect = document.getElementById('service');
    const otherServiceGroup = document.getElementById('otherServiceGroup');
  
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
  
        if (petTypeSelect.value === '') {
            isValid = false;
            showError(petTypeSelect, 'Please select a pet type');
        }
  
        if (serviceSelect.value === '') {
            isValid = false;
            showError(serviceSelect, 'Please select a service');
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
  
    function submitForm() {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
  
        // Simulating an API call
        setTimeout(() => {
            console.log('Form submitted:', data);
            alert('Appointment scheduled successfully!');
            form.reset();
        }, 1000);
    }
  });
  
  