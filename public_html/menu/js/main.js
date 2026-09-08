// تشخیص صفحات داخلی و تنظیم دکمه بازگشت
document.addEventListener('DOMContentLoaded', () => {
  const isCategoryPage = document.body.classList.contains('category-page');
  if (isCategoryPage) {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.href = '../index.html';
      });
    }
  }

  // انیمیشن ورود کارت‌ها (با تأخیر پلکانی)
  const cards = document.querySelectorAll('.category-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    setTimeout(() => {
      card.style.transition = 'opacity .6s cubic-bezier(0.16, 1, 0.3, 1), transform .6s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, 80 + index * 100);
  });

  // انیمیشن ورود آیتم‌ها در صفحات داخلی
  const items = document.querySelectorAll('.menu-item');
  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'opacity .5s ease, transform .5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 100 + index * 60);
  });
});
