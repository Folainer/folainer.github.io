class Language {
    constructor() {
        if (localStorage.getItem('language') == null) {
            localStorage.setItem('language', '0');
        }
        this.data = languageData[localStorage.getItem('language')];
    }

    changeLanguage(number) {
        localStorage.setItem('language', number);
    }
}