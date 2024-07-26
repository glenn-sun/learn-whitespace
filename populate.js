let stack_table = document.getElementById('stack-table');
let arith_table = document.getElementById('arith-table');
let heap_table = document.getElementById('heap-table');
let flow_table = document.getElementById('flow-table');
let io_table = document.getElementById('io-table');
let ascii_table = document.getElementById('ascii-table');

let level_title = document.getElementById('level-title');
let instructions_text = document.getElementById('instructions-text');
let examples = document.getElementById('examples');

let current_level = localStorage['current_level'] || 1;

setInterval(function() {
    localStorage['current_level'] = current_level;
}, 500);

function load_level() {
    if (current_level == LEVELS.length - 1) {
        submit_button.classList.add('hidden');
    } else {
        submit_button.classList.remove('hidden');
    }
    level_title.innerHTML = `${current_level}. ${LEVELS[current_level].title}`;
    instructions_text.innerHTML = LEVELS[current_level].text;
    examples.innerHTML = "";
    for (let ex of LEVELS[current_level].examples) {
        examples.innerHTML += `
            <div>
                <p><em>Input:</em> ${ex.input}</p>
                <p><em>Output:</em> ${ex.output}</p>
            </div>
        `
    }
    stack_table.innerHTML = "";
    arith_table.innerHTML = "";
    heap_table.innerHTML = "";
    flow_table.innerHTML = "";
    io_table.innerHTML = "";
    for (let [name, command] of Object.entries(COMMANDS)) {
        if (command.first_appearance > current_level) {
            continue;
        }
        let row = new_row(
            command.instruction,
            command.meaning,
            `insertInstr('${name}')`,
            `copyInstr('${name}')`
        )
        
        switch (command.type) {
            case 'stack':
                stack_table.innerHTML += row;
                break;
            case 'arith':
                arith_table.innerHTML += row;
                break;
            case 'heap':
                heap_table.innerHTML += row;
                break;
            case 'flow':
                flow_table.innerHTML += row;
                break;
            case 'io':
                io_table.innerHTML += row;
                break;
            default:
                throw "Unknown instruction type";      
        }
    }
}

load_level();


function new_row(instruction, text, insertOnclick, copyOnclick) {
    let space = `<span class='space'> </span>`;
    let tab = `<span class='tab'>\t</span>`;
    let lf = `<span class='lf'> </span>`;
    let highlighted_instr = "";
    for (let char of instruction) {
        switch (char) {
            case ' ':
                highlighted_instr += space;
                break;
            case '\t':
                highlighted_instr += tab;
                break;
            case '\n':
                highlighted_instr += lf;
                break;
            default:
                highlighted_instr += char;
        }
    }
    let new_row = `
        <tr>
            <td>${text}</td>
            <td class="instruction tab-size">${highlighted_instr}</td>
            <td><button class="icon-button" onclick="${insertOnclick}">
                <span class="material-symbols-sharp">
                    text_select_end
                </span>
            </button></td>
            <td><button class="icon-button" onclick="${copyOnclick}">
                <span class="material-symbols-sharp">
                    content_copy
                </span>
            </button></td>
        </tr>
    `;
    return new_row;
}

ascii_table.innerHTML += new_row(
    ascii_to_instr(9),
    "Tab",
    `insertAscii(9)`,
    "copyAscii(9)",
)

ascii_table.innerHTML += new_row(
    ascii_to_instr(10),
    "New line",
    "insertAscii(10)",
    "copyAscii(10)",
)

ascii_table.innerHTML += new_row(
    ascii_to_instr(32),
    "Space",
    "insertAscii(32)",
    "copyAscii(32)",
)

for (let code = 33; code <= 126; code++) {
    let instruction = ascii_to_instr(code);

    let row = new_row(
        instruction,
        String.fromCharCode(code),
        `insertAscii(${code})`,
        `copyAscii(${code})`,
    )

    ascii_table.innerHTML += row;
}


