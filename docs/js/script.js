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
