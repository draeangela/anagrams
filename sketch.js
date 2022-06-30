//List of different sets of letters
var jumbledLetters = ["ASTELR", "KPIRES", "DTAERS", "AVREEL", "ETOMPS", "TAESLT"];

//List of valid words
var validWords = [
  ["ALERTS","ALTERS","ARTERL","ESTRAL","LASTER","LATERS", "RATELS", "SALTER", "SLATER", "STALER", "STELAR", "TALERS", "ALERT", "ALTER", "ARLES", "ARTEL", "ASTER", "EARLS", "LARES", "LASER", "LATER", "LATES", "LEARS", "LEAST", "LEATS", "RALES", "RATEL", "RATES", "REALS", "RESAT", "SERAL", "SETAL", "SLATE", "STARE", "STEAL", "STELA", "TAELS", "TALER", "TALES", "TARES", "TARSE", "TASER", "TEALS", "TEARS", "TESLA", "ALES", "ALTS", "ARSE", "ARTS", "ATES", "EARL", "EARS", "EAST", "EATS", "ERAS", "ERAT", "ERST", "ETAS", "LARS", "LASE", "LAST", "LATE", "LATS", "LEAR", "LEAS", "LEAT", "LEST","LETS","RALE", "RASE", "RATE", "RATS", "REAL", "REAL", "REST", "RETS", "SALE", "SALT", "SATE", "SEAL", "SEAR", "SEAT", "SERA", "SETA", "SLAT", "STAR", "TAEL", "TALE", "TALS", "TARE", "TARS", "TASE", "TEAL", "TEAR", "TELA", "TELS", "TAES", "TSAR", "AES", "ALE", "ALS", "ALT", "ARE", "ARS","ART","ATE","ATS","EAR","EAT","ELS","ERA","ERS","ETA","LAR","LAS","LAT","LEA","LET","RAS","RAT","REA","RES","RET","SAE","SAL","SAT","SEA","SEL","SER","SET","TAE","TAL","TAR","TAS","TEA","TEL","TRA"],
  
  ["PIKERS", "SPIKER", "SKIERS", "KEIRS", "PIERS", "PIKER", "PIKES", "PRISE", "RIPES", "SIKER", "SKIER", "SPIER", "SPIKE", "SPIRE", "IRKS", "KEPS", "PERK", "PERKS", "PISE", "RIPE", "REPS", "RISE", "RIPS", "RISK", "SIKE", "SKIP","KIP", "IRK", "KEP", "PIKE", "PER", "PIE", "PIES","PRE", "REP", "RES", "RIP", "SIP", "SKI", "PIER"],
  
  ["ADRETS", "DATERS", "DERATS", "DRAE", "STARED", "TRADES", "TREADS", "ADRET", "ASTER", "DARES", "DARTS", "DATER", "DATES", "DEARS", "DERAT", "DRATS", "DREST", "RASED", "RATED", "RATES", "READS", "RESAT", "SATED", "STADE", "STARE", "STEAD", "TARED", "TARES", "TARSE", "TASED", "TASER", "TEARS", "TRADE", "TREAD", "ARES", "ARSE", "TAES", "ARTE", "ARTS", "ATES", "DARE", "DART", "DATE", "DEAR", "DRAT", "EARS", "EATS", "ERAS", "ERAT", "ETAS", "RADS", "RASE", "RATE", "RATS", "READ", "REDS", "REST", "RETS", "SADE", "SARD", "SATE", "SEAR", "SEAT", "SERA", "SETA", "STAR", "STARS", "TADS", "TARE", "TARS", "TASE", "TEAR", "TEAS", "TEDS", "TRAD", "TSAR", "ADS", "AES", "ARE", "ARS", "ART", "ATE", "ATS", "DER", "EAR", "EAT", "ERA", "ERS", "ETA", "RAD", "RAS", "RAT", "REA", "RED", "RES", "RET", "SAD", "SAE", "SAT", "SEA", "SER", "SET", "TAD", "TAE", "TAR", "TAS", "TEA", "TED" ],
  
  ["LAVEER", "LEAVER", "REVEAL","VEALER", "ELVER", "LAREE", "LAVER", "LEAVE", "LEVER", "RAVEL", "REAVE", "RAVEL", "REAVE", "REVAL", "VELAR", "ALEE", "AVER", "EARL", "EAVE", "EVER", "LAVE", "LEAR", "LEER", "LEVA", "LEVE", "RALE", "VERA", "RAVE", "REAL", "REEL", "VALE", "VEAL", "VEER", "VELA", "ALE", "ARE", "AVE", "EAR", "EEL", "EER", "ERA", "ERE", "EVE", "LAR", "LAV", "LEA", "LEE", "LEV", "RAV", "REA", "REE", "REV", "VAR", "VEE"],
  
  ["TEMPOS", "ESTOP", "MOPES", "MOSTE", "MOTES", "PESTO", "POEMS", "POETS", "POMES", "POSTE", "SMOTE", "STOMP", "STOPE", "TEMPO", "TEMPS", "TOMES", "TOPES", "EMOS", "EPOS", "MOPE", "MOPS", "MOST", "MOTE", "MOTES", "MOTS", "OPES", "OPTS", "PESO", "PEST", "PETS", "POEM", "POET", "POME", "POMS", "POSE", "POST", "POTS", "SEPT", "SOME", "SPOT", "STEM", "STEP", "STOP", "TEMP", "TOES", "TOME", "TOMS", "TOPE", "TOPS", "EMO", "EMS", "MET", "MOP", "MOS", "MOT", "OES", "OMS", "OPE", "OPS", "OPT", "OSE", "PES", "PET", "POM", "POS", "POT", "SET", "SOM", "SOP", "SOT", "TEM", "TOE", "TOM", "TOP"],
  
  ["LATEST", "LATTES", "LATES", "LATTE", "LEAST", "SETAL", "SLATE", "SLATT", "STEAL", "TALES", "TASTE", "TATES", "TEALS", "TEATS", "TESLA", "ALE", "ALTS", "ATES", "EAST", "ETAS", "ETAT", "EATS", "LASE", "LAST", "LATE", "LATS", "LEAS", "LEAT", "LEST", "LETS", "SALE", "SALT", "SATE", "TAES", "SEAL", "SEAT", "SLAT", "STAT", "STET", "TALE", "TALS", "TASE", "TATE", "TATS", "TEAL", "TEAS", "TEAT", "TEST", "TETS", "ALE", "ALS", "ALT", "ATE", "ATS", "ATT", "EAT", "ETA", "LAS", "LAT", "LEA", "LET", "SAE", "SAL", "SAT", "SEA", "SET", "TAE", "TAL", "TAS", "TAT", "TEA", "TEL", "TET"]
];

