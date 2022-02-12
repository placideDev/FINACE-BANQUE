//  pour le bar de haut
 const  navigation = document.querySelector("nav");
            
              window.addEventListener("scroll", () => {
                  if(window.scrollY > 30){
                      navigation.classList.add("nim-nav");
                     
                      
                  }
                  else{
                        navigation.classList.remove("nim-nav");
                       
                  }
              });

// pour le js discussion en ligne
 const  share = document.querySelector("span");
            
              window.addEventListener("scroll", () => {
                  if(window.scrollY > 50){
                      share.classList.add("sh");
                     
                      
                  }
                  
                  else{
                        share.classList.remove("sh");
                       
                  }
              });
 

              const direction = document.querySelector("small");
            
              window.addEventListener("scroll", () => {
                  if(window.scrollY > 30){
                     direction.classList.add("tete");
                     
                      
                  }
                  
                  else{
                        direction.classList.remove("tete");
                       
                  }
              });




            //   pour retrait envoie et depot par serie


        

// pour ajouter une image a la carte credit

 
    function camera(){
        let pld = document.getElementById("pld");
        let camera= document.getElementById("photo");
            camera.style.display="block"
            pld.style.display="none"
    }

     function navbar(){
           let navbars = document.getElementById("navbars")
               navbars.style.display="block"
       }
       function retun(){
           let retre = document.getElementById("navbars")
            retre.style.display="none"
       }