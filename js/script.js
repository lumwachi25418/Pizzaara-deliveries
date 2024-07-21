let selectitems = document.querySelectorAll(".select");
// console.log(selectitems);
let pizzaitems = document.querySelectorAll(".menu__cart__container");
// console.log(pizzaitems);
for (i = 0; i < selectitems.length; i++) {
  let select = selectitems[i];
  if (select.textContent.toLowerCase() === "chicken pizza") {
    selectitems[i].classList.add("active");
  }
}

for (let p = 0; p < pizzaitems.length; p++) {
  // console.log("Hello");
  if (pizzaitems[p].classList.contains("chicken")) {
    pizzaitems[p].style.display = "flex";
  } else {
    pizzaitems[p].style.display = "none";
  }
}
for (let i = 0; i < selectitems.length; i++) {
  selectitems[i].addEventListener("click", function () {
    console.log(selectitems[i]);

    for (let i = 0; i < selectitems.length; i++) {
      selectitems[i].classList.remove("active");
    }
    selectitems[i].classList.add("active");
    let filterName = selectitems[i].textContent;
    console.log(filterName);
    if (filterName.toLowerCase() === "chicken pizza") {
      for (let i = 0; i < pizzaitems.length; i++) {
        if (pizzaitems[i].classList.contains("chicken"))
          pizzaitems[i].style.display = "flex";
        else {
          pizzaitems[i].style.display = "none";
        }
      }

      selectitems[i].style.display = "flex";
    }
    // else{
    // selectitems[i].style.display = "none"
    // }
    else if (filterName.toLowerCase() === "pepperoni") {
      for (let i = 0; i < pizzaitems.length; i++) {
        if (pizzaitems[i].classList.contains("pepperoni"))
          pizzaitems[i].style.display = "flex";
        else {
          pizzaitems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "margherita") {
      for (let i = 0; i < pizzaitems.length; i++) {
        if (pizzaitems[i].classList.contains("margherita"))
          pizzaitems[i].style.display = "flex";
        else {
          pizzaitems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "hawiian") {
      for (let i = 0; i < pizzaitems.length; i++) {
        if (pizzaitems[i].classList.contains("hawiian"))
          pizzaitems[i].style.display = "flex";
        else {
          pizzaitems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "meat lover's pizza") {
      for (let i = 0; i < pizzaitems.length; i++) {
        if (pizzaitems[i].classList.contains("meat"))
          pizzaitems[i].style.display = "flex";
        else {
          pizzaitems[i].style.display = "none";
        }
      }
    }
  });

}
