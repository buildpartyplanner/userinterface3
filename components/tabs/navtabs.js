class NavTab{
    constructor(navTabElem){
        this.navTabElem = navTabElem;
        this.navTabElem.addEventListener('click', () => this.select());
    }
    select(){
        const navTabs = document.querySelectorAll('.nav-header a');
        Array.from(navTabs).forEach(tab => tab.classList.remove('nav-a-selected'));
        this.navTabElem.classList.toggle('nav-a-selected');
    }
}

const navTabs = document.querySelectorAll("header nav a").forEach(tab => new NavTab(tab));

