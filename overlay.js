function openDialog() {
  var overlay = document.querySelector(".overlay");
  var dialogContainer = document.querySelector(".dialog-container");

  overlay.style.display = "block";
  dialogContainer.style.transform = "translateX(0)";

  // Delay setting display property to allow the transition to take effect
  setTimeout(function () {
    dialogContainer.style.display = "block";
  }, 300); // Adjust the timeout to match the transition duration (300ms in this case)
}

function closeDialog() {
  var overlay = document.querySelector(".overlay");
  var dialogContainer = document.querySelector(".dialog-container");

  overlay.style.display = "none";
  dialogContainer.style.transform = "translateX(100%)";
  // Delay setting display property to allow the transition to take effect
  setTimeout(function () {
    dialogContainer.style.display = "none";
  }, 300); // Adjust the timeout to match the transition duration (300ms in this case)
}
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
