function countBracketBalance(string, brackets) {
    bracket = bracket || '{}';

    const o = brackets[0];
    const c = brackets[1];

    let open = 0;
    let close = 0;

    for(let i = 0; i < string.length; i++) {
        if(i === o) {
            open++;
        } else if(i === c) {
            close++;
        }
    }

    return open - close;
}
