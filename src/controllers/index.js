import { conversion } from "../models/conversionInAPre.js"

const convert = document.getElementById("button__button-convert")
convert.addEventListener("click",()=>{
    const input = document.getElementById("input__input-expresion").value
    const outputExpresion = document.getElementById("paragraph__paragraph-salidaExpresion")
    const outputEvaluacion = document.getElementById("paragraph__paragraph-salidaEvaluacion")

    let salidas = conversion(input)
    
    outputExpresion.innerText = "Expresion prefija: " + salidas[1]
    outputEvaluacion.innerText = "Resultado: " + salidas[0]
    
})