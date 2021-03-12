import translations from

$(document).ready(function () {
  localStorage.language = "brazilian"

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky")
    } else {
      $(".navbar").removeClass("sticky")
    }
  })

  $(".menu-btn").click(function (e) {
    $(".navbar .menu").toggleClass("active")
    $(".menu-btn i").toggleClass("active")
  })
})

function toggleFAB(fab) {
  if (document.querySelector(fab).classList.contains("show")) {
    document.querySelector(fab).classList.remove("show")
  } else {
    document.querySelector(fab).classList.add("show")
  }
}

document.querySelector(".fab .main").addEventListener("click", function () {
  toggleFAB(".fab")
})

function changeLanguage() {
  var language = $("#btn-language").attr("language")

  console.log(translations)

  $(".main").removeClass(localStorage.language)
  $(".main").addClass(language)
  $("#btn-language").removeClass(language)
  $("#btn-language").addClass(localStorage.language)

  $("#btn-language").attr("language", localStorage.language)
  $("#label-language").text(
    localStorage.language == "brazilian" ? "Português" : "English"
  )

  localStorage.setItem("language", language)

  toggleFAB(".fab")
}
