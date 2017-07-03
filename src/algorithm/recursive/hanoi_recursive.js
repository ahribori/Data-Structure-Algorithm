/**
 * Tower of Hanoi function
 * @param n {number} 원판의 수
 * @param from {number} 처음 원판들이 꽂혀있는 기둥 번호 (1~3)
 * @param to {number} 원판들을 옮겨야 할 기둥 번호 (from과 다른 기둥번호)
 */
export default function hanoi(n, from, to) {
    if (n >= 1) {
        const temp = 6 - from - to;
        hanoi(n-1, from, temp);
        console.log(`${from}번 기둥 맨 위의 원판을 ${to}번 기둥으로 이동`);
        hanoi(n-1, temp, to);
    }
}
