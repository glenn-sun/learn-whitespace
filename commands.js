const COMMANDS = {
    push: {
        instruction: "  []",
        type: "stack",
        meaning: "Place [] on the top of the stack",
        first_appearance: 1,
    },
    printc: {
        instruction: "\t\n  ",
        type: "io",
        meaning: "Remove the top item of the stack and output it as a character",
        first_appearance: 1,
    },
    printn: {
        instruction: "\t\n \t",
        type: "io",
        meaning: "Remove the top item of the stack and output it as a number",
        first_appearance: 1,
    },
    end: {
        instruction: "\n\n\n",
        type: "flow",
        meaning: "End the program",
        first_appearance: 1,
    },
    lbl: {
        instruction: "\n  []",
        type: "flow",
        meaning: "Mark this line with a label called []",
        first_appearance: 1,
    },
    jmp: {
        instruction: "\n \n[]",
        type: "flow",
        meaning: "Jump to the label called []",
        first_appearance: 1,
    },
};