function factorialize(num) {

    
    if (num <= 0 || num === 1)  // Validating input
    return 1;
    
    
    for (var i = num - 1; i >= 1; i--) {
        num = num*i;              // Multiplying the number by the previous number
        }
        return num;
    
}

module.exports = factorialize;

//Pair programming with:Atwiine Deborah


