class Main {
    create() {
        const lang = languageData[localStorage.getItem('language')];
        this.element = document.createElement('main');
        this.element.innerHTML = 'It will be made soon. The site\'s version is 1.0'
        document.body.append(this.element);
        return this;
    }

    update() {
        this.element.remove();
        this.create();
    }
}