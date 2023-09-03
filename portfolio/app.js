class App {
    constructor(components) {
        if (!Array.isArray(components)) {
            throw new Error('Component error');
        }
        this.components = components;
        this.language = new Language();
    }

    create() {
        for (let component of this.components) {
            component.create();
        }
    }

    update() {
        for (let component of this.components) {
            component.update();
        }
    }

    changeLanguage(number) {
        this.language.changeLanguage(number);
        this.update();
    }
}