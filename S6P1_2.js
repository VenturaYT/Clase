

function imprimirTabla (base,limite){

    for(let i=0;i<=limite;i++){
        let resultado=base*i;
        console.log(base+" x "+i+" = "+resultado);
    }
}

imprimirTabla(5,10);