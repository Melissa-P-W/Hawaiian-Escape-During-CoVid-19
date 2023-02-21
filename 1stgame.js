//scenes//

// let scene = {
// get input from HTML to store input into objects to create scenes//
class Game {
    constructor() {
        
    // HomePage: {
    //     id:1,
    //     header:'Welcome to Hawaiian Escape During CoVid-19',
    //     gameText:'Ready To Build That Vitamin Sea! ',
    //     question:'',
        
    //     // options: [
    //     //     {
    //     //         decision:'Click To Start Your Journey',
    //     //         nextScene:'', 
    //     //     }
    //     //         ],
    //             image:'',
    //         },
    this.scene = {
    planningTrip: {
        id:1,
        header:'Planning Your Trip',
        gameText:'Planning a trip during covid-19 can be stressful, nerve-wrecking, and just make you want to quit and not attempt to travel. Not so fun eh? But… the outcome will be worth it trust me!',
        question:'Want to travel during the Pandemic or stay home and be depressed?',
        decision1:'Travel',
        decision2:'Stay home',
        // options: [
        //     {
        //         decision:'Travel',
        //         nextScene:'Yay you chose to travel', 
        //     },
        //     {
        //         decision:'Stay home',
        //         nextScene:'Seriously?... You chose to stay home.',
        //     }
        //         ],
                image:'',
            },
    // Seriously: {
    //     id:2,
    //     header:'Seriously?... You chose to stay home. Hate to see you go.',
    //     gameText:'Guess you can still enjoy Hawaii from the comfort of your couch through the tv!',
    //     question:'',
    //     decision1:'',
    //     decision2:'',
    //     // options: [
    //     //     {
    //     //         decision:'',
    //     //         nextScene:'Thanks for playing',
    //     //     },
    //     //     {
    //     //         decision:'',
    //     //         nextScene:'',
    //     //     }
    //     //         ],
    //             image:'',
    //         },
    TravelTime: {
        id:2,
        header:'Time to head to the Island of Hawaii',
        gameText:'Are you ready?',
        question:'',
        decision1:'Head there',
        decision2:'Changed my mind',
        // options: [
        //     {
        //         decision:'Maui',
        //         nextScene:'Great! Now Let’s Choose A Budget',
        //     },
        //     {
        //         decision:'Island of Hawaii',
        //         nextScene:'Great! Now Let’s Choose A Budget',
        //     }
        //         ],
                image:'',
            },
            // ChoosingBudget: {
            //     id:4,
            //     header:'Great! Now Let’s Choose A Budget',
            //     gameText:'Choose a budget',
            //     question:'',
            //     decision1:'$1300-$2200',
            //     // decision2:'$2200-$3000',
                // options: [
                //     {
                //         decision:'$1000-$1500',
                //         nextScene:'Lets Get Started',
                //     },
                //     {
                //         decision:'$1500-$2200',
                //         nextScene:'Lets Get Started',
                //     },
                //     {
                //         decision:'$2200-$3000+',
                //         nextScene:'Lets Get Started',
                //     },
                //     {
                //         decision:'NVM I think I will catch Hawaii through the tv',
                //         nextScene:'Thanks for playing',
                //     }
                //         ],
                    //     image:'',
                    // },
                    
            // LetsGetStarted: {
            //     id:5,
            //     header:'Lets Get Started',
            //     gameText:'How many travelers?',
            //     question:'',
            //     decision1:'',
            //     decision2:'',
            //     // options: [
            //     //     {
            //     //         decision:'1-2',
            //     //         nextScene:'',
            //     //     },
            //     //     {
            //     //         decision:'2-4',
            //     //         nextScene:'',
            //     //     },
            //     //     {
            //     //         decision:'5-7',
            //     //         nextScene:'',
            //     //     },
            //     //     {
            //     //         decision:'8+',
            //     //         nextScene:'',
            //     //     }
            //     //         ],
            //             image:'',
            //         },
                    
                // LetsGetStarted: {
                // id:4,
                // header:'Lets Get Started! Here Are Some Packages Along With Quotes.',
                // gameText:'Let me know which package you choose or if you change your mind! As always thanks for choosing  Hawaii Getaway Vacations!',
                // question:' Select a option below or Nah I’ll stay home not impressed',
                // decision1:'Package 1',
                // decision2:'Package 2',
                // // options: [
                // //     {
                // //         decision:'Package 1',
                // //         nextScene:'Congratulations',
                // //     },
                // //     {
                // //         decision:'Package 2',
                // //         nextScene:'Congratulations',
                // //     },
                // //     {
                // //         decision:'Package 3',
                // //         nextScene:'Congratulations',
                // //     },
                // //     {
                // //         decision:'Nah I will stay home not impressed',
                // //         nextScene:'Thanks for playing',
                // //     }
                // //         ],
                //         image:'',
                //     },

            Congratulations: {
                id:3,
                header:'Congratulations! You’re all booked… Now it’s time to Prepare',
                gameText:'Hawaii has a strictly enforced policy for entry onto the island due to the covid-19 pandemic. With Mandatory quarantine policies in effect. In order to be allowed entry to Hawaii you must sign up for Hawaii safe travels account. If you are Fully vaccinated you will be exempt from quarantine. ( To be considered fully vaccinated you have to have 2 shots  and booster shot)                                                                 If you are Unvaccinated you will have to get tested no earlier than 72 hours before your last flight into Hawaii and must be from a hawaii approved trusted testing site.',
                question:'',
                decision1:'Continue',
                decision2:'This is seeming a bit too much for me...',
                // options: [
                //     {
                //         decision:'Continue',
                //         nextScene:'Yay',
                //     },
                //     {
                //         decision:'This is seeming a bit too much for me...',
                //         nextScene:'Thanks for playing',
                //     }
                //         ],
                        image:'',
                    },
            VaccinationStatus: {
                id:4,
                header:'Yay you chose to continue! Now are Fully Vaccinated or Unvaccinated',
                gameText:'Check one',
                question:'',
                decision1:'Fully Vaccinated',
                decision2:'Unvaccinated',
                // options: [
                //     {
                //         decision:' Fully Vaccinated (3 shots or less than 6 months from last shot)',
                //         nextScene:'Hawaii Safe Travel',
                //     },
                //     {
                //         decision:'Unvaccinated ',
                //         nextScene:'Hawaii Safe Travel',
                //     }
                //         ],
                        image:'',
                    },
            HawaiiSafeTravel: {
                id:5,
                header:'Hawaii Safe Travel',
                gameText:'Upload information to be verified to hawaii safe travels to get QR code https://travel.hawaii.gov/#/',
                question:'',
                decision1:'I’m finished with safe travels',
                decision2:'This is overwhelming I give up',
                // options: [
                //     {
                //         decision:'I’m finished with safe travels',
                //         nextScene:'Finally',
                //     },
                //     {
                //         decision:'this is overwhelming I give up',
                //         nextScene:'Thanks for playing',
                //     }
                //         ],
                        image:'',
                    },
            Finally: {
                id:6,
                header:'Finally you survived that… ! Now time to pack for the trip',
                gameText:'Choose clothes to pack                                      Tip: Luggage over 50lbs cause for extra fees',
                question:'',
                decision1:'All packed',
                decision2:'I will purchase everything I need upon arrival',
                // options: [
                //     {
                //         decision:'All packed',
                //         nextScene:'Itinerary Planning',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'',
                //     }
                //         ],
                        image:'',
                    },
            // ItineraryPlanning: {
            //     id:9,
            //     header:'What would you like to do on this trip?',
            //     gameText:'',
            //     question:'',
            //     decision1:' Snorkel,  Submarine Ride,  Beach, & Luau',
            //     decision2:'Parasail,  Lava Tube,  Beach, & Chocolate Tasting',
            //     // options: [
            //     //     {
            //     //         decision:'Snorkel, Submarine ride, Go to Beach (black or white sand), Luau ,Road Trip, Mountain, Volcano, Chocolate Tasting, Farmer’s Market',
            //     //         nextScene:'Breaking News',
            //     //     },
            //     //     {
            //     //         decision:'Random Pick',
            //     //         nextScene:'Breaking News',
            //     //     }
            //     //         ],
            //             image:'',
            //         },
            BreakingNews: {
                id:7,
                header:'Breaking News… 8 days before trip',
                gameText:'Daily record of 20,000 Covid cases reported…cases are rising rapidly at a rate higher than ever and new strand is highly contagious… Your family / friends / peers questions you and ask are you still going or trip? Gives their opinions like you shouldn’t go or that place can wait… One of your travelers were unvaccinated and tested positive so now they can’t attend … You take all this into consideration and make a decision…',
                question:'Do you wish to continue on your trip or cancel?',
                decision1:'I’ll take proper precautions de-stress and enjoy my long awaited vacay',
                decision2:'Maybe they are right I’ll just go some other time err on the side of caution',
                // options: [
                //     {
                //         decision:'Covid-19 is everywhere I can get sick right here at home i’ll take proper precautions de-stress and enjoy my long awaited vacay besides who knows if i’ll have another opportunity',
                //         nextScene:'Yay you chose to travel',
                //     },
                //     {
                //         decision:'Maybe they are right i’ll just go some other time err on the side of caution',
                //         nextScene:'You chose to cancel',
                //     }
                //         ],
                        image:'',
                    },
            // CancelTrip: {
            //     id:9,
            //     header:'You chose to cancel… cries',
            //     gameText:'Loses money and cries and gets covid two days after cancelling',
            //     question:'Poor you better luck next time...',
            //     decision1:'',
            //     decision2:'',
            //     // options: [
            //     //     {
            //     //         decision:'',
            //     //         nextScene:'Thanks for playing',
            //     //     },
            //     //     {
            //     //         decision:'',
            //     //         nextScene:'',
            //     //     }
            //     //         ],
            //             image:'',
            //         },
            Travel: {
                id:8,
                header:'Be happy with your decision… Let’s enjoy',
                gameText:'',
                question:'',
                decision1:'Continue',
                decision2:'',
                // options: [
                //     {
                //         decision:'Continue',
                //         nextScene:'2 Days before trip Hawaii changes entry rules',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'',
                //     }
                //         ],
                        image:'',
                    },
            ChangeToEntryRules: {
                id:9,
                header:' Uh-oh...2 Days before trip, Hawaii changes entry rules',
                gameText:'It’s ok… mandatory quarantine has just been shorten to five days instead of ten days',
                question:'',
                decision1:'What a relief!',
                // decision2:'Wasn’t worried just taking it a day at a time',
                // options: [
                //     {
                //         decision:'Whew almost had a heart attack ',
                //         nextScene:'Trave Day',
                //     },
                //     {
                //         decision:'wasn’t worried just taking it a day at a time',
                //         nextScene:'Travel Day',
                //     }
                //         ],
                        image:'',
                    },
            TravelDay: {
                id:10,
                header:'Travel Dayyyyy!!!!! Finally relaxation here I come! Or…',
                gameText:'',
                question:'',
                decision1:'Next',
                // decision2:'',
                // options: [
                //     {
                //         decision:'Next',
                //         nextScene:'Airport',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'',
                //     }
                //         ],
                        image:'',
                    },
            AirportArrival: {
                id:11,
                header:'Airport Arrrival',
                gameText:'Add boarding pass from airline app or go to kiosk and collect boarding pass or both',
                question:'',
                decision1:'Check-in bags',
                decision2:'',
                // options: [
                //     {
                //         decision:'Check-in bags',
                //         nextScene:'Airport Security',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'',
                //     }
                //         ],
                        image:'',
                    },
            AiportSecurity: {
                id:12,
                header:'Now it’s time to go through airport security….  ',
                gameText:'You get to airport security and after they hold you for 30 minutes you head to your ticket gate',
                question:'',
                decision1:'Head to gate',
                decision2:'After 25 minutes of waiting you threw a fit and got kicked out of airport',
                // options: [
                //     {
                //         decision:'Head to gate',
                //         nextScene:'Delays',
                //     },
                //     {
                //         decision:'after 25 minutes of waiting you threw a fit and got kicked out of airport',
                //         nextScene:'Thanks for Playing',
                //     }
                //         ],
                        image:'',
                    },
            Delays: {
                id:13,
                header:'Delays',
                gameText:'You board your first plane and there is a delay of 3.5 hours… You finally arrive and only have 20 minutes before boarding time on your next flight.',
                question:'Do you try to run to make it to next flight or Give up and wait til next flight (one day later)? *if connecting in hawaii you have to go through and show green exempt QR*',
                decision1:'Run as fast as you can through airport',
                decision2:'Lose a day of trip and wait it out',
                // options: [
                //     {
                //         decision:'Run as fast as you can through airport',
                //         nextScene:'you made it',
                //     },
                //     {
                //         decision:'Lose a day of trip and wait it out',
                //         nextScene:'you chose to miss',
                //     }
                //         ],
                        image:'',
                    },
            YouMadeIt: {
                id:14,
                header:'You Made itttt !! But….',
                gameText:'You are asked to present QR code to enter Hawaii… something goes wrong…The QR is yellow and not green.. It has to be green before you are able to enter. ',
                question:'Do you troubleshoot yourself or Ask for help before you lose your mind',
                decision1:'Try to solve problem',
                decision2:'Ask for help',
                // options: [
                //     {
                //         decision:'Try to solve problem',
                //         nextScene:'You showed them',
                //     },
                //     {
                //         decision:'Ask for help',
                //         nextScene:'You showed them',
                //     }
                //         ],
                        image:'',
                    },
            MissFlight: {
                id:15,
                header:'You only lost one day..',
                gameText:' As you wait for next flight you see bulletin board change to 1000 cancelled flights in a flash of a second…',
                question:'',
                decision1:'You panic what does this mean for me, will my flight be next',
                decision2:'You keep calm and wait for what is to come.',
                // options: [
                //     {
                //         decision:'You panic what does this mean for me, will my flight be next',
                //         nextScene:'Time to Board',
                //     },
                //     {
                //         decision:'You keep calm and wait for what is to come.',
                //         nextScene:'Time to Board',
                //     }
                //         ],
                        image:'',
                    },
            // TimeToBoard: {
            //     id:21,
            //     header:'You call to contact accommodation while plane is continuing to board to discuss your late check in and they tell you there will be a fee',
            //     gameText:'',
            //     question:'',
            //     decision1:'Get upset and say we will discuss upon my arrival',
            //     decision2:'Pay fee and stay stress free',
            //     // options: [
            //     //     {
            //     //         decision:'Get upset and say we will discuss upon my arrival',
            //     //         nextScene:'Finally',
            //     //     },
            //     //     {
            //     //         decision:'Pay fee and stay stress free',
            //     //         nextScene:'Finally',
            //     //     }
            //     //         ],
            //             image:'',
            //         },
            YouShowedThem: {
                id:16,
                header:'You showed them…',
                gameText:'',
                question:'It’s time to run again or forget about it you’re too out of breathe. Five minutes until your flight boarding doors close. Do you give it all you got and head to your gate or let all the hustle and bustle be for nothing and miss flight / lose day?',
                decision1:'I’m getting on that plane by any means',
                decision2:'Let’s just call it quits no way I’m making it',
                // options: [
                //     {
                //         decision:'I’m getting on that plane by any means ',
                //         nextScene:'Finally Relaxation',
                //     },
                //     {
                //         decision:'let’s just call it quits no way I’m making it',
                //         nextScene:'Miss Flight',
                //     }
                //         ],
                        image:'',
                    },
            FinallyRelaxation: {
                id:17,
                header:'Finally Relaxation',
                gameText:'',
                question:'',
                decision1:'Next',
                decision2:'',
                // options: [
                //     {
                //         decision:'Next',
                //         nextScene:'Activities',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'',
                //     }
                //         ],
                        image:'',
                    },
            Activities: {
                id:18,
                header:'Activities',
                gameText:'Let’s keep it flexible opportunity to choose Ititernary Again!',
                question:'',
                decision1:' Snorkel,  Submarine Ride,  Beach, & Luau',
                decision2:'Parasail,  Lava Tube,  Beach, & Chocolate Tasting',
                // options: [
                //     {
                //         decision:'',
                //         nextScene:'That was fun',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'That was fun',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'That was fun',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'That was fun',
                //     }
                //         ],
                        image:'',
                    },
            // ThatWasFun: {
            //     id:26,
            //     header:'That was fun… Now time to choose next event (loop until their 4 choices are done)',
            //     gameText:'',
            //     question:'',
            //     decision1:'',
            //     decision2:'',
            //     // options: [
            //     //     {
            //     //         decision:'Next Activity',
            //     //         nextScene:'That was fun',
            //     //     },
            //     //     {
            //     //         decision:'I had enough fun and to tired for anything else',
            //     //         nextScene:'Return',
            //     //     }
            //     //         ],
            //             image:'',
            //         },
            Return: {
                id:19,
                header:'That was some trip...Time to head home',
                gameText:'You made it through stressed, panicked, and everything else that happened.',
                question:'Would you say it was all worth it or Nah not enough for what I went through',
                decision1:'It was definitely worth it',
                decision2:'Really was not worth the struggle',
                // options: [
                //     {
                //         decision:'It was definitely worth it',
                //         nextScene:'Thanks for playing',
                //     },
                //     {
                //         decision:'Nah it really was not worth the struggle',
                //         nextScene:'Thanks for playing',
                //     }
                //         ],
                        image:'',
                    },
            ThanksForPlaying: {
                id:20,
                header:'Thanks for playing Hawaiian Escape During Covid-19',
                gameText:'',
                question:'',
                decision1:'',
                decision2:'',
                // options: [
                //     {
                //         decision:'',
                //         nextScene:'',
                //     },
                //     {
                //         decision:'',
                //         nextScene:'',
                //     }
                //         ],
                image:'',
                    },
                    
                }
//
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


backtohome(){
    this.counter = 0;
    let gamePage = document.getElementById('gamePage');
    let startGameSection = document.getElementById('startGame');
    startGameSection.classList.remove('d-none')
    gamePage.classList.add('d-none')
}



async addNextScene() {
    const index = this.counter;
    const key = this.sceneKeys[index]; 
    let gamePage = document.getElementById('gamePage');
    removeAllChildNodes(gamePage);
        const sceneItem = this.scene[key];
        const header = document.createElement('div');
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
    gamePage.appendChild(header);
    
        // <img src="${sceneItem.image}"> 
}

}

let action = new Game(); // instance | object - comment //
action.init()
function increment(){
    action.increment();
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

// const navButton2 =  document.getElementById('buttonChoice2');
// navButton2.addEventListener('click', () => {
//     this.increment();
// })

// gamePage.appendChild(header);
// button.addEventListener('click', () => {
    // sceneNumber++;
    // console.log(sceneNumber);
    // const navButton =  document.getElementById('buttonChoice');
    // navButton.addEventListener('click', () => {
    //     this.increment();
    // })
// console.log('buttonClick')

// console.log('nextscene');
// let gamePage = document.getElementById('gamePage');
// let gamePageSection = document.getElementsById('gamePage')
// button.innerHTML = decision1;
// button.classList.add('button')

//console.log(sceneNumber);
//console.log('scene' + sceneItem.id);

// officialStart(){
    // let button = document.getElementsByName
    // for (sceneItem i=0;)
    // }
    
    //use const for game because it stay the same throughout code//
    //creating element//
    
    //look at button and see if i cna mae it work 
    //need something that says when scence item is equal to 1 
    //if variable i is = equal to 0 target specifically or loop
    
    
    // gameText.innerHTML = ``;
    // console.log(gameText);
    // gamePage.appendChild(gameText);
    
    //     let button = document.createElement('button');
    //     button.innerText = sceneItem[nextScene].options.decision;
    //     button.value =sceneNumber;
    //     gamePage.appendChild(button);
    
    //     button.addEventListener('click', () => {
        //         game.innerHTML = '';
        //         sceneNumber++;
        //         addNextScene(buttonValue);
        //     })
        // }
        // game.appendChild(gamePage);
    
    
    //  <p>${sceneItem.gameText}</p>//
    // var header = document.getElementById("header");
    // var storyline = document.getElementById("secondHeader");
    // var gameText = document.getElementById("gameText")
    // var button1 = document.getElementById("button1")
    
    
    // //Welcome Page//
    // firstHeader.innerHTML = "Welcome to Hawaiian Escape During CoVid-19";
    // secondHeader.innerHTML = "Your Adventure Awaits";
    // button1.innerHTML = "Click to start your journey";
    // // button1.addEventListener("click", planTrip);
    // //initialize button//
// //listen for clicks on the button//
// //create function to go to the next scene when button is clicked//
// function goToNextScene()
//     console.log ("button was clicked")
