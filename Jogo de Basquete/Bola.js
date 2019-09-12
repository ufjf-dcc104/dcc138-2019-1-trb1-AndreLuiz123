function Bola(exemplo = {}){

    var { 
        x = 20,
        y = 20,
 
        raio = 15,

        vx = 0,
        vy = 0,
 
        cor = "blue",
 
        imune = 0,
        atirando = 0
 
     } = exemplo;
     
     this.x = x;
     this.y = y;

     this.raio = raio;

     this.vx = vx;
     this.vy = vy;
 
     this.cor = cor;
 
     this.gravidade = 10;
 
     this.imune = imune;
     this.atirando = atirando;
     this.coeficienteQuicador = -200; 
     this.forcaHorizontalExterna = 0;
     this.forcaVerticalExterna = 0;
 }
 
 Bola.prototype = new Bola({});
 Bola.constructor = Bola;
 
 Bola.prototype.desenhar = function(ctx){
    ctx.beginPath();
    // center=(50,50) radius=40 angle=0 to 7
    ctx.arc(this.x, this.y, 15, 0, 360);
    ctx.fillStyle = "orange";
    ctx.fill();
	ctx.stroke();
 }
 
 Bola.prototype.mover = function(dt){
     this.x = this.x + this.vx*dt;
     this.y = this.y + this.vy*dt;
     
     if(this.y+this.raio<250)
     {
         this.vy += this.gravidade;
     }else
     {
          this.vy = this.coeficienteQuicador;
          if(this.coeficienteQuicador < 0)
          this.coeficienteQuicador+=50;
          else
          this.coeficienteQuicador = 0;
     }

    
     
    if(this.vx > 0)
    this.forcaHorizontalExterna -=1;

    if(this.vx < 0)
    this.forcaHorizontalExterna +=1;

    if(this.vx = 0)
    this.forcaHorizontalExterna = 0;
   
    if((this.vx<=0 && this.x-this.raio<0) || (this.vx>=00 && this.x+this.raio>=400))
    {
        this.forcaHorizontalExterna =-1*this.forcaHorizontalExterna;
        this.vx =-1*this.vx;
    }

   /* if(this.vy < 0)
    this.forcaVerticalExterna -=1;

    if(this.vy > 0)
    this.forcaVerticalExterna +=1;

    if(this.vy = 0)
    this.forcaVerticalExterna = 0;*/
  
  /*  if((this.vy<=0 && this.y-this.raio<0) || (this.vy>=00 && this.y+this.raio>=400))
   {
       this.forcaVerticalExterna =-1*this.forcaVerticalExterna;
       this.vy =-1*this.vy;
   }*/
    
    this.vx += this.forcaHorizontalExterna;

 }

 Bola.prototype.empurrar = function(forca){
   
   
   this.forcaHorizontalExterna+= forca;
   //this.vx = forca;
 }
 
 Bola.prototype.empurrarVerticalmente = function(forca){
    this.vy +=forca;
 }

 Bola.prototype.refletir = function(){
    this.forcaHorizontalExterna =-1*this.forcaHorizontalExterna;
    this.vx =-1*this.vx;
}
Bola.prototype.refletirVerticalmente = function(){
   // this.forcaHorizontalExterna =-1*this.forcaHorizontalExterna;
    this.vy =-1*this.vy;
}
 
 Bola.prototype.colidiuCom = function(alvo){
     if(alvo.x + alvo.w < this.x - this.raio)
     return false;
     if(alvo.x > this.x + this.raio)
     return false;
 
     if(alvo.y + alvo.h < this.y - this.raio)
     return false;
     if(alvo.y > this.raio + this.y)
     return false;
     
     return true;
 }
 


 Bola.prototype.pular = function(){
     if(this.y + this.h >= 250)
     {
         this.vy = -200;
     }
  }

 Bola.prototype.quicar = function(){
    if(this.coeficienteQuicador <=0)
    this.coeficienteQuicador = -200;
}
 

 
 
 