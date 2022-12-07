export default class suggest {
    suggestions: string[];
    constructor() {
        this.suggestions = [];
    }

    addSuggestions(suggestion: string): void {
        // ? Primero checar si alguno de los habitos tiene la personalidad del usuario
        // ? Revisar las letras de los habitos en caso de una X rebuscar cercania, si coincide con su personalidad tomarlo.
        // ? Regresar todos los habitos que puedan ayudar, si son mas de 6 hacer un random y mandarlos directo a guardar (solo 3) 

        // ? checar de vuelta, esta vez por cercania en cada letra y regresar 4 habitos mas cercanos al usuario
        // ? aun si estos no coinciden con la personalidad

        // ? hacer un random de la seleccion para solo guardar 3 y enviarlos como sugeridos.
        // ? en caso de no juntar 3,  tomar de los ultimos 3?
        // ? los numeros 50 se toman como un positivo a guardar?
        // ? sacar los datos vactualoes de MBTI del usuario y convertirlos a porcentages. 

        /* El algoritmo de cercania debe ser algo asi, sacar el porcentage de los datos del usuario(tabla MBTI)
        let x = 23;
        let array = [5, 10, 15, 20, 25, 30, 35];
        let closest = array.sort( (a, b) => Math.abs(x - a) - Math.abs(x - b) )[0]; 
        */

        this.suggestions.push(suggestion);
    }

    public getSuggestions(): string[] {
        return this.suggestions;
    }

}