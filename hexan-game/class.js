class Camera {
    constructor(x = 0, y = 0, width = window.innerWidth, height = window.innerHeight) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    setWidth(width) {
        this.width = width;
        return true;
    }
    setHeight(height) {
        this.height = height;
        return true;
    }
    setX(x) {
        if (x >= -100) {
            this.x = x;
            return true;
        }
        return false;
    }
    setY(y) {
        if (y >= -100) {
            this.y = y;
            return true;
        }
        return false;
    }
    render(world, camera) {
        if (needDraw) {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (let i = 0; i < world.height; i++) {
                for (let j = 0; j < world.width; j++) {
                    const hexan = world.hexan[i * world.width + j];
                    if (hexan.isVisable) {
                        drawHexan(j, i, world.hexanSize, hexan.color, camera);
                    }
                }
            }
            if (world.selectedHexan[0] >= 0) {
                drawHexan(world.selectedHexan[0], world.selectedHexan[1], world.hexanSize, color4, camera);
            }
        }
        // ctx.putImageData(imageData, 0, 0);
        // ctx.font = "bold 50px Arial"
        // ctx.fillStyle = color8;
        // ctx.fillText(`FPS:${fps}`, 80, 80);
        // console.log(fps);
        _fps++;
    }
}

class World {
    constructor(height, width, hexanSize = 30) {
        this.height = height;
        this.width = width;
        this.hexanSize = hexanSize;
        this.hexanProjectionX = Math.round(this.hexanSize * Math.cos(Math.PI / 6));
        this.hexanProjectionY = Math.round(this.hexanSize * Math.sin(Math.PI / 6));
        this.hexanWidth = 2 * this.hexanProjectionX;
        this.hexanHeight = this.hexanProjectionY + this.hexanSize;
        this.selectedHexan = [-1, 0];
    }
    create() {
        const hexan = [];
        for (let i = 0; i < this.height * this.width; i++) {
            hexan.push(new Hexan);
        }
        this.hexan = hexan;
    }
    generate(density = 1, scatter = 1) {
        let count = density * Math.ceil(Math.random() * this.height * this.width) + 5 * this.width + 5 * this.height;
        let i = Math.floor(Math.random() * this.height / 2) + this.height / 4;
        let j = Math.floor(Math.random() * this.width / 2) + this.width / 4;
        this.hexan[i * this.width + j].isVisable = true;
        while (count > 0) {
            let k = 0;
            while (true) {
                if (scatter == 1) {
                    i = i + Math.floor(Math.random() * 3) - 1;
                    j = j + Math.floor(Math.random() * 3) - 1;
                } else if (scatter == 2) {
                    i = i + Math.floor(Math.random() * 5) - 2;
                    j = j + Math.floor(Math.random() * 5) - 2;
                } else if (scatter == 3) {
                    i = i + Math.floor(Math.random() * 7) - 3;
                    j = j + Math.floor(Math.random() * 7) - 3;
                }
                if (i >= 0 && j >= 0 && i < this.height && j < this.width) {
                    break;
                }
                if (j < 0) {
                    j += Math.floor(Math.random() * 20);
                }
                else if (i < 0) {
                    i += Math.floor(Math.random() * 20);
                }
                else if (i >= this.height) {
                    i -= Math.floor(Math.random() * 20);
                }
                else if (j >= this.width) {
                    j -= Math.floor(Math.random() * 20);
                }
            }
            this.hexan[i * this.width + j].isVisable = true;
            count--;
        }
    }
}

class Hexan {
    constructor(color = color5, isVisable = false) {
        this.color = color;
        this.isVisable = isVisable;
    }
}