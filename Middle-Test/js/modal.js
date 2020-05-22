var video = document.getElementById("video");
var modal = document.getElementById("modal");
var open = document.getElementsByClassName("open");
var close = document.getElementsByClassName("close")[0];
var modalCont = document.getElementsByClassName("modal-content")[0];
var player = document.querySelectorAll(".player");

open[0].onclick = function () {
  modal.style.display = "block";
  modalCont.appendChild(video);
  player[1].classList.add("none");
  player[2].classList.add("none");
  player[0].classList.remove("none");
};
open[1].onclick = function () {
  modal.style.display = "block";
  modalCont.appendChild(video);
  player[0].classList.add("none");
  player[2].classList.add("none");
  player[1].classList.remove("none");
};
open[2].onclick = function () {
  modal.style.display = "block";
  modalCont.appendChild(video);
  player[0].classList.add("none");
  player[1].classList.add("none");
  player[2].classList.remove("none");
};

close.onclick = function () {
  modal.style.display = "none";
  modalCont.removeChild(video);
};
