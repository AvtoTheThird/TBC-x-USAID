// წესები და პირობებიs overlay
function openDialog() {
  var overlay = document.querySelector(".overlay");
  var dialogContainer = document.querySelector(".dialog-container");

  overlay.style.display = "block";
  dialogContainer.style.transform = "translateX(0)";

  setTimeout(function () {
    dialogContainer.style.display = "block";
  }, 300);
}

function closeDialog() {
  var overlay = document.querySelector(".overlay");
  var dialogContainer = document.querySelector(".dialog-container");

  overlay.style.display = "none";
  dialogContainer.style.transform = "translateX(100%)";
  setTimeout(function () {
    dialogContainer.style.display = "none";
  }, 300);
}
// mobilze nav meniu
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var overlay = document.getElementById("nav-overlay");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
    overlay.style.display = "block";
  }
}

function closeMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var overlay = document.getElementById("nav-overlay");

  mobileMenu.style.display = "none";
  overlay.style.display = "none";
}
