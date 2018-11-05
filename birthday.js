const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

let birthday = (s, d, m) => {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        let seg = 0;
        for (let j = i; j < (m + i); j++) {
            seg += parseInt(s[j]);
        }
        if (seg === d) {
            answer += 1;
        }
    }
    return (answer);
}

birthday(s, d, m);
