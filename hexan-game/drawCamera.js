function drawCamera(event, camera) {
    const x = camera.x;
    const y = camera.y;
    const x1 = event.clientX;
    const y1 = event.clientY;
    window.addEventListener("mousemove", drugging);
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", drugging);
    });
    function drugging(e) {
        camera.setX(x - e.x + x1);
        camera.setY(y - e.y + y1);
    }
}

function drawCameraMobile(event, camera) {
    const x = camera.x;
    const y = camera.y;
    const x1 = event.clientX;
    const y1 = event.clientY;
    camera.setX(x - e.x + x1);
    camera.setY(y - e.y + y1);
}
