"use strict";

const burger = document.querySelector(".header__burger");

const headerMenu = document.querySelector(".header__list");
/*************************************************
 * menu burger
 */
burger.addEventListener("click", burgerActive);
function burgerActive() {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
}
/************************************************ */

let infoBtn = document.querySelector("#info");

const infoStart = document.querySelector(".tenggara__content");

infoBtn.addEventListener("click", scrollToInfo);

function scrollToInfo() {
  let infoCoords = infoStart.getBoundingClientRect().top;

  window.scrollTo({
    top: infoCoords + window.pageYOffset,
    left: 0,
    behavior: "smooth",
  });
  event.preventDefault();
}
/****************************** */
let aboutBtn = document.querySelector("#about");

const aboutStart = document.querySelector(".bromo__swiper");

aboutBtn.addEventListener("click", scrollToAbout);

function scrollToAbout() {
  let aboutCoords = aboutStart.getBoundingClientRect().top;

  window.scrollTo({
    top: aboutCoords + window.pageYOffset,
    left: 0,
    behavior: "smooth",
  });
  event.preventDefault();
}
/****************************************** */
let cultureBtn = document.querySelector("#culture");

const cultureStart = document.querySelector(".culture__container");

cultureBtn.addEventListener("click", scrollToCulture);

function scrollToCulture() {
  let cultureCoords = cultureStart.getBoundingClientRect().top;

  window.scrollTo({
    top: cultureCoords + window.pageYOffset,
    left: 0,
    behavior: "smooth",
  });
  event.preventDefault();
}
/*******************************************
 * scroll to
 */
let scrolBtn = document.querySelector(".wonderfull__scroll");
const contStart = document.querySelector(".tenggara__content");

scrolBtn.addEventListener("click", scrollToStart);

function scrollToStart() {
  let contStartCoords = contStart.getBoundingClientRect().top;

  window.scrollTo({
    top: contStartCoords + window.pageYOffset,
    left: 0,
    behavior: "smooth",
  });
}

/********************************************** */
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("swiper-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/***************************************** */
/*  
let infolBtn = document.querySelector(".wonderfull__");
const contStart = document.querySelector(".tenggara__");

scrolBtn.addEventListener("click", scrollToStart);

function scrollToStart() {
  let contStartCoords = contStart.getBoundingClientRect().top;

  window.scrollTo({
    top: contStartCoords + window.pageYOffset,
    left: 0,
    behavior: "smooth",
  });
} */