//Used words will be added here
var usedWords = [];


//Fonts
//Source: https://fonts.google.com/
var titanOne;
var rubik;
var firaSans;
//Sounds
//Source: https://mixkit.co/free-sound-effects/bell/
var correctSound;//"Happy bell alert"
var wrongSound;//"Cowbell sharp hit"
var endSound;// "Discrete door bell announcement"

//Keeps track of points
var points = 0;
var pointSystem = [100, 500, 1000, 2000]; //Possible points earned per word length
//Index for a set of letters in jumbledLetters 
var setNum = Math.floor(Math.random()*jumbledLetters.length);
//1 minute timer while game is being played
var timer = 60;
//Which screen is displayed?
var screen = "intro";
//Letters will be added to this to create a word after its key is pressed
wordGuess = "";
//Message displayed after word input
var messageToDisplay = "";

//Load fonts and sounds
function preload(){
  titanOne = loadFont('TitanOne-Regular.ttf');
  rubik = loadFont('Rubik-Medium.ttf');
  firaSans = loadFont('FiraSans-Medium.ttf');
  
  correctSound = loadSound('mixkit-happy-bell-alert-601.mp3');
  wrongSound = loadSound('mixkit-cowbell-sharp-hit-1743 (1).mp3'); 
  endSound = loadSound ('mixkit-discrete-door-bell-announcement-225.mp3');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240, 230, 239);
  //Display different screens
  if (screen=="intro"){
    displayIntro();
  } else if (screen=="gameboard"){
    displayGameboard(setNum,messageToDisplay);
  } else if (screen=="gameOver"){
    displayGameOver();
  }

}
//Display heading
function heading(){
  fill (255,255,255);
  stroke(156, 137, 184);
  strokeWeight(5);
  textFont(titanOne);
  textSize(40);
  textAlign (CENTER,CENTER);
  text("ANAGRAMS",width/2,height/7.5);
}

//Display subheading
function subheading (subtitle){
  fill (195, 177, 222);
  noStroke();
  textSize(20);
  textFont(rubik);
  text (subtitle, width/2, height/4.5); 
}

