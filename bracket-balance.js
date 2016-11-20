function countBracketBalance(string, brackets) {
    brackets = brackets || '{}';

    const o = brackets[0];
    const c = brackets[1];

    let open = 0;
    let close = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === o) {
            open++;
        } else if(string[i] === c) {
            close++;
        }
    }

    return open - close;
}

module.exports = countBracketBalance;
