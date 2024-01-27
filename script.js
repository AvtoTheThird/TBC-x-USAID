document.addEventListener("scroll", function () {
  document.body.classList.toggle("scrolling", window.scrollY > 0);
});

// function splitArrayAndOutput() {
//   let n = 7;
//   let start = 1;
//   function outputSubarray() {
//     var images = document.getElementsByClassName("partner");

//     let end = Math.min(start + 2, n);
//     let subarray = Array.from({ length: end - start + 1 }, (_, i) => start + i);

//     start = end + 1;
//     for (var i = 0; i < images.length; i++) {
//       (function (index) {
//         images[index].classList.add("fadeOut");

//         setTimeout(() => {
//           images[index].src = `./partners/${subarray[index]}.webp`;
//         }, 500);
//         setTimeout(() => {
//           images[index].classList.remove("fadeOut");
//         }, 500);
//       })(i);
//     }

//     if (start > n) {
//       start = 1;
//     }
//     setTimeout(outputSubarray, 4000);
//   }

//   outputSubarray();
// }
// splitArrayAndOutput();

function toggleAccordion(accordionNumber) {
  const accordion = document.getElementById(`accordion${accordionNumber}`);
  const arrow = document.getElementById(`arrow${accordionNumber}`);
  //tu gauxsnels vawvebit
  if (accordion.style.maxHeight == "0px") {
    //yvela sxva daixuros
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.style.maxHeight = 0;
    });
    //yvela arrow default gaxdes
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.classList.remove("arrowup");
    });
    //romelsac davaweqit gaixnsas da arrow sheicvalos
    accordion.style.maxHeight = accordion.scrollHeight + "px";
    arrow.classList.add("arrowup");
  }
  //tu gaxsnils vawvebit
  else if (accordion.style.maxHeight !== "0px") {
    //yvela daixuros
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.style.maxHeight = 0;
    });
    //yvela arrow default gaxdes
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.classList.remove("arrowup");
    });
  }
}
