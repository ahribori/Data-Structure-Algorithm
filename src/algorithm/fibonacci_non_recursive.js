export default function fibonacci(n) {
    let n1 = 0;
    let n2 = 1;
    let result = 0;

    for (let i = 0; i < n - 1; i ++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}
