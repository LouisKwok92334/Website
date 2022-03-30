const character = document.querySelector('.Character-Photo')
const xiaoyuan = document.querySelector('.Xiaoyuan')
const boss = document.querySelector('.Boss')
const wind = document.querySelector('.Wind')
const fire = document.querySelector('.Fire')
const water = document.querySelector('.Water')
const soil = document.querySelector('.Soil')
const ghost = document.querySelector('.Ghost')
const elephant = document.querySelector('.Elephant')

xiaoyuan.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/Xiaoyuan.png">
    `
})
boss.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/boss.png">
    `
})
wind.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/風之精靈_希爾芙.png">
    `
})
fire.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/火之精靈_薩萊曼達.png">
    `
})
water.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/水之精靈_溫蒂尼.png">
    `
})
soil.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/土之精靈_諾姆.png">
    `
})
ghost.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/ghost.png">
    `
})
elephant.addEventListener('click', function() {
    character.innerHTML = `
    <img src="../images/elephant.png">
    `
})