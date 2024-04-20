const aboutMe = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result aboutmeresult">
          ${data.aboutme}
        </p>`);
};


const clear = () =>{
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin", `<div id="terminal"></div>`);
};

const experiences = () =>{
  terminal.insertAdjacentHTML("beforeend", `
  <table class="result experienceresult">
      ${data.experience}
  </table>`);
};

const getCv = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result cvresult">${data.cv}</p>`);
  const a = document.createElement("a");
  a.href = "ressources/jaafarsafar_Resume_final.pdf";
  a.setAttribute("download", "jaafarsafar_Resume_final.pdf");
  a.setAttribute("target", "blank");
  a.click();
}

const getLinkedin = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultLinkedin">${data.redirectLinkedin}</p>`);
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/jaafar-safar-b73782241/";
  a.setAttribute("target", "blank");
  a.click();
}

const getGithub = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultGithub">${data.redirectGithub}</p>`);
  const a = document.createElement("a");
  a.href = "https://github.com/jaafarsaf7";
  a.setAttribute("target", "blank");
  a.click();
}

const help = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          <ul class="helpresult">
            ${data.help}
          </ul>
        </p>`);
};

const hobby = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result hobbyresult">
          ${data.hobby}
        </p>`);
};


const project = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<div class="resultproject">
        ${data.project}
    </div>`);
};


const website = (result) =>{
  terminal.insertAdjacentHTML("beforeend", `${data.website}`);
  const a = document.createElement("a");

  if(result === "my-projects[1].website"){
    a.href = "https://jaafarportfolio.com/";
  } else if (result === "my-projects[2].website"){
    a.href = "https://github.com/jaafarsaf7/Embedded-Deep-Learning-on-RaspberryPi4";
  } else if (result === "my-projects[4].website"){
    a.href = "https://github.com/jaafarsaf7/Face-Recognition-Web-App-with-Django-ML";
  } else if (result === "my-projects[3].website"){
    a.href = "https://github.com/jaafarsaf7/stabble-diffusion-Text-image-web-app-with-AWS";
  }
  // Ensuring the link opens in a new tab
  a.setAttribute("target", "blank");
  a.click();
}

const ls = (y, result, secret) =>{
  if(y === 0 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult1">${data.ls1}</div>`);
  } else if (y === 0 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult2">${data.ls2}</div>`);
  } else if (y === 1 && result === "ls -a" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
            <div>matrix</div>
            <div>hello kitty</div>
        </div>`);
  } else if (y === 1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
        </div>`);
  } else if (y === 1  && result === "ls" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
      <div>matrix</div>
      <div>hello kitty</div>
    </div>`);
  } else if (y === 1  && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
    </div>`);
  } else if (y === -1 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div>list-secret</div>
            <div><code>Jaafar SAFAR</code></div>
          </div>`);
  } else if (y === -1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend",  
    `<div class="result ls">
      <div><code>.</code></div>
      <div><code>.secret</code></div>
      <div>list-secret</div>
      <div><code>Jaafar SAFARR</code></div>
    </div>`);
  }
}

const listSecret = () =>{
  terminal.insertAdjacentHTML("beforeend",
        `<p class="result">
          <ul class="listsecretresult">
            ${data.listsecretresult}
          </ul>
        </p>`);
}

const mailer = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result bravo">${data.congratulation}</p>`);
  const a = document.createElement("a");
  a.href = `${data.bodymail}`;
  a.click();
}
