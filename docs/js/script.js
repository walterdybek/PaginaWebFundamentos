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

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "../images/photo1.jpg",
        "../images/photo2.jpg",
        "../images/photo3.jpg", // Puedes añadir más imágenes si lo deseas
    ];

    let currentIndex = 0;

    const galleryContainer = document.getElementById("gallery-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateGallery() {
        galleryContainer.innerHTML = `
            <img class="gallery-image" src="${images[currentIndex]}" alt="Foto ${currentIndex + 1}">
        `;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    // Inicializa la galería con la primera imagen
    updateGallery();
});


//script para topic 
document.addEventListener("DOMContentLoaded", () => {
    const imagesTopic = [
        "../images/diablo1.jpg",
        "../images/diablo2.jpg",
        "../images/diablo3.jpg",
        "../images/diablo4.jpg", // Añade más imágenes aquí
    ];

    let currentIndexTopic = 0;

    const topicGalleryContainer = document.getElementById("topic-gallery-container");
    const topicPrevBtn = document.getElementById("topic-prevBtn");
    const topicNextBtn = document.getElementById("topic-nextBtn");

    function updateTopicGallery() {
        topicGalleryContainer.innerHTML = `
            <img class="gallery-image" src="${imagesTopic[currentIndexTopic]}" alt="Imagen ${currentIndexTopic + 1}">
        `;
    }

    topicPrevBtn.addEventListener("click", () => {
        currentIndexTopic = (currentIndexTopic - 1 + imagesTopic.length) % imagesTopic.length;
        updateTopicGallery();
    });

    topicNextBtn.addEventListener("click", () => {
        currentIndexTopic = (currentIndexTopic + 1) % imagesTopic.length;
        updateTopicGallery();
    });

    updateTopicGallery();
});

