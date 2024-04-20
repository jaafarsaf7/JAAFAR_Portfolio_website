extend.addEventListener("click", function(){
  main.classList.toggle("extendmain");
  terminalBody.classList.toggle("extendcontent");
  
  setTimeout(() => {
    document.getElementById(`input${i}`).focus();
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }, 300);
  
});

closeWindow.addEventListener("click", function(){
  main.style.animation = "fadeout 0.3s ease";
  icon.style.display="block";
  setTimeout( () =>{
    main.classList.toggle("display");
  },300);
});

//computer event
icon.addEventListener("mousedown", () =>{
  icon.classList.add("active");
  icon.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () =>{
  icon.classList.remove("active");
  icon.removeEventListener("mousemove", onDrag);
});

//mobile event
icon.addEventListener("touchstart", () =>{
  icon.classList.add("active");
  icon.addEventListener("touchmove", onDrag);
}, false);

document.addEventListener("touchend", () =>{
  icon.classList.remove("active");
  icon.removeEventListener("touchmove", onDrag);
}, false);


const onDrag = ({movementX, movementY}) =>{
  let getStyle = window.getComputedStyle(icon);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  icon.style.left = `${left + movementX}px`;
  icon.style.top = `${top + movementY}px`;
}  

const moveBg = (historic, result, y) => {
  if (result === "move" && document.body.classList.contains("animateBg")){
    terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML("beforeend", `<p class="result">The background animation is already active. To deactivate it, use the command <code>remove</code>.</p>`);
  } 
  else if (result === "move"){
    document.body.classList.toggle("animateBg");
    terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML("beforeend", `<p class="result">You have just activated the background animation. To deactivate it, use the command <code>remove</code>.</p>`);
  }  
  else if (result === "remove" && document.body.classList.contains("animateBg")){
    document.body.classList.toggle("animateBg");
    terminal = document.getElementById("terminal");
    terminal.insertAdjacentHTML("beforeend", `<p class="result">You have just deactivated the background animation. To activate it again, use the command <code>move</code>.</p>`);
  } else {
    if (y === 1){
      terminal = document.getElementById("terminal");
      terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
      <br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
      <p class="result">/!\\ to return to the main menu, please use the command <code>exit</code></p>`);
    } else {
      terminal = document.getElementById("terminal");
      terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          <br><br>Type the command <code>help</code> to display the list of available commands.</p>`);
    }
  }
}


window.addEventListener("click", function(event){
  if(event.target === closeWindowPopup || event.target === filter || event.target === btnPopup){
    popup.style.animation = "fadeout 0.3s ease";
    filter.style.animation = "fadeoutfilter 0.3s ease"
    setTimeout( () =>{
      popup.remove();
      filter.remove();
      document.getElementById(`input${i}`).focus();
    },300);
  };
});

icon.addEventListener("dblclick", function(){
  main.style.animation = "null";
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin",`
<div class="resume">
<pre>

 ______   ______     ______     ______   ______   ______     __         __     ______    
/\\  == \\ /\\  __ \\   /\\  == \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\ \\       /\\ \\   /\\  __ \\   
\\ \\  __/ \\ \\ \\/\\ \\  \\ \\  __<   \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\ \\____  \\ \\ \\  \\ \\ \\/\\ \\  
 \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\ \\_\\  \\ \\_____\\ 
  \\/_/     \\/_____/   \\/_/ /_/     \\/_/   \\/_/     \\/_____/   \\/_____/   \\/_/   \\/_____/ 
                                                                                   
                                                                                       
  
</pre></div>
        <div>Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.</div>
        <div id="terminal">
          <div>
            <p class="commande" id="answer${i}">Jaafar SAFAR:~/portfolio$</p>
            <input type="text" class="input" id="input${i}" tabindex="-1">
          </div>

      </div>

      
  `);
  main.classList.toggle("display");
  icon.style.display="none";
  document.getElementById(`input${i}`).focus();
});
