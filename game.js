
class Game {
    constructor() {``
    this.scene = {
        //sceneKey
    planningTrip: {
        id:1,
        header:'Planning Your Trip',
        gameText:'Planning a trip during covid-19 can be stressful, nerve-wrecking, and just make you want to quit and not attempt to travel. Not so fun eh? But… the outcome will be worth it trust me!',
        question:'Want to travel during the Pandemic or stay home and be depressed?',
        decision1:'Travel',
        decision2:'Stay home',
                image:"",
            },
    TravelTime: {
        id:2,
        header:'Time to head to the Island of Hawaii',
        gameText:'Are you ready?',
        question:'',
        decision1:'Head there',
        decision2:'Changed my mind',
                image:"",
            },
            Congratulations: {
                id:3,
                header:'Congratulations! You’re all booked… Now it’s time to Prepare',
                gameText:'Hawaii has a strictly enforced policy for entry onto the island due to the covid-19 pandemic. With Mandatory quarantine policies in effect. In order to be allowed entry to Hawaii you must sign up for Hawaii safe travels account. If you are Fully vaccinated you will be exempt from quarantine. ( To be considered fully vaccinated you have to have 2 shots  and booster shot)                                                                 If you are Unvaccinated you will have to get tested no earlier than 72 hours before your last flight into Hawaii and must be from a hawaii approved trusted testing site.',
                question:'',
                decision1:'Continue',
                decision2:'This is seeming a bit too much for me...',
                        image:'',
                    },
            VaccinationStatus: {
                id:4,
                header:'Questionnaire',
                gameText:'',
                question:'',
                decision1:'Fully Vaccinated or Unvaccinated W/O symptoms',
                decision2:'Covid Symptoms <14 days',
                        image:'',
                    },
            HawaiiSafeTravel: {
                id:5,
                header:'Hawaii Safe Travel',
                gameText:'Upload information to be verified to hawaii safe travels to get QR code https://travel.hawaii.gov/#/',
                question:'',
                decision1:'I’m finished with safe travels',
                decision2:'This is overwhelming I give up',
                        image:'',
                    },
            Finally: {
                id:6,
                header:'Finally you survived that… ! Now time to pack for the trip',
                gameText:'Choose clothes to pack                                      Tip: Luggage over 50lbs cause for extra fees',
                question:'',
                decision1:'All packed',
                decision2:'I have to postpone this trip! I have no clothes.',
                        image:'',
                    },
            BreakingNews: {
                id:7,
                header:'Breaking News… 8 days before trip',
                gameText:'Daily record of 20,000 Covid cases reported…cases are rising rapidly at a rate higher than ever and new strand is highly contagious… Your family / friends / peers questions you and ask are you still going or trip? Gives their opinions like you shouldn’t go or that place can wait… One of your travelers were unvaccinated and tested positive so now they can’t attend … You take all this into consideration and make a decision…',
                question:'Do you wish to continue on your trip or cancel?',
                decision1:'I’ll take proper precautions de-stress and enjoy my long awaited vacay',
                decision2:'Maybe they are right I’ll just go some other time err on the side of caution',
                        image:'',
                    },
            Travel: {
                id:8,
                header:'Be happy with your decision… Let’s enjoy',
                gameText:'',
                question:'',
                decision1:'Continue',
                decision2:'Give up',
                        image:'',
                    },
            ChangeToEntryRules: {
                id:9,
                header:' Uh-oh...2 Days before trip, Hawaii changes entry rules',
                gameText:'It’s ok… mandatory quarantine has just been shorten to five days instead of ten days',
                question:'',
                decision1:'What a relief!',
                decision2:'Call it quits',
                        image:'',
                    },
            TravelDay: {
                id:10,
                header:'Travel Dayyyyy!!!!! Finally relaxation here I come! Or…',
                gameText:'',
                question:'',
                decision1:'Next',
                decision2:'I have had enough',
                        image:'',
                    },
            AirportArrival: {
                id:11,
                header:'Airport Arrrival',
                gameText:'Add boarding pass from airline app or go to kiosk and collect boarding pass or both',
                question:'',
                decision1:'Check-in bags',
                decision2:'Has anxiety and gives up',
                        image:'',
                    },
            AiportSecurity: {
                id:12,
                header:'Now it’s time to go through airport security….  ',
                gameText:'You get to airport security and after they hold you for 30 minutes you head to your ticket gate',
                question:'',
                decision1:'Head to gate',
                decision2:'After 25 minutes of waiting you threw a fit and got kicked out of airport',
                        image:'',
                    },
            Delays: {
                id:13,
                header:'Delays',
                gameText:'You board your first plane and there is a delay of 3.5 hours… You finally arrive and only have 20 minutes before boarding time on your next flight.',
                question:'Do you try to run to make it to next flight or Give up and wait til next flight (one day later)? *if connecting in hawaii you have to go through and show green exempt QR*',
                decision1:'Run as fast as you can through airport',
                decision2:'Lose a day of trip and wait it out',
                        image:'',
                    },
            YouMadeIt: {
                id:14,
                header:'You Made itttt !! But….',
                gameText:'You are asked to present QR code to enter Hawaii… something goes wrong…The QR is yellow and not green.. It has to be green before you are able to enter. ',
                question:'Do you troubleshoot yourself or Ask for help before you lose your mind',
                decision1:'Try to solve problem',
                decision2:'Ask for help',
                        image:'',
                    },
            MissFlight: {
                id:15,
                header:'You only lost one day..',
                gameText:' As you wait for next flight you see bulletin board change to 1000 cancelled flights in a flash of a second…',
                question:'',
                decision1:'You panic what does this mean for me, will my flight be next',
                decision2:'You keep calm and wait for what is to come.',
                        image:'',
                    },
            YouShowedThem: {
                id:16,
                header:'You showed them…',
                gameText:'',
                question:'It’s time to run again or forget about it you’re too out of breathe. Five minutes until your flight boarding doors close. Do you give it all you got and head to your gate or let all the hustle and bustle be for nothing and miss flight / lose day?',
                decision1:'I’m getting on that plane by any means',
                decision2:'Let’s just call it quits no way I’m making it',
                        image:'',
                    },
            FinallyRelaxation: {
                id:17,
                header:'Finally Relaxation',
                gameText:'',
                question:'',
                decision1:'Next',
                decision2:'Enough',
                        image:'',
                    },
            Activities: {
                id:18,
                header:'Activities',
                gameText:'Let’s have some fun in the sun!',
                question:'',
                decision1:' Snorkel,  Submarine Ride,  Beach, & Luau',
                decision2:'Not feeling Hawaii and would like to go home',
                        image:'',
                    },
            Return: {
                id:19,
                header:'That was some trip...Time to head home',
                gameText:'You made it through stressed, panicked, and everything else that happened.',
                question:'Would you say it was all worth it or Nah not enough for what I went through',
                decision1:'It was definitely worth it',
                decision2:'Really was not worth the struggle',
                        image:'',
                    },
            ThanksForPlaying: {
                id:20,
                header:'Thanks for playing Hawaiian Escape During Covid-19',
                gameText:'',
                question:'',
                decision1:'',
                decision2:'',
                image:'',
                    },
                    
                }
                
                this.sceneKeys = Object.keys(this.scene);
                this.counter = 0;
        }

init(){
    this.sceneStart()
    this.addNextScene();
}

sceneStart() { 
    let startButton = document.getElementById('startButton');
    let gamePage = document.getElementById('gamePage');
    let startGameSection = document.getElementById('startGame');
    startButton.addEventListener('click', () => {
        startGameSection.classList.add('d-none')
        gamePage.classList.remove('d-none')
        console.log('click')
    })
}

increment(){
    if(this.counter == this.sceneKeys.length - 1)
    {
        this.counter = 0;
        return;
    }
    this.counter = this.counter + 1;
}

//fuction for scenes with skips in between them. Sets the counter and in turn the scene to the specified number
alternatePage(){
    if(this.counter == 13){ //when counter is 15 (continue below)
        this.counter = 15; //set counter to 17--the add scene function will run next and counter will be 17 so scene 17 will be displayed
    } else if(this.counter == 14){
        this.counter = 16;
    } { //if (this.counter == 13)
        // this.counter = 14; //14 instead of 15 because this last number keeps incrementing and going to the next page-so 14 goes to page 15 and 15 would go to page 16 
    };
}

backtohome(){
    this.counter = 0;
    let gamePage = document.getElementById('gamePage');
    let startGameSection = document.getElementById('startGame');
    startGameSection.classList.remove('d-none')
    gamePage.classList.add('d-none')
}

//test
async addNextScene() {
    const index = this.counter;
    const key = this.sceneKeys[index]; 
    let gamePage = document.getElementById('gamePage');
    removeAllChildNodes(gamePage);
        const sceneItem = this.scene[key];
        const header = document.createElement('div');
        //conditional to change between buttons that require scenes to skip slides and those that dont require skips
        if(this.scene[key].id == 13){ //if the scene id or if counter is 13 then show this on the page with the alternate page for the function
            header.innerHTML = `
                <h1>${sceneItem.header}</h1>
                <p id="gameText">${sceneItem.gameText}</p>
                <p id="question">${sceneItem.question}</p>
                <div class="buttons" id="buttons">
                <!-- Game Decision buttons -->
                <button class="button" id="buttonChoice" onclick="increment()">${sceneItem.decision1}</button>
                <button class="button" id="buttonChoice2" onclick="alternatePage()">${sceneItem.decision2}</button> 
                </div>
                </div>
                `;
        } else if (this.scene[key].id == 14){  //f the scene id or counter is 14 then show this on the page with the alternate page for the function
            header.innerHTML = `
                <h1>${sceneItem.header}</h1>
                <p id="gameText">${sceneItem.gameText}</p>
                <p id="question">${sceneItem.question}</p>
                <div class="buttons" id="buttons">
                <!-- Game Decision buttons -->
                <button class="button" id="buttonChoice" onclick="increment()">${sceneItem.decision1}</button>
                <button class="button" id="buttonChoice2" onclick="alternatePage()">${sceneItem.decision2}</button> 
                </div>
                </div>
                `;
        } else if (this.scene[key].id == 15){ //if the scene id or counter is 15 then show this on the page with the alternate page for the function
            header.innerHTML = `
                <h1>${sceneItem.header}</h1>
                <p id="gameText">${sceneItem.gameText}</p>
                <p id="question">${sceneItem.question}</p>
                <div class="buttons" id="buttons">
                <!-- Game Decision buttons -->
                <button class="button" id="buttonChoice" onclick="alternatePage()">${sceneItem.decision1}</button>
                <button class="button" id="buttonChoice2" onclick="alternatePage()">${sceneItem.decision2}</button>  
                </div>
                </div>
                `;
        } else { //if the scene id counter is not 13 then show this on the page with the back to home for the function
            header.innerHTML = `
                <h1>${sceneItem.header}</h1>
                <p id="gameText">${sceneItem.gameText}</p>
                <p id="question">${sceneItem.question}</p>
                <div class="buttons" id="buttons">
                <!-- Game Decision buttons -->
                <button class="button" id="buttonChoice" onclick="increment()">${sceneItem.decision1}</button>
                <button class="button" id="buttonChoice2" onclick="backtohome()">${sceneItem.decision2}</button> 
                </div>
                </div>
        `;
        }
        
    gamePage.appendChild(header);
    console.log(this.scene[key]);
    console.log(this.scene[key].id);
}

}

let action = new Game(); // instance | object - comment //
action.init()
function increment(){
    action.increment();
    action.init();
}

function alternatePage(){
    action.alternatePage();
    action.init();
}
function backtohome() {
    action.backtohome();
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

