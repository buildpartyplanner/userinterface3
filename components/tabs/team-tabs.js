class teamTab{
    constructor(tabElem){
        this.tabElem = tabElem;
        this.tabData= this.tabElem.dataset.tab;
        this.teamProfile= document.querySelector(`.team-profiles[data-tab='${this.tabData}']`);
        this.teamNarrative = new TeamProfile(this.teamProfile);
        this.tabElem.addEventListener('click', () => this.select());
    }
    select(){
        const tabs = document.querySelectorAll('.tab-team');
        Array.from(tabs).forEach(tab => tab.classList.remove('tab-team-selected'));
        this.tabElem.classList.toggle('tab-team-selected');
        this.teamNarrative.select();
    }
}

class TeamProfile{
    constructor(element){
        this.element = element;
    }
    select(){
        const narratives = document.querySelectorAll('.team-profiles');
        Array.from(narratives).forEach(narrative => narrative.classList.remove('team-profiles-selected'));
        this.element.classList.toggle('team-profiles-selected');
    }
}


const teamTabs = document.querySelectorAll(".tab-team").forEach(tab => new teamTab(tab));
console.log(document.querySelectorAll('.tab-team'));
