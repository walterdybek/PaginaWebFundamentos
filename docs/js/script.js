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

//script snake 
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20;
const canvasSize = 400;
const totalBoxes = canvasSize / boxSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: getRandomPosition(), y: getRandomPosition() };
let score = 0;
let gameInterval = null;
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");

// Función para generar posiciones aleatorias
function getRandomPosition() {
    return Math.floor(Math.random() * totalBoxes);
}

// Dibujar la serpiente
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
        ctx.strokeStyle = "darkgreen";
        ctx.strokeRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
    });
}

// Dibujar la comida
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
}

// Mover la serpiente
function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Verificar colisiones
    if (head.x < 0 || head.x >= totalBoxes || head.y < 0 || head.y >= totalBoxes || isCollision(head)) {
        clearInterval(gameInterval);
        alert("Game Over! Presiona 'Start Game' para jugar de nuevo.");
        resetGame();
        return;
    }

    // Verificar si come la comida
    if (head.x === food.x && head.y === food.y) {
        food = { x: getRandomPosition(), y: getRandomPosition() };
        score++;
        scoreDisplay.textContent = score;
    } else {
        snake.pop();
    }

    snake.unshift(head);
}

// Verificar si la serpiente choca consigo misma
function isCollision(head) {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

// Dibujar el canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
}

// Actualizar el juego
function update() {
    moveSnake();
    draw();
}

// Configurar controles
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case "s":
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case "a":
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case "d":
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// Iniciar el juego
startButton.addEventListener("click", () => {
    if (!gameInterval) {
        gameInterval = setInterval(update, 100);
    }
});

// Reiniciar el juego
function resetGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 0, y: 0 };
    food = { x: getRandomPosition(), y: getRandomPosition() };
    score = 0;
    scoreDisplay.textContent = score;
    gameInterval = null;
}
