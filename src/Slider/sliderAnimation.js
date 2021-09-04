function sliderAnimation(slideWrapper, field, slidesRefs, click = false, back = false) {

    let width = window.getComputedStyle(slideWrapper).width;
    let offset = 0;
    let touchStart = 0;
    let touchEnd = 0;
    field.style.width = "300%";
    let slide = 0;
  
    field.addEventListener('touchmove', (e)=> {
        slide += 1;
    })
    field.addEventListener('touchstart', (e)=>{
        touchStart = e.touches[0].clientX;
    })
    field.addEventListener('touchend', (e)=> {
        touchEnd = e.changedTouches[0].clientX;
        let direction = touchStart - touchEnd;
        if(direction > 50 ){
        if(offset == +width.match(/\d/g).join('') * (slidesRefs.length - 1) && slide > 5){
            offset = 0;
        }
        else{
            offset += +width.match(/\d/g).join('');
        }
        field.style.transform = `translateX(-${offset}px)`
    } else if(direction < -50 ){
        if(offset == 0){
            offset = width.match(/\d/g).join('') * 2;
        }
        else{
            offset -= width.match(/\d/g).join('');
        }
        field.style.transform = `translateX(-${offset}px)`
    }
        slide = 0;
    })

    if(click){
        offset += +width.match(/\d/g).join('');
        field.style.transform = `translateX(-${offset}px)`
    }
    if(back){
        offset = 0;
        field.style.transform = `translateX(-${offset}px)`
    }
    
}
export default sliderAnimation