const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');


navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src ="img/logo/nav-close.svg.svg"
    } else {
        navBtnImg.src ="img/logo/nav-open.svg.svg"
    }
}
