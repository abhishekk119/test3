document.getElementById('hamburger-icon').addEventListener('click', () => {
    document.getElementById('hamburger-icon').classList.toggle('active');
    document.getElementById('menu-and-button').classList.toggle('active');
});

document.getElementById('btn').addEventListener('click', () => {
    window.location.href = 'tel:+919332522166'; // Replace with your number
});

document.getElementById("learn-more-about-me-button").addEventListener("click", () =>
{
    document.getElementById("about-me-div").scrollIntoView({
        behavior: "smooth"
    });
});


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






document.getElementById("code-quote-button").addEventListener("click", function() {
  window.open("https://github.com/abhishekk119/quotegenerator", "_blank", "noopener,noreferrer");
});


document.getElementById("demo-button-quote").addEventListener("click", function() {
  window.open("https://abhishekk119.github.io/quotegenerator/", "_blank", "noopener,noreferrer");
});


document.getElementById("logo-button-todo").addEventListener("click", function() {
  window.open("https://github.com/abhishekk119/newtodo", "_blank", "noopener,noreferrer");
});


document.getElementById("demo-button-todo").addEventListener("click", function() {
  window.open("https://abhishekk119.github.io/newtodo/", "_blank", "noopener,noreferrer");
});