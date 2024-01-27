const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click',()=>{
    menu.classList.add('open');
})

closeButton.addEventListener('click',()=>{
    menu.classList.remove('open');
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Function to handle changes in media query matches
const headerHeading = document.querySelector('.header-left h2');
function handleMatches(mediaQuery) {
    if (mediaQuery.matches) {
      // Media query matches, execute your JavaScript code here
      headerHeading.innerHTML = 'Malla Reddy College Of Engineering and Technology';
      // Trigger your JavaScript functions or perform actions
    } else {
      // Media query doesn't match, handle this case if needed
      headerHeading.innerHTML = 'MRCET';
    }
  }
  
  // Define media queries to match
  const mediaQuery = window.matchMedia('(min-width: 680px)');
  
  // Call the handler initially
  handleMatches(mediaQuery);
  mediaQuery.addEventListener('change',()=>handleMatches(mediaQuery));
/*   
  // Add a listener to handle changes
  mediaQuery.addListener(handleMatches); */
  