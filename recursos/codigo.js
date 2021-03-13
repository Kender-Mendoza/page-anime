var nombre;
var numero;

for(var i=0;i<=nombre.length;i++)
{
    numero=maht.floor(maht.ramdom()*10);

    if(nombre.length > numero){
        console.log("Si se cumple esta es por que cambiaste la variable a false");
    }else if(nombre.leng < numero && numero < 10 ){
        console.log("Yo me muestro porque la variable esta en true");
    }else{
        console.log("LA CAGASTE");
    }
}
