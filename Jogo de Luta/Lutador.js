function Lutador(exemplo={}){

    var { 
        x = 10,
        y = 10,
 
        w = 70,
        h = 210,
 
        vx = 0,
        vy = 0,

        gravidade = 10,
 
        cor = "blue"
     } = exemplo;
     
     this.x = x;
     this.y = y;
 
     this.w = w;
     this.h = h;
 
     this.vx = vx;
     this.vy = vy;

     this.gravidade = gravidade;
 
     //Golpes
     this.ataque = 0;
     this.soco = 0;
     this.chute = 0;
     this.direto = 0;
     this.cruzado = 0;
     this.gancho = 0;

     this.podeSocar = true;
     this.podeDireto = true;
     this.podeCruzado = true;
     this.podeGancho = true;
     this.podeChutar = true;

     //Estados
     this.estadoNormal = true;
     this.estadoAgachado = false;
     this.estadoAtacando = false;

     //Corpo
      

     this.cor = cor;
 }
 
 Lutador.prototype = new Lutador({});
 Lutador.constructor = Lutador;
 

 Lutador.prototype.desenhaCabeca = function(ctx, maisX=0, maisY=0){
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x+ this.w - 30 + maisX, this.y+maisY,30, 30);
    ctx.strokeRect(this.x+ this.w - 30 + maisX, this.y+maisY,30, 30);
 }
 Lutador.prototype.desenhaTronco = function(ctx, maisX=0, maisY=0, maisW=0, maisH=0){
    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x+maisX, this.y + 30+maisY,this.w+maisW, this.h/2+maisH);
    ctx.strokeRect(this.x+maisX, this.y + 30+ maisY,this.w+maisW, this.h/2+maisH);
 }
 Lutador.prototype.desenhaPernas = function(ctx, maisX=0, maisY=0, maisW=0, maisH=0){
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x+maisX, this.y +maisY,this.w+maisW, this.h/2+maisH);
    ctx.strokeRect(this.x+maisX, this.y +maisY,this.w+maisW, this.h/2+maisH);
 }


 Lutador.prototype.desenhar = function(ctx){

    
    if(this.estadoNormal && !this.estadoAgachado)
    {
        //Cabeça
        this.desenhaCabeca(ctx,0,0);
        //Tronco
        this.desenhaTronco(ctx,0,0,0,-30);
        //Pernas
        this.desenhaPernas(ctx,-10,this.h/2, 20,0);
    }

    if(this.estadoAgachado)
    {
        //Cabeça
        this.desenhaCabeca(ctx,30,this.h/2-30);
        //Tronco
        this.desenhaTronco(ctx,30,this.h/2-50,0,-30);
        //Pernas
        this.desenhaPernas(ctx,-10,this.h/2, 20,0);
    }

    
    if(!this.estadoAgachado)
    {
        if(this.soco>0)
        {
           /* //Cabeça
            this.desenhaCabeca(ctx,-15,0);
            //Tronco
            this.desenhaTronco(ctx,0,30,0,-30);
            //Pernas
            this.desenhaPernas(ctx,-10,this.h/2, 30,0);*/
            //Cabeça
            if(!this.estadoAgachado)
            {
                this.desenhaCabeca(ctx,0,0);
                //Tronco
                this.desenhaTronco(ctx,0,0,0,-30);
                //Pernas
                this.desenhaPernas(ctx,-10,this.h/2, 20,0);
                ctx.fillStyle = "red";
                ctx.strokeStyle = "black";
                ctx.fillRect(this.x+this.w*2.5/4, this.y+30,130, 30);
                ctx.strokeRect(this.x+this.w*2.5/4, this.y+30,130, 30);
            }
    
        }
    
        if(this.direto>0)
        {
            //Cabeça
            this.desenhaCabeca(ctx,15,0);
            //Tronco
            this.desenhaTronco(ctx,15,0,0,-30);
            //Pernas
            this.desenhaPernas(ctx,5,this.h/2, 20,0);
            ctx.fillStyle = "purple";
            ctx.strokeStyle = "black";
            ctx.fillRect(this.x+this.w, this.y+30,130, 30);
            ctx.strokeRect(this.x+this.w, this.y+30,130, 30);
        }
    
        if(this.cruzado>0)
        {
            //Cabeça
            this.desenhaCabeca(ctx,10,0);
            //Tronco
            this.desenhaTronco(ctx,10,0,0,-30);
            //Pernas
            this.desenhaPernas(ctx,0,this.h/2, 20,0);
            ctx.fillStyle = "red";
            ctx.strokeStyle = "black";
            ctx.fillRect(this.x+this.w*(3/4), this.y+10,100, 30);
            ctx.strokeRect(this.x+this.w*(3/4), this.y+10,100, 30);
        }
    
        if(this.gancho>0)
        {
            //Cabeça
            this.desenhaCabeca(ctx,10,0);
            //Tronco
            this.desenhaTronco(ctx,10,0,0,-30);
            //Pernas
            this.desenhaPernas(ctx,0,this.h/2, 20,0);        
    
            ctx.fillStyle = "red";
            ctx.strokeStyle = "black";
            ctx.fillRect(this.x+this.w*(3/4), this.y+this.h/2-20,100, 30);
            ctx.strokeRect(this.x+this.w*(3/4), this.y+this.h/2-20,100, 30);
    
        }
    
        if(this.chute>0)
        {
            ctx.fillStyle = "red";
            ctx.strokeStyle = "black";
            ctx.fillRect(this.x+this.w, this.y+this.h/2,this.w, this.h/2);
            ctx.fillRect(this.x+this.w, this.y+this.h/2,this.w, this.h/2);
        }
    
    }else
    {
        if(this.soco>0 || this.chute>0 || this.gancho>0 || this.direto>0 || this.cruzado>0)
        {
            //Cabeça
            this.desenhaCabeca(ctx,30,this.h/2-30);
            //Tronco
            this.desenhaTronco(ctx,30,this.h/2-50,0,-30);
            //Pernas
            this.desenhaPernas(ctx,-10,this.h/2, 20,0);
            ctx.fillStyle = "red";
            ctx.strokeStyle = "black";
            ctx.fillRect(this.x + 60,this.y+this.h/2-30,130, 30);
            ctx.strokeRect(this.x + 60,this.y+this.h/2-30,130, 30);
        }
    
    }
    
    this.estadoNormal = true;
 }
 
 Lutador.prototype.mover = function(dt){

     this.x = this.x + this.vx*dt;
     this.y = this.y + this.vy*dt;


     if(this.ataque>0)
     {
        this.estadoAtacando = true;
        this.ataque = this.ataque - dt;
     }
     else
     this.estadoAtacando = false;
     
    if(this.y+this.h<430)
    {
        this.vy += this.gravidade;
    }else
    {
        this.vy = 0;
    }

    if(this.soco>0)
    {
        this.estadoNormal = false;   
        this.estadoAtacando = true;
        this.soco = this.soco - dt;
    }

    if(this.chute>0)
    {
        this.estadoNormal = false;
        this.estadoAtacando = true;
        this.chute = this.chute - dt;
    }

    if(this.direto>0)
    {
        this.estadoNormal = false;
        this.estadoAtacando = true;
        this.direto = this.direto - dt;
    }

    if(this.cruzado>0)
    {
        this.estadoNormal = false;
        this.estadoAtacando = true;
        this.cruzado = this.cruzado - dt;
    }

    if(this.gancho>0)
    {
        this.estadoNormal = false;
        this.estadoAtacando = true;
        this.gancho = this.gancho - dt;
    }

   // console.log(this.estadoAtacando);
  
 }

 Lutador.prototype.pular = function(){
    if(this.vy === 0)
    {
        this.vy = -400;
    }
 }

 Lutador.prototype.darSoco = function(){


    if(this.podeSocar && !this.estadoAtacando)
    {
        this.soco = 0.2;
        this.podeSocar = false;
        this.ataque = this.soco + 0.3;
    }
    
 }

 Lutador.prototype.darDireto = function(){


    if(this.podeDireto && !this.estadoAtacando)
    {
        this.direto = 0.2;
        this.podeDireto = false;
        this.ataque = this.direto + 0.3;
    }
    
 }

 Lutador.prototype.darCruzado = function(){


    if(this.podeCruzado && !this.estadoAtacando)
    {
        this.cruzado = 0.5;
        this.podeCruzado = false;
        this.ataque = this.cruzado + 0.5;
    }
    
 }

 Lutador.prototype.darGancho = function(){


    if(this.podeGancho && !this.estadoAtacando)
    {
        this.gancho = 0.5;
        this.podeGancho = false;
        this.ataque = this.gancho + 0.5;
    }
    
 }

 Lutador.prototype.darChute = function(){


     if(this.podeChutar && !this.estadoAtacando)
     {
        this.chute = 0.5;
        this.podeChutar = false;
        this.ataque = this.chute + 0.5;
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
    if(opcoes.teclas.esquerda && !this.estadoAgachado){this.vx -= 50;}
    if(opcoes.teclas.direita && !this.estadoAgachado){this.vx += 50;}
    if(opcoes.teclas.cima && !this.estadoAtacando){this.pular();}
    if(opcoes.teclas.baixo && !this.estadoAtacando){this.estadoAgachado = true;}
    
    if(opcoes.teclas.Q){this.darSoco();}
    else
    if(opcoes.teclas.W){this.darDireto();}
    else
    if(opcoes.teclas.E){this.darCruzado();}
    else
    if(opcoes.teclas.A){this.darGancho()}
   // if(opcoes.teclas.S){this.podeChutar = false;}
   // if(opcoes.teclas.D){this.podeChutar = false;}

}

Lutador.prototype.controlePorTeclasUp = function(opcoes){
    
    //this.vy = 0;
    if(!opcoes.teclas.Q){this.podeSocar = true;}
    if(!opcoes.teclas.W){this.podeDireto = true;}
    if(!opcoes.teclas.E){this.podeCruzado = true;}
    if(!opcoes.teclas.A){this.podeGancho = true;}
    if(!opcoes.teclas.baixo){this.estadoAgachado = false;}
  //  if(!opcoes.teclas.S){this.podeChutar = true;}
  //  if(!opcoes.teclas.D){this.podeChutar = true;}

}