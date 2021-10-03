
let notaLetra = ['A','B','C','D','E','F'];
function prom(n){
    if(n>=90){
        console.log(notaLetra[0]);
    }else{
        if(n<=89 && n>=80){
            console.log(notaLetra[1]);
        }else{
            if(n<=79 && n>=70){
                console.log(notaLetra[2]);
            }else{
                if(n<=69 && n>=60){
                    console.log(notaLetra[3]);
                }else{
                    if(n<=59 && n>=50){
                        console.log(notaLetra[4]);
                    }else{
                        if(n<50){
                            console.log(notaLetra[5]);
                        }
                    }
                }
            }
        }
    }
}


prom(100);
prom(80);
prom(59);