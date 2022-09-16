const poppap = (e) => {
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

userNavigation__search.onclick = () => poppap(userNavigation__poppapSearch);
userNavigation__login.onclick = () => poppap(userNavigation__poppapLogin);
userNavigation__cart.onclick = () => poppap(userNavigation__poppapCart);
