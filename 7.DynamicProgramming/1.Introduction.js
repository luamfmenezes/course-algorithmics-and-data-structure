/*
    Dynamic programming

    Method for solving a complex problem by breaking it down into a collection of
    simples subproblems, solving each of those subproblems just once, and storing 
    their solution.

    It only works on problems with
        1. Optimal substructure
        2. Overlapping subproblems

    Overlapping subproblems example
        Fibonacci sequence - does have overlaping subproblems
                fib(3)
            fib(1) + fib(2)    

    No Overlapping example: 
        mergeSort 

    Optimal substructure
    
    Shortest path.
        A - D : A -> B -> C -> D
        [D-A, C-A, B-A]
    
    No Optimal substructure example:
        Logest simple path
        A - C : [A -> B -> C]
        C - D : [C -> B -> D]
        A - D : [A -> B -> D]
        // to be optmal substructure should be something like this
        // A - D : [A -> B -> C -> B -> D]

*/
