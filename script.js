let terminal = document.getElementById("terminal");
let i = 0;
let a = 0;
let input = document.getElementById(`input${i}`);
let terminalBody = document.getElementById("terminal-body");
let main = document.querySelector("div.main");
let extend = document.getElementsByClassName("banner-button-extend")[0];
let closeWindow = document.getElementsByClassName("banner-button-close")[0];
let closeWindowPopup = document.getElementsByClassName("banner-button-close")[1];
let btnPopup = document.getElementById("btn-design");
let popup = document.getElementById("popup");
let filter = document.getElementById("filter");
let icon = document.getElementById("icon");
const root = document.querySelector(":root");
let svg = document.getElementById("githubcorner");
let localisation = document.getElementById("localisation");
let bannerTitle = document.getElementById("banner-title"); 
let banner = document.getElementById("banner");
let historic = [];
let theme = 1;
let numberTheme;
let nameTheme = "dracula";
let secret = 0;
let y = 0;

window.addEventListener("click",function(){
  document.getElementById(`input${i}`).focus();
});

window.addEventListener("load", function(){
  input.value = "";
  if(localStorage.getItem(secret) !== null){
    secret = Number(localStorage.getItem(secret));
  }
  if(localStorage.getItem(numberTheme) !== null){
    switch (localStorage.getItem(numberTheme)){
      case "1" :
        dracula();
        break;
      case "2" :
        dark();
        break;
      case "3" :
        ubuntu();
        break;
      case "4" :
        medallion();
        break;
      case "5" :
        matrix();
        break;
      case "6" :
        helloKitty();
        break;
    }
  }
});

window.addEventListener("keydown", logKey);


