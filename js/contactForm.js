(function() {
    emailjs.init('YK7n8jA-r6lU9QaXy');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_g62huhk', 'template_1t5mpla', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
            document.getElementById('contact-form').reset();
    });
};
