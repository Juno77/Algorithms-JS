function solution(strlist) {

    let answer = [];
    let end = strlist.length
    
    for (let i=0; i < end ; i++ ) {
        answer.push(strlist[i].length)
    }
    
    return answer;
}