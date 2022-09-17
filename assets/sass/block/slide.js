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
