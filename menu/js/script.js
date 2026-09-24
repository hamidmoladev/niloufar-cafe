// -----------------------------------------------------------------
// داده‌های منو
// هر آیتم: [نام, توضیح, قیمت, پرفروش؟(true/false)]
// برای اینکه آیتمی نشان «پیشنهاد ویژه» بگیره، مقدار چهارم رو true بذار
// -----------------------------------------------------------------
const menuData = {
  dessert: {
    title: "کیک و دسر",
    dailyNote: "طعم کیک روز هر روز صبح مشخص و اینجا اعلام می‌شود.",
    items: [
      ["کیک خیس", "کیک شکلاتی + سس شکلات", "۱۹۵٬۰۰۰ تومان", true],
      ["ترلیچه", "کیک سه شیر + کارامل + خامه", "۱۹۰٬۰۰۰ تومان", false],
      ["چیز کیک لوتوس", "پنیر خامه‌ای + بیسکویت لوتوس + کارامل", "۱۸۰٬۰۰۰ تومان", true],
      ["دسر تیرامیسو", "ماسکارپونه + قهوه + کاکائو", "۱۸۰٬۰۰۰ تومان", false],
      ["کوکی", "کوکی تازه + چیپس شکلات", "۸۰٬۰۰۰ تومان", false],
      ["کیک روز", "طعم روز — سرو تازه", "قیمت روز", false]
    ]
  },
  hot: {
    title: "بار گرم",
    items: [
      ["اسپرسو میکس نیلوفر", "دبل اسپرسو + میکس اختصاصی نیلوفر", "۱۰۰٬۰۰۰ تومان", true],
      ["اسپرسو مارک", "دبل اسپرسو + دانه قهوه منتخب", "۱۰۰٬۰۰۰ تومان", false],
      ["امریکانو", "اسپرسو + آب داغ", "۱۲۰٬۰۰۰ تومان", false],
      ["هات چاکلت", "شکلات + شیر + خامه", "۲۰۰٬۰۰۰ تومان", false],
      ["کاپوچینو", "اسپرسو + شیر بخار داده + فوم شیر", "۱۹۰٬۰۰۰ تومان", true],
      ["کاپوچاکلت", "اسپرسو + شکلات + شیر + فوم شیر", "۲۱۰٬۰۰۰ تومان", false],
      ["لته آرت", "اسپرسو + شیر تازه + لته آرت", "۱۸۰٬۰۰۰ تومان", false],
      ["کارامل ماکیاتو", "اسپرسو + شیر + سیروپ کارامل", "۲۱۰٬۰۰۰ تومان", true],
      ["کورتادو", "اسپرسو + شیر گرم", "۱۶۰٬۰۰۰ تومان", false],
      ["ماچا", "پودر ماچا + شیر + عسل", "۲۰۰٬۰۰۰ تومان", false],
      ["موکا", "اسپرسو + شکلات + شیر", "۱۸۰٬۰۰۰ تومان", false],
      ["موکاچینو", "اسپرسو + شکلات + شیر + فوم", "۲۰۰٬۰۰۰ تومان", false]
    ]
  },
  cold: {
    title: "بار سرد",
    items: [
      ["آیس کارامل ماکیاتو", "اسپرسو + شیر + یخ + کارامل", "۲۵۰٬۰۰۰ تومان", true],
      ["آیس امریکانو", "اسپرسو + آب سرد + یخ", "۱۸۰٬۰۰۰ تومان", false],
      ["آیس لته", "اسپرسو + شیر سرد + یخ", "۱۹۰٬۰۰۰ تومان", false],
      ["آیس کاراسائو ماکیاتو", "کاراسائو + شیر + یخ + اسپرسو", "۲۵۰٬۰۰۰ تومان", false],
      ["آفوگاتو", "بستنی وانیلی + شات اسپرسو", "۲۱۰٬۰۰۰ تومان", true],
      ["موهیتو", "نعنا + لیمو + سودا + یخ", "۲۲۰٬۰۰۰ تومان", false],
      ["رد موهیتو", "توت‌فرنگی + نعنا + لیمو + سودا", "۲۳۰٬۰۰۰ تومان", false],
      ["اقیانوس ابری", "بلوکاراسائو + لیمو + سودا + یخ", "۲۳۰٬۰۰۰ تومان", false],
      ["منگو بلیس", "انبه + شیر نارگیل + یخ", "۲۴۰٬۰۰۰ تومان", false],
      ["سانست فیز", "پرتقال + گرانادین + سودا + یخ", "۲۰۰٬۰۰۰ تومان", false],
      ["دالگونا شکلاتی وانیلی", "سیروپ وانیل و قهوه فوم‌داده‌شده + شیر و یخ", "۲۵۰٬۰۰۰ تومان", false],
      ["مانگو لاگون", "انبه + سیروپ بلوکاراسائو", "۲۴۰٬۰۰۰ تومان", false]
    ]
  },
  frappe: {
    title: "فراپه (شیک)",
    items: [
      ["شیک لوتوس", "بیسکویت لوتوس + بستنی + شیر + خامه", "۲۵۰٬۰۰۰ تومان", true],
      ["شیک نوتلا", "نوتلا + بستنی وانیلی + شیر", "۲۵۰٬۰۰۰ تومان", false],
      ["شیک شکلات", "شکلات + بستنی + شیر + خامه", "۲۲۰٬۰۰۰ تومان", false],
      ["شیک توت فرنگی", "توت‌فرنگی + بستنی + شیر", "۲۳۰٬۰۰۰ تومان", false],
      ["شیک طالبی", "طالبی + بستنی + شیر", "۲۲۰٬۰۰۰ تومان", false]
    ]
  },
  majoon: {
    title: "معجون",
    items: [
      ["معجون پروتئین", "موز + شیر + کره بادام‌زمینی + پروتئین", "۲۳۰٬۰۰۰ تومان", false],
      ["معجون شکلات", "موز + شیر + شکلات + گردو", "۲۱۰٬۰۰۰ تومان", false],
      ["معجون نارگیل", "شیر نارگیل + موز + عسل + گردو", "۲۱۰٬۰۰۰ تومان", false],
      ["معجون ویژه (میکس)", "موز + خرما + گردو + بستنی + شیر", "۲۴۰٬۰۰۰ تومان", true],
      ["معجون ساده", "موز + خرما + شیر", "۱۸۰٬۰۰۰ تومان", false]
    ]
  },
  ice: {
    title: "بستنی",
    items: [
      ["ژلاتو ۳ اسکوپ", "سه طعم انتخابی ژلاتو", "۲۰۰٬۰۰۰ تومان", false],
      ["کیک بستنی", "کیک شکلاتی + بستنی + سس شکلات", "۲۲۰٬۰۰۰ تومان", true]
    ]
  },
  tea: {
    title: "چای و دمنوش",
    items: [
      ["چای ساده", "چای سیاه ایرانی + نبات", "۷۰٬۰۰۰ تومان", false],
      ["چای سبز", "برگ چای سبز + لیمو", "۷۰٬۰۰۰ تومان", false],
      ["چای ماسالا", "چای + شیر + ادویه ماسالا", "۱۰۰٬۰۰۰ تومان", false],
      ["دمنوش آرامش", "گل‌گاوزبان + به‌لیمو + اسطوخودوس", "۱۶۰٬۰۰۰ تومان", true],
      ["دمنوش نشاط", "زنجبیل + لیمو + نعنا", "۱۶۰٬۰۰۰ تومان", false],
      ["دمنوش میکس نیلوفر", "میکس اختصاصی گل‌ها + میوه خشک", "۱۶۰٬۰۰۰ تومان", true]
    ]
  }
};

