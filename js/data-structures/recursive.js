function recursiveFunction(someParam) {
    recursiveFunction(someParam)
}

// recursiveFunction()
// note: execute in browser this code
function understandRecursion(doIunderstandRecursion) {
    const recursionAnswer = confirm("Do you understand recursion?")
    recursionAnswer ? true : understandRecursion(doIunderstandRecursion) 
}

understandRecursion()