//GRab toutes les sections main pour preparer l'animation
const sections = document.querySelectorAll('main');

//Scroll on animation for each section
window.onscroll = () => {
    sections.forEach(sec => {

        //Get the top of the section
        const top = window.scrollY;

        //Get the height of the section
        const height = sec.offsetHeight;

        //Savoir notre offset top
        const offset = sec.offsetTop;

        //Window height
        const windowH = window.innerHeight;
        
        
        // console.log(top);
        //  console.log(height);
        //  console.log(offset);

        
    })
}