let code_area = document.getElementById('code-area');
let input_area = document.getElementById('input-area');
let code_highlight = document.getElementById('code-highlight');
let line_numbers = document.getElementById('line-numbers');
let output_area = document.getElementById('output-container');

code_area.innerHTML = localStorage['code'] || '';
input_area.innerHTML = localStorage['input'] || '';

setInterval(function() {
    localStorage['code'] = code_area.innerHTML;
    localStorage['input'] = input_area.innerHTML;    
}, 500);

let player_name = localStorage['player_name'] || '';
setInterval(function() {
    localStorage['player_name'] = player_name;
}, 500);

function interceptKeys(e) {
    switch (e.code) {
        case 'Tab':
            e.preventDefault();
            document.execCommand('insertHTML', false, '\t');
            break;
        case 'Enter':
            e.preventDefault();
            document.execCommand('insertHTML', false, '\n');            
        default:
    }
}

function interceptPaste(e) {
    e.preventDefault();
    let clipboard = e.clipboardData.getData('text/plain');
    clipboard = clipboard.replaceAll("\r\n", "\n");
    document.execCommand('insertHTML', false, clipboard);
}

code_area.addEventListener('keydown', e => interceptKeys(e));
input_area.addEventListener('keydown', e => interceptKeys(e));

code_area.addEventListener('paste', e => interceptPaste(e));
input_area.addEventListener('paste', e => interceptPaste(e));

function cursorToEnd(elt) {
    let range = document.createRange();
    let selection = window.getSelection();
    range.setStart(elt, elt.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}

function processText() {
    if (code_area.innerHTML.at(-1) != '\n') {
        code_area.innerHTML += '\n';
        cursorToEnd(code_area);
    }
    let codeHTML = code_area.innerHTML;
    codeHTML = codeHTML.slice(0, codeHTML.length - 1);
    code_highlight.innerHTML = codeHTML
        .replaceAll(" ", "<span class='space'> </span>")
        .replaceAll("\t", "<span class='tab'>\t</span>")
        .replaceAll("\n", "<span class='lf'> </span>\n");
    let n_lines = code_area.innerText.split("\n").length - 1;
    let line_numbers_text = "";
    for (let i = 1; i <= n_lines; i++) {
        line_numbers_text += `${i}<br/>`;
    }
    line_numbers.innerHTML = line_numbers_text;
}

code_area.addEventListener('input', processText);

processText();

let run_button = document.getElementById('run');
let stop_button = document.getElementById('stop');
let submit_button = document.getElementById('submit');
let next_level_overlay = document.getElementById('next-level-overlay');

let worker = new Worker('whitespace.js');
let workqueue = [];
let current_job;

function run() {
    let code = code_area.innerText;
    if (code.at(-1) === "\n") {
        code = code.slice(0, code.length - 1);
    }
    let input = input_area.innerText;
    if (input.at(-1) === "\n") {
        input = input.slice(0, input.length - 1);
    }
    worker.postMessage({ code: code, input: input , mode: 'run'});
    run_button.classList.add('inactive-button');
    submit_button.classList.add('inactive-button');
    stop_button.classList.remove('inactive-button');
}

function submit() {
    let code = code_area.innerText;
    if (code.at(-1) === "\n") {
        code = code.slice(0, code.length - 1);
    }
    workqueue = Array.from(LEVELS[current_level].tests);
    current_job = workqueue.pop();
    worker.postMessage({ 
        code: code, 
        input: current_job.input, 
        mode: 'submit',
    });
    run_button.classList.add('inactive-button');
    submit_button.classList.add('inactive-button');
    stop_button.classList.remove('inactive-button');
}

function interrupt() {
    worker.terminate();
    worker = new Worker('whitespace.js');
    run_button.classList.remove('inactive-button');
    submit_button.classList.remove('inactive-button');

    stop_button.classList.add('inactive-button');
}

worker.onmessage = function (e) {
    if (e.data.mode === 'run') {
        run_button.classList.remove('inactive-button');
        submit_button.classList.remove('inactive-button');
    
        stop_button.classList.add('inactive-button');
        if (e.data.output) {
            output_area.innerHTML = e.data.output;
        } else if (e.data.error) {
            output_area.innerHTML = `<span class="error-msg">${e.data.error}</span>`;
        } else {
            throw "unreachable"
        }
    } else if (e.data.mode === 'submit') {
        if (e.data.error) {
            run_button.classList.remove('inactive-button');
            submit_button.classList.remove('inactive-button');
        
            stop_button.classList.add('inactive-button');
            output_area.innerHTML = `<span class="error-msg">${e.data.error}</span>`;
            return;
        }

        if (!(current_job.output == e.data.output || (current_job.check && current_job.check(e.data.output)))) {
            run_button.classList.remove('inactive-button');
            submit_button.classList.remove('inactive-button');
        
            stop_button.classList.add('inactive-button');
            output_area.innerHTML = `<span class="error-msg">One or more tests failed.</span>`;
            return;
        }

        current_job = workqueue.pop();
        if (current_job) {
            worker.postMessage({ 
                code: e.data.code, 
                input: current_job.input, 
                mode: 'submit',
            });
        } else {
            run_button.classList.remove('inactive-button');
            submit_button.classList.remove('inactive-button');
        
            stop_button.classList.add('inactive-button');
            next_level_overlay.classList.remove('hidden');
        }
    }
}

function next_level() {
    current_level = parseInt(current_level) + 1;
    load_level();
    code_area.innerHTML = "";
    input_area.innerHTML = "";
    output_area.innerHTML = "";
    processText();
    next_level_overlay.classList.add('hidden');
}