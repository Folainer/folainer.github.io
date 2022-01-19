function startGame() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    const camera = new Camera();
    const world = new World(100, 100);
    world.create();
    world.generate();
    window.addEventListener("mousedown", () => drawCamera(event, camera));
    window.onresize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.requestAnimationFrame(() => startRendering(world, camera));
}
let _fps = 0;
let fps = 0;

setInterval(() => {
    fps = _fps;
    _fps = 0;
}, 1000);
function startRendering(world, camera) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    camera.render(world, camera);
    ctx.font = "bold 50px Arial"
    ctx.fillStyle = color8;
    ctx.fillText(`FPS:${fps}`, 80, 80);
    _fps++;
    window.requestAnimationFrame(() => startRendering(world, camera));
}
startGame();

