export default function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fibonacci(n - 2) + fibonacci(n - 1);
};