//Draw intro screen
function displayIntro (){
  heading();
  subheading ("HOW TO PLAY");
  
  //Display instructions in box
  fill (255,255,255);
  stroke(195, 177, 222);
  strokeWeight(3);
  rect (50, 120, 500, 250,20);
  
  fill (61, 61, 61);
  noStroke();
  textFont (firaSans);
  textSize (15);
  text ("1. Use the 6 letters given to create as many words as",width-300, height-230);
  text ("possible in 60 seconds.", width-400, height-200);
  
  text ("2. Press ENTER to submit a word.", width-370, height-150);
  
  textSize(20);
  fill(116, 99, 143);
  text ("CLICK anywhere to begin.", width/2,height-75);
  
}

//Draw gameboard screen
function displayGameboard (letterIndex, displayMessage){
  var space = (width-(65*6))/7 //space in between the boxes
  var boxXPos = space;
  var boxLength = 65;
  
  heading();
  
  //Display boxes with letters
  for (var a=0; a<6; a++)  {
    noStroke();
    fill (255,255,255);
    square (boxXPos,height/3,boxLength,10 ); //top boxes
    square (boxXPos,height*3/5,boxLength,20 ); //bottom boxes
    
    //Display each letter in each box 
    fill (173, 153, 204);
    text(split(jumbledLetters[setNum], "")[a],boxXPos+boxLength/2,height*3/5+boxLength/2);
    
    //Display guess word
    fill (134, 114, 163);
    if (wordGuess.length>a){
      text(split(wordGuess,"")[a],boxXPos+boxLength/2,height/3+boxLength/2);
    }
     boxXPos+=65 + space;
  }
  
  //Display points
  textSize(25);
  textFont(rubik);
  fill (195, 177, 222);
  text ("SCORE: " + points, 500, height/4.3);
  
  //Display message
  textSize(25);
  text(displayMessage, width/2, height-70);
  
  //Display timer
  textSize(25);
  text ("00:" + timer, space + 30, height/4.3);
  if (frameCount % 60 == 0 && timer > 0) { //Timer goes down every second, it will stop at 0
    timer --;
  }
  if (timer == 0) {
    screen = "gameOver"; //Display screen when timer is 0
    endSound.play(); 
  }
}

//Draw Game Over screen
function displayGameOver (){
  heading();
  subheading ("GAME OVER");
  
  //Display score
  stroke(195, 177, 222);
  strokeWeight(3);
  fill(255,255,255)
  rect (100, 155, 400, 100,20);
  
  //Display box with score
  fill(156, 137, 184);
  textSize (50);
  noStroke();
  text ("SCORE:" + points, width/2, height/2);
  textSize(20);
  
  text ("CLICK anywhere to play again.", width/2,height-100);
}

function getLetters(character){
  var message = "";
  //Accepts only letters
  if ((character >=65 && character<=90)){
    wordGuess += char(character);
    return message;
  } 
  //Check if enter is pressed and if it is valid
  else if (character == 13 || wordGuess.length == 6){
    message = checkUsed (wordGuess);
    if (message == "ALREADY USED"){
      wordGuess = ""; //Clear word
      return message;
    } else {
    message = checkWord (wordGuess, setNum);
    wordGuess = ""; //Clear word
    return message;
    }
  }
}

function checkWord(word, arrayIndex){
  var wordPoints = 0;
  for (var i=0; i<validWords[arrayIndex].length; i++){ 
    //Go through each object of the array and checks if the word matches any of them. 
    if (word == validWords[arrayIndex][i]){ 
      for (var c=3; c<=6; c++){ //Check length of word and add points
        if (word.length == c){
          points += pointSystem[c-3];
          wordPoints = pointSystem[c-3];
        }
      }
      validWords[arrayIndex].splice (i,1); //Remove word from array
      correctSound.play();
      usedWords.push(word); //Add used words into a separate array
      return word + "+" + wordPoints; //Return message
    }
  }
  wrongSound.play();
  return "INVALID WORD"; //Return message
}

function checkUsed (word){
  //Check if a word is already used
    for (var b=0; b<usedWords.length; b++){
      if (word == usedWords[b]) {
        wrongSound.play();
        return "ALREADY USED"; //Return message
    }
  }
  //Word not used
  return "";
}

function keyPressed(){
  //Call getLetters every time a key is pressed
  messageToDisplay = getLetters (keyCode);
}

function mousePressed(){
  //Switch screens
  if (screen == "intro"){
    screen = "gameboard";
  } else if (screen == "gameOver"){
    //Reset all of the features for the game to be played again
      screen = "intro";
      points = 0;
      timer = 60;
      messageToDisplay = "";
    
    //Add used words back into the valid words array
    for (d=0; d<usedWords.length; d++){
     validWords[setNum].push(usedWords[d]);  
    
    }
    usedWords = []; //Empty array
    setNum = Math.floor(Math.random()*jumbledLetters.length); 
  }
}