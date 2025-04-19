// Calculator Form Submission
document.getElementById('calc-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const measurement = parseFloat(document.getElementById('measurement').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    let percentile = 50;
    if (gender === 'male') {
        if (measurement > 50) percentile = 75;
        else if (measurement < 45) percentile = 25;
    } else {
        if (measurement > 48) percentile = 75;
        else if (measurement < 43) percentile = 25;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Result:</strong> Head Circumference: ${measurement} cm</p>
        <p><strong>Age:</strong> ${age} months</p>
        <p><strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
        <p><strong>Percentile:</strong> Approximately ${percentile}th percentile</p>
        <p><em>Note: Consult a healthcare professional for accurate interpretation.</em></p>
    `;

    resultDiv.style.opacity = '0';
    setTimeout(() => {
        resultDiv.style.transition = 'opacity 0.5s';
        resultDiv.style.opacity = '1';
    }, 100);
});

// Contact Form Submission
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const resultDiv = document.getElementById('contact-result');
    resultDiv.innerHTML = `
        <p>Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.</p>
    `;

    resultDiv.style.opacity = '0';
    setTimeout(() => {
        resultDiv.style.transition = 'opacity 0.5s';
        resultDiv.style.opacity = '1';
    }, 100);

    // Reset form
    this.reset();
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});