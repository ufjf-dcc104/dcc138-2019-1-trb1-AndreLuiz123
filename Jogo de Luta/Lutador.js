function Lutador(exemplo={}){

    var { 
        x = 10,
        y = 10,
 
        w = 70,
        h = 210,
 
        vx = 0,
        vy = 10,

        gravidade = 10,

        soco = 0,
        chute = 0,
 
        cor = "blue"
     } = exemplo;
     
     this.x = x;
     this.y = y;
 
     this.w = w;
     this.h = h;
 
     this.vx = vx;
     this.vy = 10;

     this.gravidade = gravidade;
 
     this.soco = soco;
     this.chute = chute;

     this.podeSocar = true;
     this.podeChutar = false;

     this.cor = cor;
 }
 
 Lutador.prototype = new Lutador({});
 Lutador.constructor = Lutador;
 
 Lutador.prototype.desenhar = function(ctx){
     ctx.fillStyle = this.cor;
     ctx.strokeStyle = "black";
     ctx.fillRect(this.x, this.y,this.w, this.h);
     ctx.strokeRect(this.x, this.y,this.w, this.h);

    if(this.soco>0)
    {
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x+this.w*(3/4), this.y+30,100, 30);
        ctx.strokeRect(this.x+this.w*(3/4), this.y+30,100, 30);
    }

    if(this.chute>0)
    {
        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x+this.w, this.y+this.h/2,this.w, this.h/2);
        ctx.fillRect(this.x+this.w, this.y+this.h/2,this.w, this.h/2);
    }


 }
 
 Lutador.prototype.mover = function(dt){
     this.x = this.x + this.vx*dt;
     this.y = this.y + this.vy*dt;
     
    if(this.y+this.h<430)
    {
        this.vy += this.gravidade;
    }else
    {
        this.vy = 0;
    }

    if(this.soco>0)
    {
        this.soco = this.soco - dt;
    }

    if(this.chute>0)
    {
        this.chute = this.chute - dt;
    }


 }

 Lutador.prototype.pular = function(){
    if(this.vy === 0)
    {
        this.vy = -400;
    }
 }

 Lutador.prototype.darSoco = function(){

    if(this.chute>0)
    {
        this.chute = 0;
    }

    if(this.podeSocar)
    {
        this.soco = 0.1;
        this.podeSocar = false;
    }
    
 }

 Lutador.prototype.darChute = function(){

    if(this.soco>0)
    {
        this.soco = 0;
    }


     if(this.podeChutar)
     {
        this.chute = 0.1;
        this.podeChutar = false;
    }

 }
 
 Lutador.prototype.colidiuCom = function(alvo){
     if(alvo.x + alvo.w < this.x)
     return false;
     if(alvo.x > this.x + this.w)
     return false;
 
     if(alvo.y + alvo.h < this.y)
     return false;
     if(alvo.y > this.h + this.y)
     return false;
     
     return true;
 }
 
 Lutador.prototype.perseguirAlvo = function(alvo){
     this.vx = 20*Math.sign(alvo.x - this.x);
     this.vy = 20*Math.sign(alvo.y - this.y);
 }


 Lutador.prototype.controlePorTeclasDown = function(opcoes){
    this.vx = 0;
    //this.vy = 0;
    if(opcoes.teclas.esquerda){this.vx -= 50;}
    if(opcoes.teclas.direita){this.vx += 50;}
    if(opcoes.teclas.cima){this.pular();}
    if(opcoes.teclas.baixo){/*agachar*/}
    if(opcoes.teclas.Q){this.darSoco();}
   // if(opcoes.teclas.W){this.darSoco();}
   // if(opcoes.teclas.E){this.darSoco();}
    if(opcoes.teclas.A){this.darChute()}
   // if(opcoes.teclas.S){this.podeChutar = false;}
   // if(opcoes.teclas.D){this.podeChutar = false;}

}

Lutador.prototype.controlePorTeclasUp = function(opcoes){
    
    //this.vy = 0;
    if(!opcoes.teclas.Q){this.podeSocar = true;}
  //  if(!opcoes.teclas.W){this.podeSocar = true;}
  //  if(!opcoes.teclas.E){this.podeSocar = true;}
    if(!opcoes.teclas.A){this.podeChutar = true;}
  //  if(!opcoes.teclas.S){this.podeChutar = true;}
  //  if(!opcoes.teclas.D){this.podeChutar = true;}

}