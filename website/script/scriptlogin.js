var heart = document.querySelector('main svg');
var text = document.querySelector('main ul li span')
console.log(text.textContent);

function animate() {
    heart.classList.add('animate');
    text.textContent = '6';
}

heart.addEventListener('click', animate);