function fibonacci(n, memo) {
    memo = memo || {}
    console.log(memo)
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 2) {
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    
}


console.log(fibonacci(6))
