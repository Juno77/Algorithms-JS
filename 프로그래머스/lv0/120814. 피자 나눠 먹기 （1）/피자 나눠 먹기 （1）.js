function solution(n) {
    let answer = 0;
    let pizza = 0;
    for (i = 0; i < 16; i++) {
        if ((i * 7) / n < 1) {
            pizza += 1;
        }
    }
    return pizza;
}