function logKey(e){
  input = document.getElementById(`input${i}`)
  let result = input.value.toLowerCase();
  if (result[result.length -1] === " "){
    let modification = result.split('');
    modification.pop();
    result = Object.values(modification);
    result = result.join('');
  }

  if(e.ctrlKey && e.code === "KeyU"){
    input.value = "";
  }

  if(e.key === "ArrowUp"){
    if (historic.length > 0){
      if(a >= historic.length){
        a = historic.length - 1;
      }
      input.value = historic[a];
      a++;
    }
    e.preventDefault(); 
  }

  if(e.key === "ArrowDown"){
      if(a < 0){
        input.value = "";
        a = 0;
      }else{
        a--;
        if(historic[a-1] === undefined){
          input.value = "";
          a = 0;
        }else{
          input.value = historic[a - 1];
        }
      }
    e.preventDefault();
  }


  if (e.key === 'Tab'){
    if (y === -1){
      if(result[0] === "J"){
        input.value = "Jaafar\\ SAFAR/";
      }
      if(result[0] === "c"){
        input.value = "cd ";
      }
      if(result.includes("cd .")){
        input.value = "cd .secret";
      }
      if(result.includes("cd J")){
        input.value = "cd Jaafar\\ SAFAR/";
      } 
      if(result[0] === "c" && !result.includes(" ") && result[1] !== "d"){
        input.value = "clear";
      }
      if(result[0] === ("l")){
        input.value = "list-secret";
      }
    } else if (y === 0){
      if (result[0] === "a"){
        input.value = "about-me";
      }
      if(result[0] === "c" && !result.includes(" ") && result[1] !== "d"){
        input.value = "clear";
      }
      if(result.includes("cd .")){
        input.value = "cd ..";
      }
      if(result.includes("cd t")){
        input.value = "cd themes";
      }
      if(result[0] === "e"){
        input.value = "experiences";
      }
     
      if(result.includes("my-projects[") && !result.includes("]") && typeof result[12] !== "undefined" &&result[12].match(/\d/)){
        input.value = `${result}]`;
      }
     
      if(result.includes("my-projects") && !result.includes("my-projects[")){
        input.value = "my-projects[";
      }
      if(result.includes("my-projects[")){
        if(result.includes("]") && !result.includes(".website") && result[13] === "]"){      
          input.value = `${result.substr(0,14)}.website`;
        }
      }
      if(result[0] === "f"){
        input.value = "formations";
      }
      if(result[0] === "g"){
        input.value = "get ";
      }
      if(result.includes("get c")){
        input.value = "get cv";
      }
      if(result.includes("get l")){
        input.value = "get linkedin";
      }
      if(result.includes("get g")){
        input.value = "get github";
      }
      if(result[0] === "h"){
        input.value = "help";
      }
      
      if(result[0] === "m" && result !== "my-projects" && !result.includes("my-projects[")) {
        input.value = "my-projects";
      }
      if(result[0] === "p"){
        input.value = "passions";
      }
      if(result[0] === "t"){
        input.value = "themes";
      }
    } else {
      if(result[0] === "c" && !result.includes(" ") && result[1] !== "d"){
        input.value = "cl";
      }
      if(result.includes("cd .")){
        input.value = "cd ..";
      }
      if(result[0] === "c"){
        input.value = "clear";
      }
      if(result[0] === "e"){
        input.value = "exit";
      }
      if(result[0] === "d" && result[1] === "a"){
        input.value = "dark";
      }
      if(result[0] === "d" && result[1] === "r"){
        input.value = "dracula";
      }
      if(result[0] === "m" && result[1] === "a" && secret == 1){
        input.value = "matrix";
      } else if(result[0] === "m" || result[1] === "e"){
        input.value = "medallion";
      }
      if(result[0] === "h" && secret == 1){
        input.value = "hello kitty";
      }
      if(result[0] === "t"){
        input.value = "themes";
      }
      if(result[0] === "u"){
        input.value = "ubuntu";
      }

    }
    e.preventDefault();
  }

  if(e.key === 'Enter'){
    if(result === ""){
      e.preventDefault();
    }else{
      a = 0;
      historic.unshift(result);
      let answer = document.getElementById(`answer${i}`);
      let inputDelete = document.getElementById(`input${i}`);
      inputDelete.remove();
      answer.insertAdjacentHTML("beforeend", `<p class="resultwrite">${input.value}</p>`);
      i++;

      if (y === -1){
        
        if(result === "jaafar safar" || result === "cd jaafar safar" || result === "cd jaafar\\ safar/" || result === "jaafar\\ safar/" || result === "cd"){
          y ++;
          terminal.insertAdjacentHTML("beforeend", `<br>`);
          localisation.textContent = "/portfolio";
        } else if(result === "ls" || result === "ls -a"){
          ls(y, result, secret);
        } else if(result === "cd .secret"){
          mailer();
        } else if (result === "secrets"){
          secrets();
        } else if (result === "list-secret"){
          listSecret();
        } else if (result === "clear"){
          clear();
        } else if (result === "move"){
          moveBg(historic, result, y);
        } else if (result === "remove"){
          moveBg(historic, result, y);
        } else if (result === "glassmorphism"){
          main.classList.toggle("glassmorphism");
          if (main.classList.contains("glassmorphism")){
            terminal.insertAdjacentHTML("beforeend", `${data.glassmorphismOff}`);
          } else {
            terminal.insertAdjacentHTML("beforeend", `${data.glassmorphismOn}`);
          }
        } else{
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found</p>`);
        }
      } else 
      
      if (y === 0){
        if(result === "help"){
          help();
        } else if(result === "cd .."){
          y--;
          if (historic.length > 1){
            terminal.insertAdjacentHTML("beforeend", `<br>`);
          }
          localisation.textContent = "";

        } else if(result === "ls" || result === "ls -a"){
          ls(y, result, secret);
        } else if (result === "about-me"){
          aboutMe();
        } else if (result === "clear"){
          clear();
        } else if (result === "experiences"){
          experiences();
        } else if( result === "get cv"){
          getCv();
        } else if (result === "get linkedin"){
          getLinkedin();
        } else if (result === "get github"){
          getGithub();
        } else if (result === "passions"){
          hobby();
        } else if (result === "my-projects"){
          project();
        } else if (result === "my-projects[1].website"){
          website(result);
        } else if (result === "my-projects[2].website"){
          website(result);
        } else if (result === "my-projects[3].website"){
          website(result);
        } else if (result === "my-projects[4].website"){
          website(result);
        } 
        else if (result === "secrets"){
          secrets();
        } else if (result === "move"){
          moveBg(historic, result, y);
        } else if (result === "remove"){
          moveBg(historic, result, y);
        } else if (result === "glassmorphism"){
          main.classList.toggle("glassmorphism");
          if (main.classList.contains("glassmorphism")){
            terminal.insertAdjacentHTML("beforeend", `${data.glassmorphismOff}`);
          } else {
            terminal.insertAdjacentHTML("beforeend", `${data.glassmorphismOn}`);
          }
        } else if (result === "themes" || result === "cd themes"){
          y ++;
          themes();
          localisation.textContent = "/portfolio/themes";
        }         
        else{
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
         ${data.notfound}`);
        }
      } else {

        if (result === "exit" || result === "cd .." || result == "cd"){
          y --;
          terminal.insertAdjacentHTML("beforeend", `<br>`);
          localisation.textContent = "/portfolio";
        } else if (result === "clear"){
          clear();
        } else if (result === "dracula" || result === "1"){
          localStorage.setItem(numberTheme, 1);
          numberTheme = 1;
          nameTheme = "dracula";
          check();
          dracula();
        } else if (result === "dark" || result === "2"){
          localStorage.setItem(numberTheme, 2);
          numberTheme = 2;
          nameTheme = "dark";
          check();
          dark();
        } else if (result === "ubuntu" || result === "3"){
          localStorage.setItem(numberTheme, 3);
          numberTheme = 3;
          nameTheme = "ubuntu";
          check();
          ubuntu();
        } else if (result === "medallion" || result === "4"){
          localStorage.setItem(numberTheme, 4);
          numberTheme = 4;
          nameTheme = "medallion";
          check();
          medallion();
        } else if (result === "matrix" || result === "5" && secret == 1){
          localStorage.setItem('secret', 1);
          localStorage.setItem(numberTheme, 5);
          numberTheme = 5;
          nameTheme = "matrix";
          check();
          matrix();
        } else if (result === "hello kitty" || result === "6" && secret == 1){
          localStorage.setItem('secret', 1);
          localStorage.setItem(numberTheme, 6);
          numberTheme = 6;
          nameTheme = "hello kitty";
          check();
          helloKitty();
        } else if (result === "themes"){
          themes();
        } else if (result === "ls" || result === "ls -a"){
          ls(y, result, secret);
        } else if (result === "secrets"){
          secrets();
        } else if (result === "move"){
          moveBg(historic, result, y);
        } else if (result === "remove"){
          moveBg(historic, result, y);
        } else if (result === "glassmorphism"){
          main.classList.toggle("glassmorphism");
          if (main.classList.contains("glassmorphism")){
            terminal.insertAdjacentHTML("beforeend", `${data.glassmorphismOff}`);
          } else {
            terminal.insertAdjacentHTML("beforeend", `${data.glassmorphismOn}`);
          }
        } 
        
        else {
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          ${data.notfoundmenu}`);
        }        
      }
      if (y === -1){
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<p class="commande" id="answer${i}">Jaafar SAFAR:~$:</p><input type="text" autofocus class="input themeinput" id="input${i}" tabindex="-1">`);
      } else if (y === 1){
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<p class="commande" id="answer${i}">Jaafar SAFAR:~/portfolio/themes$:</p><input type="text" autofocus class="input themeinput" id="input${i}" tabindex="-1">`);
      } else {
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<p class="commande" id="answer${i}">Jaafar SAFAR:~/portfolio$</p><input type="text" autofocus class="input" id="input${i}" tabindex="-1">`);
      }
      document.getElementById(`input${i}`).focus();
      if (document.getElementById(`input${i}`).classList.contains("themeinput") && y === -1){
        document.getElementById(`input${i}`).classList.remove("themeinput");
        document.getElementById(`input${i}`).classList.add("rootinput");
      } else if(!document.getElementById(`input${i}`).classList.contains("themeinput") && y === 1){
        document.getElementById(`input${i}`).classList.add("themeinput");
        document.getElementById(`input${i}`).classList.remove("rootinput");
      }
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }
}






