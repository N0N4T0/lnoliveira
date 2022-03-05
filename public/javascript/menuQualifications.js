const qualifications = document.querySelector(".qualification.education")
const curses = document.querySelector(".qualification.curses")

// Cursor pointer disponível só para mudança de menus
// if(qualifications.style.display != 'none'){
//     qualifications.style.cursor = 'default'
// } else if(curses.style.display != 'none'){
//     curses.style.cursor = 'default'   
// }

curses.addEventListener('click', (event)=>{
    showHistoric(event, 'curses')
})
qualifications.addEventListener('click', (event)=>{
    showHistoric(event, 'education')
})

// Mostrar hitórico
function showHistoric(event, formation) {
    console.log(formation)
    // Declare all variables
    let i, tabcontent, qualification;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="qualification" and remove the class "active"
    qualification = document.getElementsByClassName("qualification");
    for (i = 0; i < qualification.length; i++) {
        qualification[i].className = qualification[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(formation).style.display = "flex";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();