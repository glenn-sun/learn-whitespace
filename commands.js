const COMMANDS = {
    push: {
        instruction: "  []",
        type: "stack",
        meaning: "Place [] on the stack",
        first_appearance: 1,
    },
    dupl: {
        instruction: " \n ",
        type: "stack",
        meaning: "Duplicate the top item on the stack",
        first_appearance: 4,
    },
    printc: {
        instruction: "\t\n  ",
        type: "io",
        meaning: "Pop the stack and output it as a character",
        first_appearance: 1,
    },
    printn: {
        instruction: "\t\n \t",
        type: "io",
        meaning: "Pop the stack and output it as a number",
        first_appearance: 1,
    },
    end: {
        instruction: "\n\n\n",
        type: "flow",
        meaning: "End the program",
        first_appearance: 1,
    },
    get: {
        instruction: "\t\t\t",
        type: "heap",
        meaning: "Pop the stack and place the item stored at that location on the stack",
        first_appearance: 3,
    },
    readc: {
        instruction: "\t\n\t ",
        type: "io",
        meaning: "Pop the stack and store an input character at that location",
        first_appearance: 3,
    },
    readn: {
        instruction: "\t\n\t\t",
        type: "io",
        meaning: "Pop the stack and store an input number at that location",
        first_appearance: 3,
    },
    add: {
        instruction: "\t   ",
        type: "arith",
        meaning: "Pop the stack twice and place their sum on the stack",
        first_appearance: 4,
    },
    
    lbl: {
        instruction: "\n  []",
        type: "flow",
        meaning: "Mark this line with a label called []",
        first_appearance: 4,
    },
    jmp: {
        instruction: "\n \n[]",
        type: "flow",
        meaning: "Jump to the label []",
        first_appearance: 4,
    },
    jmpz: {
        instruction: "\n\t []",
        type: "flow",
        meaning: "Pop the stack and jump to the label [] if that item is zero",
        first_appearance: 4,
    }

};