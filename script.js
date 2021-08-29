'use strict'


let arrow = document.querySelector('.arrow');
let underBlock = document.querySelector('.under__block')
let text = document.querySelector('.under__text')
let row = document.querySelector('.block__flex')
const block = document.querySelector('.block')
const blockTwo = document.querySelector('#block-two')

row.onclick = () => {
  if (underBlock.style.display === 'none') {
    underBlock.style.display = 'block'
    block.style.paddingBottom = '120px'
    blockTwo.style.marginTop = '60px'
  } else {
    underBlock.style.display = 'none'
    block.style.paddingBottom = '0px'
    blockTwo.style.marginTop = '0px'
  }
}

const scrollTop = document.querySelector('.customer__scroll-top')
const scrollBot = document.querySelector('.customer__scroll-bot')

const personOne = document.querySelector('.customer__body-one')
const personTwo = document.querySelector('.customer__body-two')
const personThree = document.querySelector('.customer__body-three')

scrollTop.onclick = () => {
  if (true) {
    personTwo.classList.add('asd')
  }
}
