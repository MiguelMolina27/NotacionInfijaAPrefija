import { createStack } from "../controllers/dependencies.js";

let stackSalida = createStack()
let stackOperadores = createStack()

export const conversion = function(expresion){
    

    expresion = expresion.match(/[0-9]+|[-+*/()]/g)
    expresion = expresion.reverse()

    expresion.forEach(element => {
        switch (element) {
            case "+":
                stackOperadores.push(element)
                break;
            case "-":
                stackOperadores.push(element)
                break;
            case "*":
                stackOperadores.push(element)
                break;
            case "/":
                stackOperadores.push(element)
                break;
            
            case "(":
                stackOperadores.push(element)
                stackOperadores.pop()
                while(stackOperadores.peek() != ")")
                    stackSalida.push(stackOperadores.pop())
                stackOperadores.pop()
                break;
            case ")":
                stackOperadores.push(element)
                break;
            default:
                stackSalida.push(element)
                break;
            
        }
        
    });

    
    
    while(!(stackOperadores.isEmpty()))
        stackSalida.push(stackOperadores.pop())

    expresion = []
    


    while(stackSalida.size() != 0)
        
        expresion.push(stackSalida.pop())  

    let expresionPrefija = expresion.join() 

    expresion.reverse()

   
    
    let resultado
    
    expresion.forEach(element => {
        stackSalida.push(element)
        switch (element) {
            case "+":
                stackSalida.pop()
                resultado = Number(stackSalida.pop())
                resultado += Number(stackSalida.pop())
                stackSalida.push(resultado)
                break;
            case "-":
                stackSalida.pop()
                resultado = Number(stackSalida.pop())
                resultado -= Number(stackSalida.pop())
                stackSalida.push(resultado)
                break;
            case "*":
                stackSalida.pop()
                resultado = Number(stackSalida.pop())
                resultado *= Number(stackSalida.pop())
                stackSalida.push(resultado)
                break;
            case "/":
                stackSalida.pop()
                resultado = Number(stackSalida.pop())
                resultado /= Number(stackSalida.pop())
                stackSalida.push(resultado)
                break;
            default:
                break;
        }
    });

    return [stackSalida.pop(),expresionPrefija]
    

}