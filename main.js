const searchicon1 = document.getElementById("searchicon1");
const srchicon1 = document.getElementById("srchicon1");
const search1 = document.getElementById("searchinput1");


searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});



const searchicon2 = document.getElementById("searchicon2");
const srchicon2 = document.getElementById("srchicon2");
const search2 = document.getElementById("searchinput2");


searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});


const bar =document.querySelector('.fa-bars');
const cross = document.getElementById("hdcross");
const headerbar = document.querySelector('.headerbar');



bar.addEventListener('click', function(){
    // تحريك القائمة للداخل
    headerbar.style.right = "0%";
    
    // إظهار علامة الإغلاق بتأثير ناعم
    setTimeout(()=> {
        cross.style.display = 'block';
        cross.style.opacity = '0';
        // تفعيل التلاشي بعد إعطاء المتصفح لحظة للتعرف على وجود العنصر
        setTimeout(() => { cross.style.opacity = '1'; }, 10);
    }, 400); // 400ms لتنتظر انتهاء حركة القائمة
});

cross.addEventListener('click', function(){
    headerbar.style.right = '-100%';
    cross.style.display = 'none';
});