let num = [1, 2, 3, 5, 8]
num.push(7)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log('O primeiro valor do vetor é ' + num[0]) // ou `O primeiro valor do vetor é ${num[1]}`
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
