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
        first_appearance: 5,
    },
    dupln: {
        instruction: " \t []",
        type: "stack",
        meaning: "Duplicate the []'th item on the stack (top is 0th), placing the new copy on top",
        first_appearance: 9,
    },
    swap: {
        instruction: " \n\t",
        type: "stack",
        meaning: "Swap the top two items on the stack",
        first_appearance: 9,
    },
    disc: {
        instruction: " \n\n",
        type: "stack",
        meaning: "Pop and discard the top item on the stack",
        first_appearance: 9,
    },
    discn: {
        instruction: " \t\n[]",
        type: "stack",
        meaning: "Pop and discard the top []+1 items on the stack, then put the original top item back on",
        first_appearance: 9,
    },

    add: {
        instruction: "\t   ",
        type: "arith",
        meaning: "Pop the stack twice and place their sum on the stack",
        first_appearance: 5,
    },
    sub: {
        instruction: "\t  \t",
        type: "arith",
        meaning: "Pop the stack twice and place their difference on the stack (second from top minus top)",
        first_appearance: 7,
    },
    mul: {
        instruction: "\t  \n",
        type: "arith",
        meaning: "Pop the stack twice and place their product on the stack",
        first_appearance: 7,
    },
    idiv: {
        instruction: "\t \t ",
        type: "arith",
        meaning: "Pop the stack twice and place their integer quotient on the stack (second from top divided by top)",
        first_appearance: 7,
    },
    mod: {
        instruction: "\t \t\t",
        type: "arith",
        meaning: "Pop the stack twice and place their remainder on the stack (second from top mod top)",
        first_appearance: 7,
    },

    set: {
        instruction: "\t\t ",
        type: "heap",
        meaning: "Pop the stack twice and place the top item at the heap location given by the second item",
        first_appearance: 10,
    },
    get: {
        instruction: "\t\t\t",
        type: "heap",
        meaning: "Pop the stack and place the item stored at that heap location on the stack",
        first_appearance: 3,
    },

    lbl: {
        instruction: "\n  []",
        type: "flow",
        meaning: "Mark this point in the code with a label called []",
        first_appearance: 6,
    },
    jmp: {
        instruction: "\n \n[]",
        type: "flow",
        meaning: "Jump to the label []",
        first_appearance: 6,
    },
    jmp0: {
        instruction: "\n\t []",
        type: "flow",
        meaning: "Pop the stack and jump to the label [] if that item is zero",
        first_appearance: 6,
    },
    jmpneg: {
        instruction: "\n\t\t[]",
        type: "flow",
        meaning: "Pop the stack and jump to the label [] if that item is negative",
        first_appearance: 10,
    },
    func: {
        instruction: "\n \t[]",
        type: "flow",
        meaning: "Jump to the label [] as a subroutine",
        first_appearance: 11,
    },
    ret: {
        instruction: "\n\t\n[]",
        type: "flow",
        meaning: "End the subroutine, jumping back to the point in the code from which the subroutine was called",
        first_appearance: 11,
    },
    end: {
        instruction: "\n\n\n",
        type: "flow",
        meaning: "End the program",
        first_appearance: 1,
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
    readc: {
        instruction: "\t\n\t ",
        type: "io",
        meaning: "Pop the stack and store an input character at that heap location",
        first_appearance: 3,
    },
    readn: {
        instruction: "\t\n\t\t",
        type: "io",
        meaning: "Pop the stack and store an input number at that heap location",
        first_appearance: 3,
    },
};