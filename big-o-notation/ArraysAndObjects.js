/*
    Objects

    1. Dont need order
    2.  Fast acess/insertion and removal -> O(1).
    3. Searching -> O(n), (n -> number of keys)

    Javascript Object

    Object.keys -> [key1,key2...] - O(n)
    Object.values -> [value1,value2...] - O(n)
    Object.entries -> [[key1,value1],[key2,value2]...] - O(n)
    Object.hasOwnProperty -> boolean -> O(1)

    Arrays

    Good alternative when do you need order.
    Slow acess/insertion and removal.

    Insertion -> (in the end -> O(1), beggin -> O(n))
    Removal -> (in the end -> O(1), beggin -> O(n))
    Searching -> O(n)
    Access -> O(1)

    Insert and remove from the begin is always worst that Insert and remove from the end.

    push, pop - O(1)
    shift, unshift - O(n)
    concat, slice, splice - O(n)
    sort - O(n * log(n))
    forEach, map, filter, reduce... - O(n)


*/
