function solution(sides) {
    let answer = 0;
    let list = sides.sort();
    if (list[2] < list[0] + list[1]) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}