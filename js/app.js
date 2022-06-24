const arrow = document.querySelector(".arrow");
const scroll = document.querySelector(".scroll");
const contact = document.querySelectorAll(".contact");
const popup = document.querySelectorAll(".popup");
const btn = document.querySelectorAll(".btn");
const cardExtra = document.querySelectorAll(".card-extra");


// ARROW SCROLL MSG

arrow.addEventListener('mouseover', () => {
    
    if(!scroll.classList.contains("show")) {
        scroll.classList.add("show");
    }

});

arrow.addEventListener('mouseout', () => {
    if(scroll.classList.contains("show")) {
        scroll.classList.remove("show");
    }

});


// CONTACT SECT

for(let i=0; i < 3; i++){
    contact[i].addEventListener('mouseover', () => {
        
        if(!popup[i].classList.contains("show")) {
            popup[i].classList.add("show");
        }
        

    });

    contact[i].addEventListener('mouseout', (e) => {
        
        if(popup[i].classList.contains("show")) {
            popup[i].classList.remove("show");
        }
       
    
    });

    popup[i].addEventListener('mouseover', () => {
        
        if(!popup[i].classList.contains("show")) {
            popup[i].classList.add("show");
        }
        

    });

    popup[i].addEventListener('mouseout', (e) => {
        
        if(popup[i].classList.contains("show")) {
            popup[i].classList.remove("show");
        }
       
    
    });
    
}

// EXTRA INFO ON CARDS
for(let i=0; i< btn.length; i++) {

btn[i].addEventListener('click', () => {

    if(!cardExtra[i].classList.contains("show")) {
        cardExtra[i].classList.add("show");
        btn[i].innerHTML= "learn less";
    } else {
        cardExtra[i].classList.remove("show");
        btn[i].innerHTML= "learn more";
    }
});

}




