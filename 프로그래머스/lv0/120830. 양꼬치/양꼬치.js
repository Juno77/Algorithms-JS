

let Y = 12000
let D = 2000
function solution(n, k) {
    let answer = ((n * Y) + (k * D));
    let discount = Math.trunc(n*Y/120000);
    if (discount >= 1) {
        answer = answer - discount*D
    }
    return answer;
}