"use strict";
window.onload = () => {
  var btnOnload = document.querySelector("#unload-btn");
  var input = document.querySelector("#input-file");
  var imageViewer = document.querySelector("#image");
  var pInfo = document.querySelector("#info");
  var loader = document.querySelector(".loader");

  btnOnload.addEventListener("click", () => {
    input.click();
  });

  function convertImage(e) {
    fetch(e.target.result)
      .then((res) => res.blob())
      .then((data) => {
        console.log(URL.createObjectURL(data));
        imageViewer.setAttribute("src", URL.createObjectURL(data));
        imageViewer.style.width = "100%";
        imageViewer.style.height = "100%";
        imageViewer.classList.add("img-full-view");
        pInfo.classList.add("hide");
      });
  }

  function readUrl(input) {
    if (input.target.files && input.target.files[0]) {
      var readerImage = new FileReader();
      loader.classList.remove("hide");
      readerImage.onload = (e) => {
        convertImage(e);
      };
    }
    readerImage.readAsDataURL(input.target.files[0]);
    loader.classList.add("hide");
  }

  input.addEventListener("change", readUrl);
};
