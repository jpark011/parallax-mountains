const stars = document.querySelector('#stars');
const moon = document.querySelector('#moon');
const mountainsFront = document.querySelector('#mountains_front');
const mountainsBehind = document.querySelector('#mountains_behind');

const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  stars.style.transform = `translateX(${scrollY * 0.25}px)`;
  moon.style.transform = `translateY(${scrollY * 1.05}px)`;
  mountainsBehind.style.transform = `translateY(${scrollY * 0.5}px)`;
  text.style.transform = `translate(${scrollY * -5}px, ${scrollY * 1.0}px)`;
  btn.style.transform = `translateY(${scrollY * 1.0}px)`;
  header.style.transform = `translateY(${scrollY * 0.5}px)`;
});
