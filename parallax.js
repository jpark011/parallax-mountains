const layer1 = document.querySelector('#layer1');
const layer2 = document.querySelector('#layer2');
const text = document.querySelector('#text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  layer1.style.transform = `perspective(1000px) translate3d(${
    scrollY * -0.5
  }px, ${scrollY * -0.25}px, ${scrollY * 4}px)`;
  layer2.style.transform = `perspective(1000px) translate3d(${
    scrollY * 0.5
  }px, ${scrollY * -0.25}px, ${scrollY * 4}px)`;

  text.style.transform = `translateY(${scrollY * -2}px`;
});
