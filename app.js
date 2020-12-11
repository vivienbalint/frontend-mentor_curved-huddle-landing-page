const cards = document.querySelectorAll(".card");

const options = {
  rootMargin: "0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? entry.target.classList.add("animate") : false;
  });
}, options);

cards.forEach((card) => {
  observer.observe(card);
});
