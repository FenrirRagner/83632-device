var linkWriteUs = document.querySelector(".contacts-link");
var linkMap = document.querySelector(".contacts-image-map");
var popupWriteUsClose = document.querySelector(".popup-close-write-us");
var popupMapClose = document.querySelector(".popup-close-map");

var popupWriteUs = document.querySelector(".popup-write-us");
var popupMap = document.querySelector(".popup-map");

var popupWriteUsForm = popupWriteUs.querySelector("form");
var popupWriteUsLogin = popupWriteUs.querySelector("[name=user-name]");
var popupWriteUsEmail = popupWriteUs.querySelector("[name=user-email]");
var popupWriteUsText = popupWriteUs.querySelector("[name=text-message]");

/interective modal map/
linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-show");
});

popupMapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-show");
});


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("popup-show")) {
      popupMap.classList.remove("popup-show");
      popupMap.classList.remove("popup-error");
    }
  }
});

/interective modal write us/
linkWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("popup-show");
  popupWriteUsLogin.focus();
  if (storageLogin && storageEmail) {
    popupWriteUsLogin.value = storageLogin;
    popupWriteUsEmail.value = storageEmail;
    popupWriteUsText.focus();
  } else if (storageLogin && !storageEmail) {
    popupWriteUsLogin.value = storageLogin;
    popupWriteUsEmail.focus();
  } else if (!storageLogin && storageEmail) {
    popupWriteUsEmail.value = storageEmail;
    popupWriteUsLogin.focus();
  }
});

popupWriteUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("popup-show");
  popupWriteUs.classList.remove("popup-error");
});

popupWriteUsForm.addEventListener("submit", function(evt) {
  if (!popupWriteUsLogin.value || !popupWriteUsEmail.value || !popupWriteUsText.value) {
    evt.preventDefault();
    popupWriteUs.classList.add("popup-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
  } else {
    localStorage.setItem("name", popupWriteUsLogin.value);
    localStorage.setItem("email", popupWriteUsEmail.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupWriteUs.classList.contains("popup-show")) {
      popupWriteUs.classList.remove("popup-show");
      popupWriteUs.classList.remove("popup-error");
    }
  }
});
