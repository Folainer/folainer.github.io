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

        for (let i = 0; i < world.height; i++) {
            for (let j = 0; j < world.width; j++) {
                const hexan = world.hexan[i * world.width + j];
                if (hexan.isVisable) {
                    drawHexan(j, i, world.size, hexan.color, camera);
                }
            }
        }
    }
}

class World {
    constructor(height, width, size = 30) {
        this.height = height;
        this.width = width;
        this.size = size;
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