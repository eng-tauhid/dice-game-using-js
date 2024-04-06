let dice = document.querySelector('.dice');
dice.classList.add('hidden')
 document.querySelector('#score--0').textContent=0;
 document.querySelector('#score--1').textContent=0;
 let activeplayer = 0;
 let cs =0;
 document.querySelector('.btn--roll').addEventListener('click',function(){
    let rendom = Math.trunc(Math.random()*6)+1;
    console.log(rendom)
    dice.classList.remove('hidden')
    dice.src=`dice-${rendom}.png`
    if(rendom !== 1){
        cs += rendom;
        document.querySelector(`#current--${activeplayer}`).textContent=cs;

    }
    else{
        cs = 0;
        document.querySelector(`#current--${activeplayer}`).textContent=cs;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        activeplayer=== 0 ? activeplayer =1 : activeplayer = 0;

    }
 })
