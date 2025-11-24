window.onload = () => {
    let si6 = document.getElementById("box6");
    let t1 = document.getElementById("lc");
    let t2 = document.getElementById("lcc");
     let foo = document.getElementById("fo");
     
     let foo3 = document.getElementById("fo3");
     let foo4 = document.getElementById("fo4");
     let foo5 = document.getElementById("fo5");
       let foo6 = document.getElementById("fo6");
     let foo7 = document.getElementById("fo7");
       let ftr = document.getElementById("ft");


       

    let cor = 0;
    let cor2 = 0;
    let cor3 = 0;
    let c1 = true;
    let c2 = false;
    let c3 = false;
    let mod = false;
    let b1 =  document.getElementById("modo");
    let bac = document.body
 
    function loop() {
        si6.style.boxShadow = `0 0 15px rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        ftr.style.boxShadow = `0 0 15px rgba(${cor}, ${cor2},  ${cor3}, 1)`;



        
       



        si6.style.borderColor  = ` rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        t2.style.color  = ` rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        ftr.style.color  = ` rgba(${cor}, ${cor2},  ${cor3}, 1)`;
        ftr.style.borderColor = `rgba(${cor}, ${cor2},  ${cor3}, 1)`;

        if(c1==true){
        cor++;
        }
         if(c2==true){
        cor2++;
        }
        if(c3==true){
        cor3++;
        }
        
       
       
        if (cor<=1 && cor2==0 && cor3==0) 
            {
                c1 = true;
              
            }


            else if (cor > 255 && cor2==0 && cor3==0)
                {
                c1= false
                c2=true;
                c3=false;
            }
             else if (cor > 255 && cor2 > 255 && cor3==0)
                {
                c1= false
                c2=false;
                c3=true;
            }
         else if (cor3>255 && cor >0 && cor2>0){
             c1= false
                c2=false;
                c3=false;
                cor--;
         }
         else if (cor3>255 && cor ==0 && cor2>1){
             c1= false
                c2=false;
                c3=false;
                cor2--;
         }
          else if (cor3>0 && cor2==1 && cor <=0 ){
             c1= false
                c2=false;
                c3=false;
                cor3--;
                
         }
         else if (cor2>=1 && cor3==0 && cor ==0){
                c2=true;   
                if(cor2>255){
                     cor = -1; 
                }
               
               
        }
        else if (cor2>0 && cor <= 0 && cor3==0 ){
                c1= false
                c2=false;
                c3=false;
                
                cor2--;
                
            }
      


        setTimeout(loop, 10);
    }
 let scale = 1.0;
let direction = -0.1; 

function aumenta() {
   
    t1.style.transform = `scale(${scale.toFixed(2)})`;

  
    scale += direction;

   
    if (scale <= 0.40 || scale >= 1.0) {
        direction *= -1;
    }

    setTimeout(aumenta, 60); 
}

aumenta();
    loop();

     function mudar() {
        if (mod) {
            bac.style.backgroundColor = "#000";
            b1.textContent = "Modo Claro"
            si6.style.backgroundColor = "#2d2d2dff"
            bx.style.backgroundColor = "#000"
            bx2.style.backgroundColor = "#000"
            bx3.style.backgroundColor = "#000"
            bx4.style.backgroundColor = "#000"

            bx.style.color = "#FFF"
            bx2.style.color = "#FFF"
            bx3.style.color = "#FFF"
            bx4.style.color = "#FFF"
           foo.style.color = "#cdcdcdff"
          
           foo3.style.color = "#cdcdcdff"
            foo4.style.color = "#cdcdcdff"
            foo6.style.color = "#cdcdcdff"
            foo7.style.color = "#cdcdcdff"
            ftr.style.color = "#cdcdcdff"
            ftr.style.backgroundColor = "#000000ff"
            b1.style.backgroundColor = "#000"
            foo5.style.backgroundColor = "#000000ff"
            b1.style.color = "#ffffffff"
             foo.addEventListener("mouseenter", () => {
    foo.style.color = "#000000ff";
});

foo.addEventListener("mouseleave", () => {
    foo.style.color = "#cdcdcdff";
});


  foo3.addEventListener("mouseenter", () => {
   
    foo3.style.color = "#000000ff";
});

foo3.addEventListener("mouseleave", () => {
    foo3.style.color = "#cdcdcdff";
});

  foo4.addEventListener("mouseenter", () => {
   
    foo4.style.color = "#000000ff";
});

foo4.addEventListener("mouseleave", () => {
    foo4.style.color = "#cdcdcdff";
});






        } else {
            bac.style.backgroundColor = "#FFF";
             b1.textContent = "Modo Escuro"
             si6.style.backgroundColor = "#b8b8b8ff"
              bx.style.backgroundColor = "#FFF"
            bx2.style.backgroundColor = "#FFF"
            bx3.style.backgroundColor = "#FFF"
            bx4.style.backgroundColor = "#FFF"
          
             bx.style.color = "#000"
            bx2.style.color = "#000"
            bx3.style.color = "#000"
            bx4.style.color = "#000"

              foo.style.color = "#281d28ff"
           
             foo3.style.color = "#281d28ff"
             foo4.style.color = "#281d28ff"
            ftr.style.color = "#281d28ff"
            ftr.style.backgroundColor = "#ffffffff"
            foo5.style.backgroundColor = "#ffffffff"
            b1.style.backgroundColor = "#FFF"
            b1.style.color = "#000"
              foo6.style.color = "#281d28ff"
            foo7.style.color = "#281d28ff"
  foo.addEventListener("mouseenter", () => {
   
    foo.style.color = "#ffffffff";
});

foo.addEventListener("mouseleave", () => {
    foo.style.color = "";
});



  foo3.addEventListener("mouseenter", () => {
   
    foo3.style.color = "#ffffffff";
});

foo3.addEventListener("mouseleave", () => {
    foo3.style.color = "";
});

  foo4.addEventListener("mouseenter", () => {
   
    foo4.style.color = "#ffffffff";
});

foo4.addEventListener("mouseleave", () => {
    foo4.style.color = "";
});
             
        }
    }

    function core() {
        mod = !mod;
        mudar();   
    }

    b1.addEventListener("click", core);

    


  
};


