function Cesta(exemplo = {}){

    var { 
       altura = 80,
       lado = true 
     } = exemplo;
     
     this.altura = altura;
     this.lado = lado;
 }
 
Cesta.prototype = new Cesta({});
Cesta.constructor = Cesta;

Cesta.prototype.desenhar = function(ctx)
{
    ctx.strokeStyle = "black";

    if(this.lado)
    {
        ctx.fillStyle = "white";
        ctx.fillRect(390,this.altura,10,100);
        ctx.strokeRect(390,this.altura,10,100);
        ctx.fillStyle = "red";
        ctx.fillRect(350,this.altura+80,40,10);
        ctx.strokeRect(350,this.altura+80,40,10);
    }else
    {

    }
}