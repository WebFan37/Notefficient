//GRab toutes les sections main pour preparer l'animation
const sections = document.querySelectorAll('main');

//Scroll on animation for each section
window.onscroll = () => {
    sections.forEach(sec => {

        //Get the top of the section
        const distanceScroll = window.scrollY;

        //Get the height of the section
        const sectionHeight = sec.offsetHeight;

        //Savoir notre offset top
        const offset = sec.offsetTop - 150;

        //Window height
        const windowH = window.innerHeight;
        
    

        // Si on est dans la section, ajouter classe animation
        if (distanceScroll >= offset && distanceScroll < offset + sectionHeight ){
            sec.classList.add('donnerAnimation');
            // console.log("On est dans la section")
        }else{
            sec.classList.remove('donnerAnimation');
            // console.log("On est pas dans la section")
        }
        
    })
}