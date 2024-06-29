const navDialog=document.getElementById("nav-dialog");

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR= -48*4;
const initialTranslateRTL= 36*4;


function setupIntersectionObserver(element,isLTR,speed){
    const intersectionCallback=(entries)=>{
        const isIntersecting=entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll',scrolHandler);
        }else{
            document.removeEventListener('scroll',scrolHandler);
        }

        console.log(element,isIntersecting);
        // mtlb screen me ha ke screen se bhr on scrolling.
    }
    const intersectionObserver=new IntersectionObserver(intersectionCallback)

    intersectionObserver.observe(element);

    function scrolHandler(){
        const translateX=(window.innerHeight-element.getBoundingClientRect().top)*speed;
        //total scroll me se top se ketna distance hai vo minus keya hai
        //yeh pta lgane ke leye ke y mein ketna scroll hua hai aur x ,mein ab krenge. 
        let totalTranslate=0;
        if(isLTR){
            totalTranslate=translateX+initialTranslateLTR;
        }else{
            totalTranslate=-(translateX+initialTranslateRTL);
        }

        element.style.transform=`translateX(${totalTranslate}px)`;
    }
}
const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');
const line4=document.getElementById('line-4');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,true,0.8);