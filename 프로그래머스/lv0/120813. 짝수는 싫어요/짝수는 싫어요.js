function solution(n) {
    let answer = [];
    
    for(let i = 1; i <=n; i=i+2){
        answer.push(i)
        
    }
    
    answer.sort(function(a,b){return a+b});
    return answer;
}