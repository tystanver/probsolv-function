const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        return n % i == 0 && n > 0 ? false : true;
    }
}
const result = isPrime(24);
console.log(result)