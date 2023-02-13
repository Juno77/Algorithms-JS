function solution(numbers) {
    let answer = [];
    let newNumbers = [];
    
    for (let i = 0; i <= numbers.length - 1; i++){
        newNumbers.push(numbers[i]*2)
        
    }
     
    answer = newNumbers
    
    return answer;
}