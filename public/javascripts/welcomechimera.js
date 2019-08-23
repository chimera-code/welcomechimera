

function svgrun() {
  const container = document.getElementById("svg");
  container.classList.toggle('active');
  container.addEventListener("animationend", function () {
        // document.getElementById("svg").style = "display:none"
        location.href = "/text-animation"

  })
}

