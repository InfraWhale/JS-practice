//무한루프

/* for (var i = 0; ; i++) {
    console.log( `${i} + "번째 시도"`);
} */

//중첩 for문
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}