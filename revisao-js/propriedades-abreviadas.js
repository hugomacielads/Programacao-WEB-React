/*
    let infoUsuario = {
    nome: 'Hugo',
    nomeCompleto: 'Hugo Cesar Pereira Maciel',
    grupo: 'Alunos',
    senha: '12345678'
}
*/

let usuario = 'Hugo'
let nome = 'Hugo Cesar Pereira Maciel'
let grupo = 'Alunos'
let password = '12345678'

let infoUsuario = {
    usuario, //usuario: usuario,
    nomeCompleto: nome,
    grupo, //grupo: grupo,
    senha: password,
}

console.log(infoUsuario)

// Exibindo o conteúdo da variável 'password' e 'grupo' para fins de depuração
console.log({password})
console.log({grupo})
console.log({password, grupo})