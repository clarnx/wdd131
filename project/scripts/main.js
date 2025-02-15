const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');


const loadPreviousSubmissions = () => {
    return JSON.parse(localStorage.getItem('submissions')) || [];
};

const saveSubmission = (submission) => {
    const submissions = loadPreviousSubmissions();
    submissions.push(submission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    saveSubmission(formData);
    
    formStatus.textContent = `Thank you ${formData.name}! Your message has been sent.`;
    formStatus.style.color = '#0047AB';
    contactForm.reset();
});

const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        localStorage.setItem('selectedCategory', category);
        window.location.href = 'products.html';
    });
});