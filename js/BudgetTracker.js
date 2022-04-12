//  This file is a class that handles everything related to the budget tracker.  

// We have to import it in the main file to use it.

// Here, we define each method inside the class before implementing each one


export default class BudgetTracker {
    constructor(querySelectorString) {
        this.root = document.querySelector(querySelectorString);
        console.log(this.root);
        
    }

    //this method is going to return the html for the tabel itself
    static html(){
        

    }
//this method is going to return the html string for a single row inside that table
    static entryHtml(){
        
    }
//this method is the inital loading of the data
    load(){
        
    }

//this method takes all of the rows in the table, calculates the total amount and displays it in the bottom right corner.
    updateSummary(){

    }

//this method takes all the data and saves it to local storage so it can be stored when you refresh the page.
    save(){

    }

//this method takes in an entry as an object that has a default value of an empty object.
//this is going to add a new entry inside the table.
    addEntry(entry = {}){

    }

//this method is going to return all the active rows and/or rows inside the table
    getEntryRows(){
        
    }

//when you click on the button for a new entry this function is going to run and add a new entry
    onNewEntryBtnClick(){   
    }

//this is going to be going through the event object and is going to do something when the user clicks on the little 'x' to delete an entry.
    onDeleteEntryBtnClick(e){
        
    }
}





/* 

THE  "console.log(this.root)"  WILL ONLY SHOW/WORK IN A LIVE SERVER FOR SOME REASON ...HAVEN'T A CLUE WHY. BUT THAT'S VERY IMPORTANT TO KNOW.

WHEN YOU INSPECT THE BROWSER THE OUTPUT SHOULD BE:  "<div id="app"></div>"

*/