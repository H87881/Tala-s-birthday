// عناصر الصفحة
let gift = document.querySelector(".gift");
let giftCover = document.querySelector(".gift__cover");
let giftContainer = document.querySelector(".gift__container");
let card = document.querySelector(".card");

// تحريك الصندوق
let addGiftWobble = () => {
  gift.classList.add("animate__wobble");
  giftCover.classList.add("animate__wobble");
};

let removeGiftWobble = () => {
  gift.classList.remove("animate__wobble");
  giftCover.classList.remove("animate__wobble");
};

// فتح الصندوق
let addGiftOpen = () => {
  giftCover.classList.add("animate__open");
  giftContainer.classList.add("animate__open");
};

// إظهار البطاقة
let addCardZoomIn = () => {
  card.classList.add("animate");
};

// 🎉 تشغيل القصاصات
let launchConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });
};

// 🎈 إنشاء بالونة
function createBalloon(color) {
  let balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.backgroundColor = color;
  balloon.style.left = Math.random() * 90 + "%";
  document.body.appendChild(balloon);

  // تحريك البالونة لأعلى مع دوران بسيط
  setTimeout(() => {
    balloon.style.transform = `translateY(-${100 + Math.random() * 50}vh) rotate(${Math.random() * 20 - 10}deg)`;
  }, 100);

  // فرقعة بعد وقت عشوائي
  setTimeout(() => {
    balloon.remove();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: Math.random() * 0.5 }
    });
  }, 3000 + Math.random() * 1000);
}

// إطلاق البالونات
function launchBalloons() {
  const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd"];
  for (let i = 0; i < 10; i++) {
    createBalloon(colors[i % colors.length]);
  }
}

// عند الضغط على الهدية
gift.onclick = () => {
  addGiftWobble();

  setTimeout(() => {
    removeGiftWobble();
    addGiftOpen();
    addCardZoomIn();

    // 🎉 قصاصات
    launchConfetti();

    // 🎈 بلالين
    launchBalloons();    
  }, 3000);
};
