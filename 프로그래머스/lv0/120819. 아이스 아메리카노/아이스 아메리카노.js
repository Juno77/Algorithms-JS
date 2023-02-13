function solution(money) {
    let answer = [];
    
    let coffee = Math.trunc(money / 5500)
    let change = money - coffee * 5500
    
    a = coffee
    b = change
    
    answer = [a,b]
    
    return answer;
}