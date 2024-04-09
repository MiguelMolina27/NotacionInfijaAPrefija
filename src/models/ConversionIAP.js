import { Stack } from "./Stack.js";

export class ConversionIAP {
    #stackSalida
    #stackOperadores

    constructor(){
        this.#stackOperadores = new Stack()
        this.#stackSalida = new Stack()
    }

    infijoAPrefijo(expresion){
        expresion = expresion.match(/[0-9]+|[-+*/()]/g)
        expresion = expresion.reverse()

        expresion.forEach(element => {
            switch (element) {
                case "+":
                    this.#stackOperadores.push(element)
                    break;
                case "-":
                    this.#stackOperadores.push(element)
                    break;
                case "*":
                    this.#stackOperadores.push(element)
                    break;
                case "/":
                    this.#stackOperadores.push(element)
                    break;
                
                case "(":
                    this.#stackOperadores.push(element)
                    this.#stackOperadores.pop()
                    while(this.#stackOperadores.peek() != ")")
                        this.#stackSalida.push(this.#stackOperadores.pop())
                    this.#stackOperadores.pop()
                    break;
                case ")":
                    this.#stackOperadores.push(element)
                    break;
                default:
                    this.#stackSalida.push(element)
                    break;
                
            }
            
        });

        
        
        while(!(this.#stackOperadores.isEmpty()))
            this.#stackSalida.push(this.#stackOperadores.pop())

        expresion = []
        


        while(this.#stackSalida.size() != 0)
            
            expresion.push(this.#stackSalida.pop())  

        let expresionPrefija = expresion.join() 

        expresion.reverse()

    
        
        let resultado
        
        expresion.forEach(element => {
            this.#stackSalida.push(element)
            switch (element) {
                case "+":
                    this.#stackSalida.pop()
                    resultado = Number(this.#stackSalida.pop())
                    resultado += Number(this.#stackSalida.pop())
                    this.#stackSalida.push(resultado)
                    break;
                case "-":
                    this.#stackSalida.pop()
                    resultado = Number(this.#stackSalida.pop())
                    resultado -= Number(this.#stackSalida.pop())
                    this.#stackSalida.push(resultado)
                    break;
                case "*":
                    this.#stackSalida.pop()
                    resultado = Number(this.#stackSalida.pop())
                    resultado *= Number(this.#stackSalida.pop())
                    this.#stackSalida.push(resultado)
                    break;
                case "/":
                    this.#stackSalida.pop()
                    resultado = Number(this.#stackSalida.pop())
                    resultado /= Number(this.#stackSalida.pop())
                    this.#stackSalida.push(resultado)
                    break;
                default:
                    break;
            }
        });

        return [this.#stackSalida.pop(),expresionPrefija]
        }
}