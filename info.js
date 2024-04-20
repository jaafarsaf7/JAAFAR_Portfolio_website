var data = {
 "welcome" : "Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",

    "information" : "This website was entirely created using <code>HTML</code>, <code>CSS</code> and <code>Javascript</code> without using any library or framework. This site contains a large number of features (hidden animations, secret themes, etc.) but also a well-hidden <code>easter egg</code> that only developers can find. Good discovery!",

    "btnpopup" : "Continue",

    "help" : `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"Name" : "Jaafar SAFAR",<br>
      &nbsp;&nbsp;&nbsp;"Interests": "Machine Learning, BioInformatics, Computer vision",<br>
      &nbsp;&nbsp;&nbsp;"Programming Languages" : "JS, Python, HTML, CSS",<br>
      &nbsp;&nbsp;&nbsp;"Frameworks" : "React, Django, Flask, TensorFlow, OpenCV, NumPy, Pandas",<br>
      &nbsp;&nbsp;&nbsp;"Tools": "GitHub, AWS, Figma, Hadoop, MySQL",<br>
      &nbsp;&nbsp;&nbsp;"SoftSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Seattle, Washington State"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">March 2022 - june 2022</td>
    <td>Highline College tutoring Center</td>
    <td>Math and Python Tutor</td>
    <td>Personalized tutoring in math and Python programming, enhancing students' understanding and problem-solving skills.</td>
  </tr>
  <tr>
    <td class="center">August 2022 - May 2023</td>
    <td>Upwork Freelance</td>
    <td>Data Specialist</td>
    <td>Provided expert services in data cleaning and web scraping, streamlining data processes and extracting valuable insights for clients across various industries. Enhanced data accuracy and efficiency for business decision-making.</tr>
  <tr>
    <td class="center">Febuary 2023 - September 2023</td>
    <td>Highline College Thunderbirds</td>
    <td>Web and Newsletter Coordinator</td>
    <td>Responsible for weekly updates to the Thunderbirds website and crafting engaging newsletters sent via email, keeping the Highline College community informed and connected.</td>
  `,

  "cv" : `The resume upload will begin.`,

  "redirectLinkedin" : `You will be redirected to Linkedin.`,

  "redirectGithub" : `You will be redirected to Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport": "Soccer, Swimming, Running, Hiking",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Photography, Reading , volunteering, Bioinformatics"<br>
  }`,

  "project" : `<table class="result">
  <tr>
    <th>index</th>
    <th>Name</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>As a team?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Portfolio Terminal</td>
    <td class="center">HTML, CSS, JS</td>
    <td>Conceptualized and designed a unique, terminal-style personal portfolio website. Engineered an interactive command-line interface format to showcase projects and skills. Utilized HTML, CSS, and JavaScript to create a dynamic user experience.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://guillaumereygner.fr" target="blank">Link</a></td>
</tr>
  <tr>
    <td class="center">2</td>
    <td class="center">Embedded Deep Learning on RaspberryPi4</td>
    <td class="center">Python, TensorFlow, OpenCV</td>
    <td>Engineered an innovative application for real-time number detection and equation solving on a Raspberry Pi 4. Led a team of 3 members, including 2 classmates, in implementing a convolutional neural network to efficiently process images for mathematical computations.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/jaafarsaf7/Embedded-Deep-Learning-on-RaspberryPi4" target="blank">Link</a></td>
</tr>
<tr>
    <td class="center">3</td>
    <td class="center">Stable Diffusion Text-to-Image Web App with AWS</td>
    <td class="center">AWS, React, Python, </td>
    <td>Architected and implemented a cloud-based text-to-image generation application. Leveraged AWS services including Lambda and Amplify for serverless computing and deployment. Integrated a Stable Diffusion AI model for efficient image creation from textual prompts. Designed a user-friendly interface using React for enhanced user experience.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/jaafarsaf7/stabble-diffusion-Text-image-web-app-with-AWS" target="blank">Link</a></td>
</tr>
<tr>
    <td class="center">4</td>
    <td class="center">Face Recognition Web App with Django ML</td>
    <td class="center">Python, Django, Pandas, Scikit-Learn, OpenCV</td>
    <td>Developed a web-based face recognition and emotion detection system. Integrated Django, machine learning models, and OpenCV to create dynamic, real-time user interactions. Spearheaded the development effort to ensure robust backend data processing.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/jaafarsaf7/Face-Recognition-Web-App-with-Django-ML" target="blank">Link</a></td>
</tr>


  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,
  "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,
  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div><code>themes</code></div>
  `,

  "ls2" : `
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div>my-projects[4].website</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

  "congratulation" : `Congratulations you have found the <code>.secret</code> folder.`,

  "bodymail" : `mailto:jaafarsafar5@gmail.com?subject= Hey, you've stumbled upon my little easter egg—nice find! I'm currently open to professional opportunities, so feel free to drop me an email with your proposal. I'll get back to you to set up a phone interview. Thanks for reaching out!`
}

let welcome = document.getElementById("welcome");
let popupcontent = document.getElementsByClassName("popupinfo")[0];

window.addEventListener("load", initializeContent());

function initializeContent(){
  welcome.innerHTML = data.welcome;
  popupcontent.innerHTML = data.information;
  btnPopup.innerHTML = data.btnpopup;

  document.querySelectorAll(".helpresult").forEach(element => {
    element.innerHTML = data.help
  });
  document.querySelectorAll(".aboutmeresult").forEach(element => {
    element.innerHTML = data.aboutme
  });
  document.querySelectorAll(".experienceresult").forEach(element =>{
    element.innerHTML = data.experience
  });
  document.querySelectorAll(".cvresult").forEach(element =>{
    element.innerHTML = data.cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element =>{
    element.innerHTML = data.redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element =>{
    element.innerHTML = data.redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element =>{
    element.innerHTML = data.hobby
  });
  document.querySelectorAll(".resultproject").forEach(element =>{
    element.innerHTML = data.project
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach(element =>{
    element.innerHTML = data.glassmorphismOff
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach(element =>{
    element.innerHTML = data.glassmorphismOn
  });
  document.querySelectorAll(".notfoundmenu").forEach(element =>{
    element.innerHTML = data.notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element =>{
    element.innerHTML = data.website
  });
  document.querySelectorAll(".lsresult1").forEach(element =>{
    element.innerHTML = data.ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element =>{
    element.innerHTML = data.ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element =>{
    element.innerHTML = data.listsecretresult
  });
  document.querySelectorAll(".congratulation").forEach(element =>{
    element.innerHTML = data.congratulation
  });

  
}

