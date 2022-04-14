"use strict"

// Grabbing the target elements from the HTML File
const list = document.querySelector(".gallery-carousel__img-container--list");
const imgs = Array.from(list.children);
const nextButton = document.querySelector(".gallery-carousel__btn--right");
const prevButton = document.querySelector(".gallery-carousel__btn--left");
const carouselNav = document.querySelector(".gallery-carousel__nav");
const dots = Array.from(carouselNav.children);
