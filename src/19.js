function calculateGCD(a, b) {
    if (!b) return a;
    return calculateGCD(b, a % b);
}

function isPerfectSquare(num) {
    let root = Math.sqrt(num);
    return root % 1 === 0 && num >= root * root;
}
