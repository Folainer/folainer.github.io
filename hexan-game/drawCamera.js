function drawCamera(event, camera) {
    const x = camera.x;
    const y = camera.y;
    const x1 = event.clientX;
    const y1 = event.clientY;
    window.addEventListener("mousemove", drugging);
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", drugging);
    });
    function drugging(event) {
        camera.setX(x - event.x + x1);
        camera.setY(y - event.y + y1);
    }
}

function drawCameraMobile(event, camera) {
    const x = camera.x;
    const y = camera.y;
    const x1 = Math.floor(event.changedTouches[0].clientX);
    const y1 = Math.floor(event.changedTouches[0].clientY);
    window.addEventListener("touchmove", (e) => {
        drugging(e);
    });
    window.addEventListener("touchend", () => {
        window.removeEventListener("touchmove", drugging);
    });
    function drugging(event) {
        camera.setX(x - Math.floor(event.changedTouches[0].clientX) + x1);
        camera.setY(y - Math.floor(event.changedTouches[0].clientY) + y1);
    }
}
