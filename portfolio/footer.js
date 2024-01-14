class Footer {
    create() {
      const lang = languageData[localStorage.getItem('language')];
      this.element = document.createElement('footer');
      this.element.classList.add('footer');
      this.element.innerHTML = ``;
    document.body.append(this.element);
    return this;
  }

  update() {
      this.element.remove();
      this.create();
  }
}