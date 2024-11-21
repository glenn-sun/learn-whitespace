const LEVELS = [
    {},
    {
        title: "Getting started",
        text: _ => `
            <p>Using the tools you have, figure out a way to output an exclamation point.</p>
            
            <p>By the way, "pop" means to remove the top item. Click "Run" to test your code at any time, and "Submit" when you're confident in your solution.</p>

        `,
        examples: [
            {
                input: "(empty)",
                output: "!",
            }
        ],
        tests: [
            {
                input: "",
                output: "!",
            }
        ],
    },
    {
        title: "Character creation",
        text: _ => `
            <p>Print your name to the output. Feel free to pick any name you like, but this choice will be irreversible!</p>
            <p>Remember that the <em>stack</em> is like a stack of paper. The last thing that you put on the stack will be the first thing you pick up. </p>
            <p><em>This choice has no effect on this version of the tutorial. This tutorial was originally created for Canada/USA Mathcamp 2024, where additional elements were present, but removed for this version.</em></p>
        `,
        examples: [
            {
                input: "(empty)",
                output: "Travis",
            }
        ],
        tests: [
            {
                input: "",
                check: o => {
                    player_name = o;
                    return o !== "";
                },
            }
        ],
    },
    {
        title: "Repeat after me",
        text: data => `
            <p>One character will be given as input. (Feel free to choose your own inputs when you test your code.) Your goal is to output the exact same character.</p>
            <p>The <em>heap</em> is where you can store things. You need to specify an <em>location</em> for every item you store, which can just be any number you like.</p>

        `,
        examples: [
            {
                input: "A",
                output: "A",
            },
            {
                input: ".",
                output: ".",
            }
        ],
        tests: [
            {
                input: "e",
                output: "e",
            },
            {
                input: "6",
                output: "6",
            },
            {
                input: "+",
                output: "+",
            },
        ],
    },
    {
        title: "Repeat in reverse",
        text: _ => `
            <p>A three-letter word is given to you as input. Your job is to output the characters of the word in reverse order.</p>
        `,
        examples: [
            {
                input: "aes",
                output: "sea",
            }
        ],
        tests: [
            {
                input: "abc",
                output: "cba",
            },
            {
                input: "aes",
                output: "sea",
            },
            {
                input: "aab",
                output: "baa",
            }
        ]
    },
    {
        title: "Mathematics",
        text: _ => `
            <p>You will be given a number as input. Output this number plus 112.</p>
        `,
        examples: [
            {
                input: "0",
                output: "112",
            },
            {
                input: "1989",
                output: "2101",
            }
        ],
        tests: [
            {
                input: "30",
                output: "142",
            },
            {
                input: "12",
                output: "124",
            }
        ]
        
    },
    {
        title: "Conditionals",
        text: _ => `

            <p>When the input is exactly the number "18", reply "y" for yes, otherwise reply "n" for no.</p>

            <p>A <em>label</em> can be any number. These are points in your code that you can jump to from elsewhere. Remember that the computer will parse your program character-by-character in order, except when you explicitly tell it to jump.</p>
        `,
        examples: [
            {
                input: "6",
                output: "n",
            },
            {
                input: "18",
                output: "y",
            },
            {
                input: "28",
                output: "n",
            }
        ],
        tests: [
            {
                input: "17",
                output: "n",
            },
            {
                input: "18",
                output: "y",
            },
            {
                input: "19",
                output: "n",
            },
            {
                input: "80",
                output: "n",
            },
            {
                input: "1",
                output: "n",
            }
        ],
    },
    {
        title: "Putting it together",
        text: _ => `

            <p>Given a number as input, output "e" if it is even or "o" if it is odd. </p>
        `,
        examples: [
            {
                input: "13",
                output: "o"
            },
            {
                input: "2",
                output: "e",
            }
        ],
        tests: [
            {
                input: "1",
                output: "o",
            },
            {
                input: "14",
                output: "e"
            }
        ]
    },
    {
        title: "Countdown",
        text: _ => `

        <p>Given a number as input, output a countdown from that number to 0, inclusive. You do not have to output spaces between the numbers.</p>
        `,
        examples: [
            {
                input: "3",
                output: "3210",
            },
            {
                input: "10",
                output: "109876543210",
            },
        ],
        tests: [
            {
                input: "12",
                output: "1211109876543210",
            },
            {
                input: "2",
                output: "210",
            }
        ]
    },
    {
        title: "A Platforming Game",
        text: _ => `
            <p>The input will be a sequence of positive integers ending with 0 (the ground level). These numbers describe the height of the platforms in a room. When the height of the platform changes, output "^" to jump. When the height of the platforms stays the same, output ">" to run forward. Always jump onto the first platform. </p>

            <p>Note: When the input numbers are separated by spaces, the "read an input number" instruction will get the next number as you expect, and you do not need to deal with the spaces.</p>
        `,
        examples: [
            {
                input: "1 2 2 2 1 4 4 0",
                output: "^^>>^^>^",
            },
            {
                input: "2 2 10 8 8 0",
                output: "^>^^>^",
            }
        ],
        tests: [
            {
                input: "3 3 3 3 0",
                output: "^>>>^",
            },
            {
                input: "3 4 5 3 3 1 0",
                output: "^^^^>^^",
            },
            {
                input: "1 1 20 20 0",
                output: "^>^>^",
            }
        ]
    },
    {
        title: "Maximum",
        text: data => `
            <p>The input will be a sequence of positive integers ending with 0. Output the largest value in the sequence.</p>
        `,
        examples: [
            {
                input: "3 22 7 0",
                output: "22",
            },
        ],
        tests: [
            {
                input: "1 3 7 0",
                output: "7",
            },
            {
                input: "8 6 5 0",
                output: "8",
            },
            {
                input: "33 0",
                output: "33",
            }
        ]
    },
    {
        title: "Sandbox",
        text: _ => `
            <p>Congratulations! You've finished this Whitespace tutorial.</p>

            <p>There is one last new feature that you can use! It is called <em>subroutines</em>. They're like labels (and you use labels to mark them), but when you jump to them, the computer will automatically remember where you came from, and will automatically jump back once the subroutine is over.</p>
        `,
        examples: [
            {
                input: "<3",
                output: "<3",
            }
        ],
        tests: [],
    },
];