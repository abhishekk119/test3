//to hide/show hamburger icon and sidebar in mobile view//
document.getElementById('hamburger-icon').addEventListener('click', () => {
    document.getElementById('hamburger-icon').classList.toggle('active');
    document.getElementById('menu-and-button').classList.toggle('active');
});

//link to resume (google drive) upon 'download my resume' button click//
document.getElementById('btn').addEventListener('click', () => {
  window.open("https://drive.google.com/file/d/1Kz1WPUbnMFzvP_PGeaTzU92cHo0FVPP3/view", "_blank", "noopener,noreferrer");
});

//scroll to about me section upon 'learn-more-about-me-button' button click//
document.getElementById("learn-more-about-me-button").addEventListener("click", () =>
{
    document.getElementById("about-me-div").scrollIntoView({
        behavior: "smooth"
    });
});

//typewriter effect on the heading at the top which says 'Hi, I'm Abhishek'//
const element = document.getElementById("typewriter");
// Split into parts you want to control
const textBefore = "Hi, I'm ";
const username = "Abhishek";
const spanStart = `<span class="name">`;
const spanEnd = `</span>`;

let fullText = textBefore + username;
let i = 0;

function typeWriter() {
  if (i < fullText.length) {
    if (i < textBefore.length) {
      element.innerHTML += fullText.charAt(i);
    } else {
      // We're in the name part
      const typedName = fullText.substring(textBefore.length, i + 1);
      element.innerHTML = textBefore + spanStart + typedName + spanEnd;
    }
    i++;
    setTimeout(typeWriter, 75);
  }
}

typeWriter();


//typewriter effect on the first paragraph on the top//
const para = document.getElementById("typewriter-paragraph");

// Grab the original text
const text = para.textContent;

// Clear the paragraph before typing
para.textContent = "";

let j = 0;

function typeWriterParagraph() {
  if (j < text.length) {
    para.textContent += text.charAt(j);
    j++;
    setTimeout(typeWriterParagraph, 30); // Adjust speed if needed
  }
}

typeWriterParagraph();





//code button for quote generator project//
document.getElementById("code-quote-button").addEventListener("click", function() {
  window.open("https://github.com/abhishekk119/quotegenerator", "_blank", "noopener,noreferrer");
});

//live demo button for quote generator project//
document.getElementById("demo-button-quote").addEventListener("click", function() {
  window.open("https://abhishekk119.github.io/quotegenerator/", "_blank", "noopener,noreferrer");
});

//code button for todo app project//
document.getElementById("logo-button-todo").addEventListener("click", function() {
  window.open("https://github.com/abhishekk119/newtodo", "_blank", "noopener,noreferrer");
});

//live demo button for todo app project//
document.getElementById("demo-button-todo").addEventListener("click", function() {
  window.open("https://abhishekk119.github.io/newtodo/", "_blank", "noopener,noreferrer");
});

//code button for calculator//
document.getElementById("code-calculator-button").addEventListener("click", function() {
  window.open("https://github.com/abhishekk119/calculatornew", "_blank", "noopener,noreferrer");
});

//live demo button for calculator//
document.getElementById("demo-button-calculator").addEventListener("click", function() {
  window.open("https://abhishekk119.github.io/calculatornew/", "_blank", "noopener,noreferrer");
});
