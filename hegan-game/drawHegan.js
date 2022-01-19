const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawHexan(x, y, size, color = color7, camera) {
    const projectionX = size * Math.cos(Math.PI / 6);
    const projectionY = size * Math.sin(Math.PI / 6);
    const width = 2 * projectionX;
    const height = projectionY + size;
    ctx.fillStyle = color;
    ctx.beginPath();
    let skew = 0;
    if (y % 2 != 0) {
        skew = projectionX;
    }
    ctx.moveTo(width * x - skew + 2 * projectionX - camera.x, height * y - camera.y);
    ctx.lineTo(width * x - skew + 2 * projectionX + projectionX - camera.x, height * y + projectionY - camera.y);
    ctx.lineTo(width * x - skew + 2 * projectionX + projectionX - camera.x, height * y + projectionY + size - camera.y);
    ctx.lineTo(width * x - skew + 2 * projectionX - camera.x, height * y + projectionY + size + projectionY - camera.y);
    ctx.lineTo(width * x - skew + 2 * projectionX - projectionX - camera.x, height * y + projectionY + size - camera.y);
    ctx.lineTo(width * x - skew + 2 * projectionX - projectionX - camera.x, height * y + projectionY - camera.y);
    ctx.lineTo(width * x - skew + 2 * projectionX - camera.x, height * y - camera.y);
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';
    ctx.lineWidth = '3';
    ctx.stroke();
    ctx.closePath();
}