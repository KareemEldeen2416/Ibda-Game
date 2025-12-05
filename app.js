let add_player_button = document.querySelector(".add-player");
let players_list = document.querySelector(".players");
let player_name = document.querySelector("input");
let start_button = document.querySelector(".start");
let number_of_players = 0;
let round_no = 0;
let players = {
  one:[],
  two:[],
  three:[],
  four:[],
  five:[],
  six:[],
  seven:[],
};
let alphabets = {
  "a":2, 
  "b":3, 
  "c":6, 
}


function create_player(){
  let player = document.createElement("div");
  player.setAttribute("class","player");
  player.setAttribute("id",`p${number_of_players+1}`);
  player.innerHTML = `
        <h4>${player_name.value}</h4>
      <ul></ul>
  `
  let word_div = document.createElement("div");
  word_div.setAttribute("class","add-word");
  let input_word = document.createElement("input");
  input_word.setAttribute("type","text");
  input_word.setAttribute("class","word");
  input_word.setAttribute("placeholder","أدخل الكلمة");
  let add_button = document.createElement("button");
  add_button.setAttribute("class","add");
  add_button.innerText= '+';
  word_div.appendChild(input_word);
  word_div.appendChild(add_button);
  player.appendChild(word_div);
  players_list.appendChild(player);
  add_button.addEventListener("click",function(e){
    if(input_word.value!= ""){
      let word = input_word.value;
      let word_list = player.querySelector("ul");
      let list_item = document.createElement("li");
      list_item.innerText=word;
      word_list.appendChild(list_item);
      currentDiv = e.target.parentElement;
      currentPlayer = currentDiv.parentElement;
      console.log(currentDiv.parentElement);
      currentID = currentPlayer.getAttribute("id");
      if(currentID == "p1"){
        players.one.push(word);
        console.log(players.one);
      }
      else if(currentID == "p2"){
        players.two.push(word);
        console.log(players.two);
      }
      else if(currentID == "p3"){
        players.three.push(word);
        console.log(players.three);

      }
      else if(currentID == "p4"){
        players.four.push(word);
        console.log(players.four);

      }
      else if(currentID == "p5"){
        players.five.push(word);
        console.log(players.five);

      }
      else if(currentID == "p6"){
        players.six.push(word);
        console.log(players.six);

      }
      else if(currentID == "p7"){
        players.seven.push(seven);
        console.log(players.two);

      }
      input_word.value="";
      console.log("Success");
    }else{
      alert("Please enter a word")
    }
  });
}


function next_round(){
  calculate_score();
}

function calculate_score(){
  for(key in players){
    console.log(players[key]);
  }
}

start_button.addEventListener("click",next_round);


add_player_button.addEventListener("click",function(){
  if(number_of_players < 7){
    create_player();
    number_of_players ++;
    player_name.value = ""
  }else{
    alert("Can not add more players")
  }
});

