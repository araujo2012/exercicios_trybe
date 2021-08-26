let peca_de_xadrez = 'Cavalo';
let peca = peca_de_xadrez.toLowerCase();
switch (peca){
    case 'peao':
        console.log('Movimenta apenas para frente');
        break
    case 'torre':
        console.log('Movimenta para os lados quantas casas quiser');
        break
        case 'bispo':
        console.log('Movimenta na diagonal quantas casas quiser');
        break
        case 'cavalo':
        console.log('Movimenta uma casa na diagonal e uma casa na lateral');
        break
        case 'rainha':
        console.log('Movimenta igual a torre e bispo');
        break
        case 'rei':
        console.log('Movimenta apenas uma casa em qualquer direcao');
        break
        default:
        console.log(peca)
}