function Sprite(exemplo = {}){

   var { 
       x = 10,
       y = 10,

       w = 30,
       h = 30,

       vx = 0,
       vy = 0,

       cor = "blue",

       imune = 0,
       atirando = 0

    } = exemplo;
    
    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;

    this.vx = vx;
    this.vy = vy;

    this.cor = cor;

    this.gravidade = 10;

    this.imune = imune;
    this.atirando = atirando;
}

Sprite.prototype = new Sprite({});
Sprite.constructor = Sprite;

Sprite.prototype.desenhar = function(ctx){
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = "black";

    if(this.imune > 0){
        ctx.globalAlpha = 0.5*Math.cos(60*this.imune);
    }

    ctx.fillRect(this.x, this.y,this.w, this.h);
    ctx.strokeRect(this.x, this.y,this.w, this.h);
    ctx.globalAlpha = 1;
}

Sprite.prototype.mover = function(dt){
    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;
    
    if(this.y+this.h<250)
    {
        this.vy += this.gravidade;
    }else
    {
        this.vy = 0;
    }

    if(this.y + this.h + 1 > 250)
    {
        this.y = 250 - this.h;
    }

}

Sprite.prototype.colidiuCom = function(alvo){
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

Sprite.prototype.perseguirAlvo = function(opcoes){
    this.vx = 20*Math.sign(opcoes.alvo.x - this.x);
    this.vy = 20*Math.sign(opcoes.alvo.y - this.y);
}

Sprite.prototype.pular = function(){
    if(this.y + this.h >= 250)
    {
        this.vy = -200;
    }
 }

Sprite.prototype.controlePorTeclas = function(opcoes){
    this.vx = 0;
    if(opcoes.teclas.esquerda){if(this.x>0)this.vx -= 50;}
    if(opcoes.teclas.direita){if(this.x+this.w<400)this.vx += 50;}
    if(opcoes.teclas.cima){this.pular()}
    //if(opcoes.teclas.baixo){this.vy += 50;}
    
}

Sprite.prototype.inteligenciaArtificial = function(bola, gol){

    if(bola.x - this.x != 0)
    this.vx = 50*Math.sign(bola.x - this.x);
    else
    this.vx = 0;


    if(Math.abs(bola.x - gol.x) > Math.abs(gol.x - this.x))
        this.pular();
    else
    {
        if(Math.abs(bola.x - this.x) < 20)
            this.pular();
    }
}

