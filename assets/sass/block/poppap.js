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
nav__catalog.onmouseout = () => {
  nav__poppapCatalog.classList.remove("poppap--active");
};
// .elementFromPoint()
