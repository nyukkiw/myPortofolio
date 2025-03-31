// sideNavbar
function showContent(sectionId) {
    
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

   
    document.getElementById(sectionId).style.display = 'block';
}
// end sideNavbar 

// for logo skill
function showMessage(title,desc){
    const popup = document.getElementById('popUp');
    
    
    if (popup.timeoutId) {
        clearTimeout(popup.timeoutId);
    }
    
    
    popup.innerHTML = `
        <span class="close-btn" onclick="hidePopup()">×</span>
        <h3>${title}</h3>
        <p>${desc}</p>
    `;
    
    
    popup.style.display = 'block';
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
    
    
    popup.timeoutId = setTimeout(() => {
        hidePopup();
    }, 5000);
}

function hidePopup() {
    const popup = document.getElementById('popUp');
    popup.classList.remove('show');
    
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); 
}

//salin email v2
function copyEmail(e) {
    e.preventDefault();
    const email = 'valentinobanyu0@gmail.com';
   
    // salin ke clipboard
    navigator.clipboard.writeText(email).then(()=>{
        const tooltip=document.getElementById('tooltip');
        tooltip.style.opacity='1';

        setTimeout(()=>{
            tooltip.style.opacity='0';
        },2000);

    }).catch(err=>{
        console.error('Gagal menyalin:',err);
        document.getElementById('tooltip').textContent='Gagal menyalin, silahkan salin manual:',email;
        tooltip.style.opacity='1';

        setTimeout(()=>{
            tooltip.style.opacity='0';
        },10000);
    })


  }
// end salin email v2

// end logo skill


// for hamburger menu
const sideNav=document.querySelector('.sideNavbar');

// ketika humberger-menu diklik
document.querySelector('#hamburger-menu').onclick=()=>{
    sideNav.classList.toggle('active');
}
// end hambuger menu

