class Main {
    create() {
        const lang = languageData[localStorage.getItem('language')];
        this.element = document.createElement('main');
        this.element.innerHTML = 'The site is still developing. The current site\'s version is 1.1'
        document.body.append(this.element);
        return this;
    }

    update() {
        this.element.remove();
        this.create();
    }
}