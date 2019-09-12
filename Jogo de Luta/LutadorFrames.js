function GerenciadorAtaques(exemplo = {})
{
    this.ataqueAtual = [];
    this.ataques = [];
}

GerenciadorAtaques.prototype = new GerenciadorAtaques({});
GerenciadorAtaques.constructor = GerenciadorAtaques;

GerenciadorAtaques.prototype.adicionaAtaque = function(ataqueNovo)
{
    this.ataques.push(ataqueNovo);
}

GerenciadorAtaques.prototype.usaAtaque = function(indiceAtaque)
{
    this.ataqueAtual = this.ataques[indiceAtaque];
}

