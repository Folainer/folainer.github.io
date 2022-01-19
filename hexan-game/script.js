function startGame() {
    console.log(ctx.createImageData(canvas.width, canvas.height));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    camera = new Camera();
    world = new World(250, 250);
    world.create();
    world.generate(1.2, 1);
    if (navigator.userAgentData.mobile) {
        window.addEventListener("mousemove", (event) => {
            drawCameraMobile(event, camera);
        })
    } else {
        window.addEventListener("mousedown", (event) => drawCamera(event, camera));
    }
    window.onresize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        needDraw = true;
    }
    window.addEventListener("mousemove", (event) => {
        selectHexan(event, world, camera);
        needDraw = true;
        imageData = ctx.createImageData(canvas.width, canvas.height);
    });
    window.requestAnimationFrame(() => startRendering(world, camera));
}

let _fps = 0;
let fps = 0;
setInterval(() => {
    fps = _fps;
    _fps = 0;
    needDraw = false;
}, 1000);

function startRendering(world, camera) {
    camera.render(world, camera);
    window.requestAnimationFrame(() => startRendering(world, camera));
}
startGame();

