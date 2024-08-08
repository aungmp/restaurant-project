


const imageWrapper= document.querySelector('.image-wrapper');
const imageItems=document.querySelectorAll('.card');
const imageLength=imageItems.length;
const preView= 3;
let totalScroll=0;
const delay= 2000;

imageWrapper.style.setProperty('--preView', preView);
for(let i=0 ; i<preView ;i++){
    imageWrapper.insertAdjacentHTML('beforeend',imageItems[i].outerHTML);
}

let autoScroll= setInterval(scrolling,delay);

function scrolling(){
    totalScroll++;
    if(totalScroll == imageLength + 1){
        clearInterval(autoScroll);
        totalScroll = 1;
        imageWrapper.style.transition= '0s';
        imageWrapper.style.left= 0;
        autoScroll= setInterval(scrolling,delay);;
        
    }
    const widthee= document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
    imageWrapper.style.left= ` -${totalScroll * widthee}px`
    imageWrapper.style.transition= '0.3s';
   
}








//* Start Bar *//
const btnBar=document.querySelector('.bar');
const navBar=document.querySelector('.navbar');

btnBar.addEventListener('click',()=>{
    navBar.classList.toggle('active');
 
})

//* End Bar *//

function revealFunction(){

    window.srOne=ScrollReveal({
        duration:3000,distance:'250px',easing:'ease-in'
    });
    window.srTwo=ScrollReveal({
        duration:2000,distance:'250px',easing:'ease-out'
    });
    window.srThree=ScrollReveal({
        duration:1500,distance:'250px',easing:'ease-out'
    });


    srOne.reveal('.revealOne',{origin:'top',reset:true});
    srTwo.reveal('.revealTwo',{origin:'top',reset:true});
    srThree.reveal('.revealThree',{origin:'top',reset:true});

    srOne.reveal('.pic_one',{origin:'left',reset:true});
    srThree.reveal('.pic_two',{origin:'left',reset:true});
    srOne.reveal('.picFor_right',{origin:'right',reset:true});
 
}

 
 window.addEventListener('load',()=>{
     revealFunction();
 })

//** Start meubtn */

 const menuBtns=document.querySelectorAll('.menu_branchs > *');
 const allMenus=document.querySelectorAll('.menu-box');



menuBtns.forEach(btn =>{
    const btnId=btn.getAttribute("id");

  
     btn.addEventListener('click',()=>{
        allMenus.forEach(mm => {
            
            const menuId=mm.getAttribute("id");
            mm.classList.remove("active");

            if(btnId === menuId){
               mm.classList.add("active");
               
            }
        
            
            
         });
     })
})



//** End meubtn */



const items= document.querySelectorAll('.h2');
const updateCount=(e)=>{
    const value= e.innerText;
    let initialValue=0;

    const increaseCount=setInterval(()=>{
        initialValue += 1;
        e.innerText=`${initialValue}+`;
        
        if(initialValue > value){
            e.innerText=`${value}+`;
            clearInterval(increaseCount);
            return;
        }
       
    })

};
items.forEach((item)=>{
    updateCount(item);
});

//************ */


 

 