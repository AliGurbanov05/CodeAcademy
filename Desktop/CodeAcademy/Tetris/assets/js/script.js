// Sadə Tetris (başlayanlar üçün)

const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const blockSize = 20;
const columns = 10;
const rows = 20;
 
canvas.width = columns * blockSize;
canvas.height = rows * blockSize;

const colors = ["black", "red", "blue", "green", "yellow"];

// Arena (oyun sahəsi)
const arena = [];
for (let i = 0; i < rows; i++) {
    arena.push(new Array(columns).fill(0));
}

// 1 bloklu kvadrat parça
let piece = {
    x: 4,
    y: 0,
    color: 1
};

function drawBlock(x, y, color) {
    ctx.fillStyle = colors[color];
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function drawArena() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            drawBlock(x, y, arena[y][x]);
        }
    }
}

function drawPiece() {
    drawBlock(piece.x, piece.y, piece.color);
}

function mergePiece() {
    arena[piece.y][piece.x] = piece.color;
}

function resetPiece() {
    piece.x = 4;
    piece.y = 0;
    piece.color = Math.floor(Math.random() * (colors.length - 1)) + 1;
}

function moveDown() {
    piece.y++;
    if (collide()) {
        piece.y--;
        mergePiece();
        resetPiece();
    }
}

function collide() {
    if (piece.y >= rows || arena[piece.y][piece.x] !== 0) {
        return true;
    }
    return false;
}

function moveLeft() {
    piece.x--;
    if (piece.x < 0 || arena[piece.y][piece.x] !== 0) {
        piece.x++;
    }
}

function moveRight() {
    piece.x++;
    if (piece.x >= columns || arena[piece.y][piece.x] !== 0) {
        piece.x--;
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawArena();
    drawPiece();
}

setInterval(() => {
    moveDown();
    update();
}, 500); // düşmə sürəti (500ms)

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
    if (e.key === "ArrowDown") moveDown();
    update();
});

update();
