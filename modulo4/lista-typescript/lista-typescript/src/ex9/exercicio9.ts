function fatorial(fatorial: string) {
    let contador = 1
    for (let i = fatorial.length; i > 1; i--) {
        contador *= i
    }
    return contador
}
console.log(fatorial("Márleo"))