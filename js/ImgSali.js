let sliImg = document.querySelector('#sliimg');
let btn1 = document.querySelector('#btn-img-1');
let btn2 = document.querySelector('#btn-img-2');
let inputName = document.querySelector('#nameImg');
let imgvalue = inputName.value;
let imglink = imgvalue.split(',')
let numberIn = 0

    function sliImgBtn2() {
        if (numberIn < imglink.length -1) {
            numberIn++;
            sliImg.src = imglink[numberIn];
        }
        sliImg.classList.add('imgsliter-right');
    }
    function removecalss () {
        sliImg.classList.remove('imgsliter-right');
        sliImg.classList.remove('imgsliter-left')
    }
    function sliImgBtn1() {
        if (numberIn > 0) {
            numberIn--;
            sliImg.src = imglink[numberIn];
        }
        sliImg.classList.add('imgsliter-left');
    }
    function checkkey(e) {
        if (e.key == 'ArrowLeft') {
            sliImgBtn1()
        } else if (e.key == 'ArrowRight') {
            sliImgBtn2()
        }
    }

    btn1.addEventListener('click', sliImgBtn1);
    btn2.addEventListener('click', sliImgBtn2);
    document.addEventListener('keyup', checkkey);
    setInterval(removecalss, 1000);
    
    