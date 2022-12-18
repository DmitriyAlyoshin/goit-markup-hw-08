(() => {
  const refs = {
    buttonOff: document.querySelector("[data-modal-open]"),
    buttonOn: document.querySelector("[data-modal-close]"),
    body: document.body,
  }

  refs.buttonOff.addEventListener('click', disableScroll);

  refs.buttonOn.addEventListener('click', enableScroll);

  function disableScroll() {
    refs.body.classList.add("disable-scroll");
  }

  function enableScroll() {
    refs.body.classList.remove("disable-scroll");
  }
})();