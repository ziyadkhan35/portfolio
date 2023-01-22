
function showMenu() {
  var md = document.querySelector(".menu-div");
  if (md.style.display === "none") {
    md.style.display = "block";
  } else {
    md.style.display = "none";
  }
}

function chooseAbout(about,about1,about2) {
  var info = document.querySelector("."+about+"-info")
  var info1 = document.querySelector("."+about1+"-info")
  var info2 = document.querySelector("."+about2+"-info")

  var border = document.querySelector("."+about+"-border")
  var border1 = document.querySelector("."+about1+"-border")
  var border2 = document.querySelector("."+about2+"-border")

  if (info.style.display === "none"){
    info.style.display = "flex"
    info1.style.display = "none"
    info2.style.display = "none"

    border.style.display = "block"
    border1.style.display = "none"
    border2.style.display = "none"
  } else {
    info.style.display = "flex"
    info1.style.display = "none"
    info2.style.display = "none"

    border.style.display = "block"
    border1.style.display = "none"
    border2.style.display = "none"
  }
}

