function solution(my_string) {
    let answer = my_string.split('');
    answer.reverse();
    solution = answer.join('');
    return solution;
}