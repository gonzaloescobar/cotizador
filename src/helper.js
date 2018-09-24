export function obtenerDiferenciaAnio(year) {
    return new Date().getFullYear() - year;
 }
 
 export function calcularMarca( modelo ) {
     let incremento;
 
     switch (modelo) {
         case 'peugeot':
             incremento = 1.30;
             break;
         case 'ford':
             incremento = 1.15;
             break;
         case 'chevrolet':
             incremento = 1.05;
             break;
        case 'fiat':
             incremento = 1.05;
             break;
         default:
             break;
     }
 
     return incremento;
 }
 export function obtenerPlan( plan ) {
     return (plan === 'basico') ? 1.20 : 1.50;
 }
 export function primeraMayuscula(texto) {
     return texto.charAt(0).toUpperCase() + texto.slice(1);
 } 