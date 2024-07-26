function openTab(e, tab) {
    let tab_contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tab_contents.length; i++) {
        tab_contents[i].style.display = "none";
    }
  
    tab_links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tab_links.length; i++) {
        tab_links[i].className = tab_links[i].className.replace(" active-tab", "");
    }
  
    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " active-tab";
}

function copyInstr(name) {
    let instruction = COMMANDS[name].instruction.replace("[]", "");
    copy(instruction);
}

function insertInstr(name) {
    let instruction = COMMANDS[name].instruction.replace("[]", "");
    insert(instruction);
}

let number = document.getElementById('number')
let number_instr = document.getElementById('number-instr');

number.addEventListener('input', e => {
    let code = getNumCode();
    if (isNaN(code)) {
        number_instr.innerHTML = "NaN";
    } else {
        number_instr.innerHTML = getNumCode()
            .replaceAll(" ", "<span class='space'> </span>")
            .replaceAll("\t", "<span class='tab'>\t</span>")
            .replaceAll("\n", "<span class='lf'> </span>\n");
    }
});

function getNumCode() {
    let value = number.value;
    if (value === '') {
        return '';
    }
    value = parseInt(value);
    if (isNaN(value)) {
        return NaN;
    }
    let binary = value.toString(2);
    if (binary[0] !== '-') {
        binary = '+' + binary;
    }
    let code = binary.replaceAll("0", " ")
                     .replaceAll("1", "\t")
                     .replace("-", "\t")
                     .replace("+", " ");
    code += "\n"
    return code;
}

function copyNum() {
    copy(getNumCode());
}

function insertNum() {
    insert(getNumCode());
}

function ascii_to_instr(code) {
    let binary = code.toString(2).padStart(8, '0');
    let instruction = binary.replaceAll("0", " ")
                            .replaceAll("1", "\t");
    instruction += "\n";
    return instruction;
}

function insertAscii(code) {
    insert(ascii_to_instr(code));
}

function copyAscii(code) {
    copy(ascii_to_instr(code));
}

function copy(text) {
    navigator.clipboard.writeText(text);
    console.log(instruction);
}

function insert(text) {
    document.execCommand('insertHTML', false, text);
    processText();
}
