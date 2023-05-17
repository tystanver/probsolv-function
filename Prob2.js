// Write a C program to find diameter, circumference and area of circle using functions.
const findDiameter = (n) => {
    let result;
    if (n == 0) {
        result = 'error'
    }
    else {
        result = 2 * n
    }
    return result;
}
const ans = findDiameter(5);
console.log(ans)