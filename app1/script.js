const img = document.querySelectorAll('img');

if (localStorage.imagesUrls) {
    document.body.style.backgroundImage = `url(${localStorage.imagesUrls})`;
    img.forEach(item => {
        if (item.src === localStorage.imagesUrls) {
            item.classList.add('active');
        }
    })
} 

window.addEventListener('click', (event) => {
    img.forEach(item => {
        item.classList.remove('active')
        if (event.target === item) {
            let imgUrl = event.target.src;
            localStorage.imagesUrls = imgUrl;
            document.body.style.backgroundImage = `url(${imgUrl})`;
            event.target.classList.add('active')
        }
    })
})






