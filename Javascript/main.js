//==========================PAGE INTRO =====================//
//===========================================================//


//GRab la section pour preparer l'animation
const UINote = document.querySelector('.UI-Note');

const divNote = document.querySelector('.UI-Note div');
//Scroll on animation for each section
window.onscroll = () => {

        //Get the top of the section
        const distanceScrollUI = window.scrollY;

        //Get the height of the section
        const heightNote = UINote.offsetHeight;

        //Savoir notre offset top
        const offsetUI = UINote.offsetTop - 150;

        
    

        // Si on est dans la section, ajouter classe animation
        if (distanceScrollUI >= offsetUI && distanceScrollUI < offsetUI + heightNote ){
            divNote.classList.add('donnerAnimation');
           
        }else{
            divNote.classList.remove('donnerAnimation');

        }
        

}


//==========================PAGE DESIGN =====================//
//===========================================================//
//Grab 2e section
const sectionDesign = document.querySelector('.Design');

//Grab les paragraphes et h2 pour animation 
const h2 = document.querySelector('.Design div h2');
const paragraphes = document.querySelectorAll('.Design div p');

//grabd l'image
const image = document.querySelector('.Design img');

//Scroll on animation on Design
window.onscroll = () => {
    const distanceScroll = window.scrollY;
    const heightDesign = sectionDesign.offsetHeight;
    const offset = sectionDesign.offsetTop - 150;
   

    // Si on est dans la section, ajouter classe animation
    if (distanceScroll >= offset && distanceScroll < offset + heightDesign ){
        h2.classList.add('donnerAnimationH2');

        image.classList.add('AnimationImg');

        paragraphes.forEach(paragr => {
            paragr.classList.add("donnerAnimationPar")
        })
        
    }else{
        h2.classList.remove('donnerAnimationH2');

        image.classList.remove('AnimationImg');

        paragraphes.forEach(paragr => {
            paragr.classList.remove("donnerAnimationPar")
        })
      
    }
}