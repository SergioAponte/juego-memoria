let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros=numeros.sort(()=>Math.random()-0.5) /*Desordenar los numeros*/
for(i=0;i<numeros.length;i++){
    document.getElementById(`ficha${i}`).value=numeros[i]
    // document.getElementById(`ficha${i}`).textContent=numeros[i]
}
let contador=0
let aciertos=0
let tarjeta1=null
let tarjeta2=null
let flag=true
const tablero=document.querySelector('.board_fichas')
tablero.addEventListener('click', (event)=>{
    if(event.target.className=='btn_ficha'){
        if(flag){
            event.target.textContent=event.target.value
            if(contador<2){
                if(contador==0){
                    tarjeta1=event.target
                    tarjeta1.disabled=true
    
                }
                if(contador==1){
                    tarjeta2=event.target
                    tarjeta2.disabled=true
    
                }
                contador++
               
            }
            if(contador==2){
                if(tarjeta1.value==tarjeta2.value){
                    contador=0
                    aciertos++
                    console.log(`aciertos${aciertos} tarjeta1=${tarjeta1.value} y tarjeta2=${tarjeta2.value}`)
                }
                else{
                    setTimeout(()=>{
                        contador=0
                        tarjeta1.disabled=false
                        tarjeta2.disabled=false
                        tarjeta1.textContent=''
                        tarjeta2.textContent=''
                        tarjeta1=null
                        tarjeta2=null
                        flag=true
                    }, 1000,);
                    flag=false
        }
          
            }
        }
        
    }
})
