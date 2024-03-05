//Generating the random number
let randomNumber = 0;
const letters = /^[A-Za-z]+$/;
const lvl_buttons = $('.lvl_selector');
const submit = $('#user_submit');

$(`.header-levels[type=level_1]`).show();

lvl_buttons.on('click',modeSelector);

function modeSelector () {
  let id = $(this).attr('id')
  if(id == 'level_1') randomNumber = Math.floor(Math.random() * 10) + 1;
  if(id == 'level_2') randomNumber = Math.floor(Math.random() * 100) + 1;
  if(id == 'level_3') randomNumber = Math.floor(Math.random() * 1000) + 1;
  $('.header-levels').hide() 
  $(`.header-levels[type=${id}]`).show() 
}

submit.on('click',guess_number)

function guess_number () {
  if(randomNumber !== 0){
    const user_guess = document.getElementById("user_input").value;
  
    if (user_guess == "") {
      notify("Please write a number!", "info");
      throw "false";
    }
  
    if (user_guess.match(letters)) {
      notify("You need to write a number,not a letters!", "info");
      return;
    }
  
    if (randomNumber == user_guess) {
      notify("You guessed!", "success");
    }
    if (randomNumber < user_guess) {
      notify("Oops,try a smaller number than" + " " + user_guess, "info");
    }
    if (randomNumber > user_guess) {
      notify("Oops,try a bigger number than" + " " + user_guess, "info");
    }
  }else{
    notify('Please,select the lvl!', 'info')
  }
}

$.notify.addStyle("notify", {
  html: "<div><span data-notify-text/></div>",
  classes: {
    info: {
      "margin-right": "3rem",
      "padding": "20px",
      "width": "200px",
      "border-radius": "5px",
      "text-align": "center",

      "border": "4px solid rgb(121, 17, 8)",
      "background": "transparent",
      "font-size": "23px",
    },
    success: {
      "text-align": "center",
      "margin-right": "2rem",
      "padding": "20px",
      "width": "200px",

      "border-radius": "5px",
      "background": "transparent",
      "font-size": "23px",
      "border": "4px solid rgb(135, 217, 52)",
    },
  },
});
function notify(text, type) {
  $.notify(
    text,
    {
      style: "notify",
      className: type,
    },
    {
      autoHide: true,
      autoHideDelay: 1500,
      clickToHide: false,
    }
  );
}
