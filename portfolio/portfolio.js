class Portfolio {
    create() {
        const lang = languageData[localStorage.getItem('language')];
        const portfolio = lang.portfolio;
        const uniqueGroups = this.findGroups(lang)
        this.element = document.createElement('main');

        if (!localStorage.getItem('isFilter'))
        {
            localStorage.setItem('isFilter', '0');
        }

        this.element.innerHTML =  `
        <div class='filter' style="display: ${this.filterDisplayValue()}">
            <div class='filter__close'>
                <img src='img/close.png' class='filter__closeImg'/>
            </div>
            <div class='filter__item'>
                <div class='filter__title'>${lang.filterLabels[0]}</div>
                <div class='filter__option'>
                    <input class='filter__radio' type='radio' name='date' id='month'><label for='month'><span class="filter__span">${lang.filter[0]}</span></label>
                </div>
                <div class='filter__option'>
                    <input class='filter__radio' type='radio' name='date' id='year'><label for='year'><span class="filter__span">${lang.filter[1]}</span></label>
                </div>
                <div class='filter__option'>
                    <input class='filter__radio' type='radio' name='date' id='all' checked><label for='all'><span class="filter__span">${lang.filter[2]}</span></label>
                </div>
                <div class='filter__option'>
                    <input class='filter__radio' type='radio' name='date' id='reversedAll'><label for='reversedAll'><span class="filter__span">${lang.filter[3]}</span></label>
                </div>
            </div>
            <div class='filter__item'>
                <div class='filter__title'>${lang.filterLabels[1]}</div>
                <select class='filter__select' name="groups" id="groups">
                    <option class='filter__selectoption' selected value="All">${lang.filter[2]}</option>
                    ${
                        uniqueGroups.map(element => {
                            return `
                                <option class='filter__selectoption' value='${element}'>${element}</option>`
                        })
                    }
                </select>
            </div>
        </div>
        <div class='portfolio'>
            ${ 
                portfolio.map((element, i) => {
                    return `
                    <div class='portfolio__item' data-link=${element.link} data-d='true' data-g='true'>
                        <div class='portfolio__imagewrapper'>
                            <img class='portfolio__image' src='${element.src}'>
                        </div>
                        <div class='portfolio__title'>${element.title}</div>
                    </div>`
                }).join('')
            }
        </div>
        <div class='filter__blur ${this.getFilterBlurClass()}'></div>
        <div class='filter__button'>
            <img class='filter__buttonImg' src='img/setting.png'/>
        </div>`;
        document.body.append(this.element);
        const filterBlur = document.querySelector('.filter__blur');
        const filter = document.querySelector('.filter');
        const filterButton = document.querySelector('.filter__button');

        if (!this.isMobile()) {
            filter.style.display = 'block';
            filterButton.style.display = 'none';
        } else {
            if (localStorage.getItem('isFilter') == '1') {
                filter.style.display = 'block';
                filterButton.style.display = 'none';

            } else {
                filter.style.display = 'none';
                filterButton.style.display = 'block';
            }
        }

        window.addEventListener('resize', () => {
            if (!this.isMobile()) {
                filter.style.display = 'block';
                filterButton.style.display = 'none';
            } else {
                if (localStorage.getItem('isFilter') == '1') {
                    filter.style.display = 'block';
                    filterButton.style.display = 'none';

                } else {
                    filter.style.display = 'none';
                    filterButton.style.display = 'block';
                }
            }
        });

        filterButton.addEventListener('click', ()=> {
            filterButton.style.display = 'none';
            filter.style.display = 'block';
            localStorage.setItem('isFilter', '1');
            filterBlur.style.display = 'block';
        });
        document.querySelector('.filter__closeImg').addEventListener('click', () => {
            localStorage.setItem('isFilter', '0');
            filter.style.display = 'none';
            filterBlur.classList.add('filter__blur_closed');
            filterBlur.style.display = 'none';
            filterButton.style.display = 'block';
        });
        const portfolio__items = document.querySelectorAll('.portfolio__item');
        const radioButtons = document.querySelectorAll('.filter__radio');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                const indexAndDate = [];
                portfolio__items.forEach((element, i) => {
                    indexAndDate.push([i, new Date(element.dataset.date)]);
                });
                switch(radio.id) {
                    case 'all':
                        indexAndDate.sort((a, b) => a[1] - b[1]);
                        break;
                    case 'reversedAll':
                        indexAndDate.sort((a, b) => b[1] - a[1]);
                        break;
                    default:
                        indexAndDate.sort((a, b) => a[1] - b[1]);
                        break;
                }
                portfolio__items.forEach((element, i) => {
                    element.style.order = indexAndDate[i][0];
                    if (element.dataset.d == 'false' && element.dataset.g == 'true') {
                        element.style.display = 'block';
                        element.dataset.d = true;
                    }
                })
                if (radio.id == 'month') {
                    portfolio__items.forEach((element, i) => {
                        const date = new Date(element.dataset.date);
                        const nowDate = new Date();
                        if (new Date(`${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`).getTime() - new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).getTime() >= 0) {
                            element.style.display = 'none';
                            element.dataset.d = false;
                        }
                    })
                } else if (radio.id == 'year') {
                    portfolio__items.forEach((element, i) => {
                        const date = new Date(element.dataset.date);
                        const nowDate = new Date();
                        if (new Date(`${nowDate.getFullYear() - 1}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`).getTime() - new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).getTime() >= 0) {
                            element.style.display = 'none';
                            element.dataset.d = false;
                        }
                    })
                }
                console.log(indexAndDate)
            });
        })
        const items = document.querySelectorAll('.portfolio__item');
        items.forEach((element, i) => {
            element.dataset.group = portfolio[i].group
            element.dataset.date = portfolio[i].date
        })
        portfolio__items.forEach((element, i) => {
            element.style.order = i;
            element.addEventListener('click', () => {
                location.href = location.href.replace(/\/[^/]*$/, '') + '/works/' + element.dataset.link;
            })
        })
        const selectItem = document.querySelector('.filter__select');
        selectItem.addEventListener('change', () => {
            portfolio__items.forEach(element => {
                if (element.dataset.g == 'false' && element.dataset.d == 'true') {
                    element.style.display = 'block';
                    element.dataset.g = true;
                }
                if (!element.dataset.group.includes(selectItem.value) && selectItem.value != 'All') {
                    if (element.dataset.g == 'true') {
                        element.style.display = 'none';
                        element.dataset.g = false;
                    }
                }
            })
        });
        return this;
    }

    update() {
        this.element.remove();
        this.create();
    }

    findGroups(lang) {
        const portfolioItem = lang.portfolio;
        const uniqueGroups = new Set();
        const res = portfolioItem.forEach(element => {
            element.group.forEach(innerElement => {
                uniqueGroups.add(innerElement);
            })
        })
        return Array.from(uniqueGroups)
    }

    isMobile() {
        if (window.innerWidth <= 1000) {
            return true;
        } else {
            return false;
        }
    }

    filterDisplayValue() {
        if (localStorage.getItem('isFilter') == '0' && this.isMobile())
        {
            return 'none';
        } else {
            return 'block';
        }
    } 

    closeFilter() {
        alert("Hello");
    }

    getFilterBlurClass() {
        if (localStorage.getItem('isFilter') == '0' && this.isMobile()) {
            return 'filter__blur_closed';
        } else {
            return '';
        }
    }
}