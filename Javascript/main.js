//========================== GLOBAL SCROLL EVENT =====================//
window.onscroll = () => {
    handleScrollNote();
    handleScrollDesign();
    handleScrollUI();
    handleScrollVideo();
};

//========================== PAGE INTRO (NOTE) =====================//
const UINote = document.querySelector('.UI-Note');
const divNote = document.querySelector('.UI-Note div');

function handleScrollNote() {
    const scrollY = window.scrollY;
    const offsetUI = UINote.offsetTop - 150;
    const heightNote = UINote.offsetHeight;

    //Ajouter animation apres 30% de la section
    if (scrollY >= offsetUI + heightNote * 0.3) {
        divNote.classList.add('donnerAnimation');
        divNote.style.display = "flex";
    } else {
        divNote.classList.remove('donnerAnimation');
        divNote.style.display = "none";
    }

    //Animation apres 50% de la section
    if (scrollY >= offsetUI + heightNote * 0.5) {
        divNote.classList.add('animationCouleur');
    } else {
        divNote.classList.remove('animationCouleur');
    }
}

//========================== PAGE DESIGN =====================//
const sectionDesign = document.querySelector('.Design');
const h2 = document.querySelector('.Design div h2');
const paragraphes = document.querySelectorAll('.Design div p');


function handleScrollDesign() {
    const scrollY = window.scrollY;
    const offset = sectionDesign.offsetTop - 150;
    const heightDesign = sectionDesign.offsetHeight;


    //Ajouter animation lors qu'on rentre dans la section
    if (scrollY >=  offset + heightDesign * 0.05) {
        h2.classList.add('donnerAnimationH2');
        h2.style.display = "flex";
        paragraphes.forEach(paragr => paragr.classList.add("donnerAnimationPar"));
        paragraphes.forEach(paragr => paragr.style.display = "flex");
    } else {
        h2.classList.remove('donnerAnimationH2');
        h2.style.display = "none";

        paragraphes.forEach(paragr => paragr.classList.remove("donnerAnimationPar"));
        paragraphes.forEach(paragr => paragr.style.display = "none");
    }
}

//========================== PAGE UI =====================//
const sectionUI = document.querySelector('.UI-Description');
const images = document.querySelectorAll('.UI-Description img');

function handleScrollUI() {
    const scrollY = window.scrollY;
    const offsetUI = sectionUI.offsetTop - 150;
    const heightUI = sectionUI.offsetHeight;
    // const pointAnimation = offsetUI + heightUI * 0.5; // 50% of the section

    // Image animation
    if (scrollY >=  offsetUI + heightUI * 0.05) {
        images.forEach((img, index) => {
            setTimeout(() => img.classList.add('donnerAnimationUI'), index * 400);
            img.style.display = "grid";
        });
    } else {
        images.forEach(img => img.classList.remove('donnerAnimationUI'));
        images.forEach(img => img.style.display = "none");
    }
}


//========================== PAGE VIDEO =====================//
//===========================================================//

//Section Video
const sectionVideo = document.querySelector('.presentation-video');

//Video 
const video = document.querySelector('.presentation-video .holder video');

//Video pause on load
video.pause();


function handleScrollVideo() {
    const distance = window.scrollY - sectionVideo.offsetTop;
    const totalDistance = sectionVideo.clientHeight - window.innerHeight;

    let percentage = distance / totalDistance;
    percentage = Math.max(0, percentage);
    percentage = Math.min(percentage, 1);


    if (video.duration > 0){
        video.currentTime = video.duration * percentage;
    }
};

scroll()
window.addEventListener('scroll', scroll);


