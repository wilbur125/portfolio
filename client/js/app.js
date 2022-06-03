const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    function sendEmail() {
        Email.send({
            SecureToken : "198e5610-0a47-4d5f-858b-fc5463f33fae",
            To : 'matt@wilbur125.dev',
            From : document.getElementById("email").value,
            Subject : document.getElementById("subject").value,
            Body : "Name: " + document.getElementById("name").value 
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Message: " + document.getElementById("message").value
        }).then(
        message => alert(message)
        );
    }

    sendEmail();
})