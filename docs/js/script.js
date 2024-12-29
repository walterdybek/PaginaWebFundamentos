function showModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
}
function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.course-section ul');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.toggle('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

function showMessage(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
}

document.querySelectorAll('.fii-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = e.target.dataset.modal;
        document.getElementById(modalId).style.display = 'flex';
    });
});

document.querySelectorAll('.fii-modal-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.fii-modal').style.display = 'none';
    });
});
