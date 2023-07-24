document.addEventListener("DOMContentLoaded", () => {
    const message = `
         _                        
         \`*-.                    
          )  _\`-.                 
         .  : \`. .                
         : _   '  \\               
         ; *\` _.   \`*-.          
         \`-.-'          \`-.       
           ;       \`       \`.     
           :.       .        \\    
           . \\  .   :   .-'   .   
           '  \`+.;  ;  '      :   
           :  '  |    ;       ;-. 
           ; '   : :\\\`-:     _.\\\`* ;
        .*' /  .*' ; .*\`- +'  \`*' 

        Art by Blazej Kozlowski
        Found at asciiart.eu
  `;
  
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
  });