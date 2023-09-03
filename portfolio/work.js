class Work {
    constructor(param, num) {
        this.param = param;
        this.num = num;
    }
    create() {        
        this.element = document.createElement('main');
        this.param.forEach(par => {
            this.element.innerHTML += par.create();
        })
        document.body.append(this.element);
        return this;
    }

    update() {
        console.log(localStorage.getItem('language'))
        this.param = createParamaters(languageData[localStorage.getItem('language')].portfolio[this.num])
        this.element.innerHTML = '';
        this.element.remove();
        this.create(this.param);
    }
}

class Video {
    constructor(html) {
        this.html = html;
    }

    create() {
        return this.html
    }
}

class Text {
    constructor(text) {
        this.text = text;
    }

    create() {
        const html = `
        <div class='work__text'>
            ${
                this.text.map(t => {
                    return `
                    <div class='work__article'>${t}</div>`
                }).join('')
            }
        </div>`;
        return html;
    }
}

class Image {
    constructor(url) {
        this.url = url;
    }

    create() {
        const html = `
        <div class='work__image'>
            <img src='../img/${this.url}'>
        </div>`;
        return html;
    }
}

class Slider {
    constructor(paths) {
        this.paths = paths;
    }

    create() {
        return `
        <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div thumbsSlider="" class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </div>
        </div>
      </div>`
    }
}

class Title {
  constructor(text) {
      this.text = text;
  }

  create() {
    return `
    <div class='work__title'>${this.text}</div>`;
  }
}

class MainTitle {
  constructor(text, date) {
    this.text = text;
    this.date = date;
  }

  create() {
    const year = this.date.getFullYear();
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
    const day = (this.date.getDate()).toString().padStart(2, '0');
    return `
    <div class='work__maintitle'>${this.text}</div>
    <div class='work__date'>${day}.${month}.${year}</div>`;
  }
}

class Pdf {
  constructor([url, title]) {
    [this.url, this.title] = [url, title];
  }

  create() {
    return `
    <div class='work__pdf'>
      <a class='work__pdflink' href='${'../pdf/' + this.url}'>${this.title}</a>
    </div> `;
  }
}

function createParamaters(item) {
      const res = item.content.map(c => {
        switch (Object.keys(c)[0]) {
          case 'video':
            return new Video(c.video);
          case 'text':
            return new Text(c.text);
          case 'slider':
            return new Slider(c.slider);
          case 'image':
            return new Image(c.image);
          case 'pdf':
            return new Pdf(c.pdf);
          case 'title':
            return new Title(c.title);
          case 'maintitle':
            return new MainTitle(c.maintitle, item.date);
        }
    });
    return res;
}