function Gol(exemplo = {}){

    var { 
       x = 370,
       y = 151,
       h = 100,
       w = 30 
     } = exemplo;
     
     this.x = x;
     this.y = y;
     this.h = h;
     this.w = w;
 }
 
Gol.prototype = new Gol({});
Gol.constructor = Gol;

Gol.prototype.desenhar = function(ctx)
{
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.fillRect(this.x,this.y,this.w,this.h);
    ctx.strokeRect(this.x,this.y,this.w,this.h);
}

Gol.prototype.verificaGol = function(bola)
{
    if(bola.colidiuCom(this))
    {
        if(bola.y - bola.raio > this.y && bola.y + bola.raio < this.y + this.h)
            return true;
        else
            bola.refletir();
    }

    return false;
}