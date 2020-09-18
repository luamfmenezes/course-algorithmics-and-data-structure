/*

    1. Devise a plan for solving problems.
    2. Master common problem solving patterns.


    Step by step.
    
    Book recommendation - How to solve it, George polya
    
    1. Understand the problem.
        1.1. Can i restate the problem in my own owrds ?
        1.2. What are the inputs that go into the problem ?
        1.3. What are the outputs that should come from the solution to the problem ?
        1.4. Can the outputs be determined from the inputs ? In other words, do I have
        enough information to solve the problem ?(You may not be able to answer this
        question until you set about solving the problem)
        1.5. How should I label the important pieces of data tha are a part of the problem
        
        Example:
        Write a function which takes two numbers and returns their sum.

        1. Sum two numbers or implement addition
        2. integers 0 < n < 1000
        3. integers 0 < n < 2000
        4. Yes
        5. addTwoNumbers, num1, num2, sum
    
    2. Concreate examples
        2.1 - Simple examples
        2.2 - Progress to more complex examples
        2.3 - Explore edge cases and empity entries

        Example:
        Write a function which takes in a string and returns counts of each character in the string.

        1. "aaaa" -> { a:4 } 
        1. "hello" <= {h: 1, e:1, l:2, o:1} -> it's nice to understand the format of the output (could be {a:0, b:0, c:0 ... o:1 ... }).
        2. "my phone number is 182764" -> it's nice to see how spaces and numbers will work.
        3. undefined -> what return ? {} ?
        3. 3 -> convert to "3" ?

    3. Break it Down
        Explicitly write out the steps you need to take.
        It's a great tool to interviews, because most of the interviews are intersted in your process to solve problems.

        Example:
        Write a function which takes in a string and returns counts of each character in the string (alphanumeric).

        function(str){
            // make object to return at end
            // loop over string for each character
                // convert caracter to lowercase
                // if char converted is a key add more one else create the key = 1
            // return object at end
        }
        function(str){
            // make object to return at end
            // Convert string to lowercase
            // loop over string for each character
                // if char converted is a key add more one else create the key = 1
            // return object at end
        }

        *great tip, its possible do one or two loop with half of the actions into.

    4. Solve or simplify
        
        Solve if you can, if you can't simplify. Try to ignore the part that are givin you headache(It's 
        greate to earn insights about the problem).

        1. Find the core difficulty in what you're tring to do.
        2. Temporarily ignore that difficulty.
        3. Write a simplified solution.
        4. Then incorporate that difficulty back in.

        Example:
        Write a function which takes in a string and returns counts of each character in the string.


        function(str){
            // make object to return at end
            let result = {}
            // loop over string for each character
            for(let i = 0; i < str.length; i++){
                let char = str[i];
                if(char > 0){
                    result[char]++;
                }else{
                    result[char] = 1;
                }
            }
            // return object at end
            return result;
        }

        after this, implement the lowercase
        
        function(str){
            // make object to return at end
            let result = {}
            // loop over string for each character
            for(let i = 0; i < str.length; i++){
                let char = str[i].toLowerCase();
                if(char > 0){
                    result[char]++;
                }else{
                    result[char] = 1;
                }
            }
            // return object at end
            return result;
        }

        after this, implement a regular expression

        try to abstract to function

        function(str){
            ...
            let char = toAlphanumeric(str[i]);
            ...
        }
        function toAlphanumeric(char){
            ...
            // after i do the implementation
        }

    5. Look Back and Refactor.
        1. Can you see another different solve for this problem
        2. Can you abstract this result to apply in another problem
        3. Can you improve the performace of this code ?
        4. Can you think of other ways to refactor (company guideline maybe) ? 
        5. How have other people solved this problem ?

    
    Example: 

        function(str){
            let result = {}
            for(let char of str){
                char = char.toLowerCase();
                const isAlphanumeric = /[a-z0-9]/.test(char);
                // in interviews it's nice to explan when you dont know
                // how efficient is a part in your code.
                result[char] = isAlphanumeric ? ++result[char] : 1
            }
            return result;
        }



*/
