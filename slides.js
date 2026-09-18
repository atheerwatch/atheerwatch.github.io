// --- 1. إدارة السلايد شو المنفصل ---
let skmeiIndex = 1;
let wrIndex = 1;

showSlides('skmei', skmeiIndex);
showSlides('wr', wrIndex);

function plusSlides(type, n) {
  if (type === 'skmei') {
    showSlides('skmei', skmeiIndex += n);
  } else if (type === 'wr') {
    showSlides('wr', wrIndex += n);
  }
}

function showSlides(type, n) {
  let className = type === 'skmei' ? 'skmeiSlides' : 'wrSlides';
  let slides = document.getElementsByClassName(className);
  let currentIndex = type === 'skmei' ? skmeiIndex : wrIndex;

  if (n > slides.length) { currentIndex = 1; }
  if (n < 1) { currentIndex = slides.length; }

  if (type === 'skmei') skmeiIndex = currentIndex;
  else wrIndex = currentIndex;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}

// --- 2. التحكم بإخفاء وإظهار البطاقات عند تشغيل الفيديو ---
const muslimVideo = document.getElementById('muslim-video');
const skmeiCard = document.getElementById('skmei-card');
const wr50mCard = document.getElementById('wr50m-card');

// عند الضغط على تشغيل الفيديو
muslimVideo.addEventListener('play', () => {
  skmeiCard.classList.add('hidden');
  wr50mCard.classList.add('hidden');
});

// عند إيقاف الفيديو مؤقتاً
muslimVideo.addEventListener('pause', () => {
  skmeiCard.classList.remove('hidden');
  wr50mCard.classList.remove('hidden');
});

// عند انتهاء الفيديو
muslimVideo.addEventListener('ended', () => {
  skmeiCard.classList.remove('hidden');
  wr50mCard.classList.remove('hidden');
});