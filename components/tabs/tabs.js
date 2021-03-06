class PartyTab{
    constructor(tabElem){
        this.tabElem = tabElem;
        this.tabData= this.tabElem.dataset.tab;
        this.partyStory = document.querySelector(`.party-story[data-tab='${this.tabData}']`);
        this.partyNarrative = new PartyStory(this.partyStory);
        this.tabElem.addEventListener('click', () => this.select());
    }
    select(){
        const tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => tab.classList.remove('tab-selected'));
        this.tabElem.classList.toggle('tab-selected');
        this.partyNarrative.select();
    }
}

//Object for each blurb, basically controls which blurbs get shown.
class PartyStory{
    constructor(element){
        this.element = element;
    }
    select(){
        const narratives = document.querySelectorAll('.party-story');
        Array.from(narratives).forEach(narrative => narrative.classList.remove('party-story-selected'));
        this.element.classList.toggle('party-story-selected');
    }
}

//Grabs the "tabs" associated with party organizers in parties.html
const partyTabs = document.querySelectorAll(".tab").forEach(tab => new PartyTab(tab));

