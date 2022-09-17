const poppap = (e) => {
  const poppapActive = document.querySelectorAll(".poppap--active");
  for (let i of poppapActive) {
    if (i == e) continue;
    i.classList.remove("poppap--active");
  }
  e.classList.toggle("poppap--active");
};

const userNavigation__search = document.querySelector(
  ".user-navigation__search"
);
const userNavigation__poppapSearch = document.querySelector(
  ".user-navigation__poppap-search"
);
const userNavigation__login = document.querySelector(".user-navigation__login");
const userNavigation__poppapLogin = document.querySelector(
  ".user-navigation__poppap-login"
);
const userNavigation__cart = document.querySelector(".user-navigation__cart");
const userNavigation__poppapCart = document.querySelector(
  ".user-navigation__poppap-cart"
);
const nav__catalog = document.querySelector(".nav__catalog");
const nav__poppapCatalog = document.querySelector(".nav__poppap-catalog");

userNavigation__search.onclick = () => poppap(userNavigation__poppapSearch);
userNavigation__login.onclick = () => poppap(userNavigation__poppapLogin);
userNavigation__cart.onclick = () => poppap(userNavigation__poppapCart);
nav__catalog.onmouseover = () => {
  nav__poppapCatalog.classList.add("poppap--active");
};
nav__catalog.onmouseout = (e) => {
  nav__poppapCatalog.classList.remove("poppap--active");
};

if (!/catalog/.test(location)) {
  let body = document.body;
  const contacts__poppapButton = document.querySelector(
    "#contacts__poppap-button"
  );
  const contactsForm = document.querySelector(".contacts-form");
  contacts__poppapButton.onclick = () => {
    body.classList.add("page__body--disabled");
    contactsForm.classList.add("poppap--active");
    contactsForm.querySelector(".contacts-form__close").onclick = () => {
      body.classList.remove("page__body--disabled");
      contactsForm.classList.remove("poppap--active");
    };
  };
}

if (!/catalog/.test(location)) {
  body = document.body;
  const slide = (e) => {
    body.classList.remove("page__body--slide-2", "page__body--slide-3");
    body.classList.add(e);
  };
  const slide1 = document.querySelector("#slide-1");
  const slide2 = document.querySelector("#slide-2");
  const slide3 = document.querySelector("#slide-3");

  slide1.onclick = () => slide("page__body");
  slide2.onclick = () => slide("page__body--slide-2");
  slide3.onclick = () => slide("page__body--slide-3");
}

//# sourceMappingURL=script.js.map
