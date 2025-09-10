const themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const text = "Hello! I'm Parviz. Nice to meet you!";
const speed = 150;

let index = 0;
const output = document.getElementById("hero__title");
function typeLetter() {
  if (index < text.length) {
    output.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, speed);
  }
}
typeLetter();

const skillItems = document.querySelectorAll(".skill__item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

skillItems.forEach((skillItem) => observer.observe(skillItem));

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const imageUrl = card.dataset.modal; 
    modalImg.src = imageUrl;
    modal.classList.add("show");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    modalImg.src = "";
  }
});

modalImg.addEventListener("click", e => e.stopPropagation());