(function() {
    emailjs.init('ZE7eFLbgPxZGrKRpl');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_g62huhk', 'template_1t5mpla', this)
            .then(function() {
                console.log('SUCCESS!');
                alert("Message sent!");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Something went wrong - please try again later!");
            });
            document.getElementById('contact-form').reset();
    });
};
