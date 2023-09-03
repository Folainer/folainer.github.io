class Header {
    create() {
      const lang = languageData[localStorage.getItem('language')];
      this.element = document.createElement('header');
      const link = location.href.split('portfolio')[0];
      const languages = languageData.map((element, id) => {
        return `<div class="nav__link sans language" onclick="app.changeLanguage(${id})">${element.code}</div>`;
      });
      this.element.innerHTML = `
      <nav>
        <div class="nav__wrapper">
          <div class="nav__left">
            <a class="nav__link sans" href="${link}portfolio/index.html">${lang.menu[0]}</a>
            <a class="nav__link sans" href="${link}portfolio/portfolio.html">${lang.menu[1]}</a>
          </div>
          <div class="nav__right">
            ${languages.join('')}
          </div>
        </div>
      </nav>`;
    document.body.append(this.element);
    return this;
  }

  update() {
      this.element.remove();
      this.create();
  }
}