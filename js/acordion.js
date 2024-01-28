document.addEventListener("scroll", function () {
  document.body.classList.toggle("scrolling", window.scrollY > 0);
});

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
