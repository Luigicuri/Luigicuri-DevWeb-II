let resultado = 0;
const args = process.argv.slice(2);

args.forEach((n) => {
    resultado += Number(n);
})

console.log(resultado);
