const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawHexan(x, y, hexanSize, color = color7, camera) {
    const projectionX = world.hexanProjectionX;
    const projectionY = world.hexanProjectionY;
    const width = world.hexanWidth;
    const height = world.hexanHeight;
    ctx.beginPath();
    ctx.fillStyle = color;
    let skew = 0;
    if (y % 2 != 0) {
        skew = projectionX;
    }
    const addition = width * x - skew + 2 * projectionX;
    ctx.moveTo(addition - camera.x, height * y - camera.y);
    ctx.lineTo(addition - camera.x + projectionX, height * y + projectionY - camera.y);
    ctx.lineTo(addition - camera.x + projectionX, height * y + projectionY + hexanSize - camera.y);
    ctx.lineTo(addition - camera.x, height * y + projectionY + hexanSize + projectionY - camera.y);
    ctx.lineTo(addition - camera.x - projectionX, height * y + projectionY + hexanSize - camera.y);
    ctx.lineTo(addition - camera.x - projectionX, height * y + projectionY - camera.y);
    ctx.lineTo(addition - camera.x, height * y - camera.y);
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';
    ctx.lineWidth = '3';
    ctx.stroke();
    ctx.closePath();
}