// نام فایل تصویر هر دسته: images/items/<category>-<شماره از ۱>.jpg
function itemImagePath(category, index) {
  return `images/items/${category}-${index + 1}.jpg`;
}

const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");
const title = document.getElementById("detail-title");
const dailyNoteEl = document.getElementById("daily-note");
const list = document.getElementById("items-list");
const template = document.getElementById("menu-item-template");

function renderItems(category) {
  const group = menuData[category];
  title.textContent = group.title;

  if (group.dailyNote) {
    dailyNoteEl.textContent = group.dailyNote;
    dailyNoteEl.hidden = false;
  } else {
    dailyNoteEl.hidden = true;
  }

  list.replaceChildren();

  group.items.forEach(([name, info, price, featured], index) => {
    const node = template.content.cloneNode(true);

    const image = node.querySelector(".item-image");
    image.src = itemImagePath(category, index);
    image.alt = name;
    image.onerror = () => { image.src = "images/placeholder-item.jpg"; };

    node.querySelector(".featured-badge").hidden = !featured;
    node.querySelector(".item-name").textContent = name;
    node.querySelector(".item-info").textContent = info;
    node.querySelector(".item-price").textContent = price;

    list.appendChild(node);
  });

  lucide.createIcons();
}

function showCategory(category) {
  renderItems(category);
  homeView.hidden = true;
  detailView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  detailView.hidden = true;
  homeView.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => showCategory(button.dataset.category));
});

document.getElementById("back-button").addEventListener("click", showHome);

lucide.createIcons();
