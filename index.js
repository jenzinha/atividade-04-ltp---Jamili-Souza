class Retangulo {
  constructor(altura, largura){
    this.altura = altura;  
    this.largura = largura;
  }
  calcularArea(){
     return this.largura * this.altura 
  }
  area(){
    return this.calcularArea();
  }
}

let primeiroObjeto = new Retangulo("10", "10");
console.log(primeiroObjeto.area())

let segundoObjeto = new Retangulo("60", "30");
console.log(segundoObjeto.area())

let terceiroObjeto = new Retangulo("10", "20");
console.log(terceiroObjeto.area())
