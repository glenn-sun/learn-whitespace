let stylesheet = document.styleSheets[0];
let tab_color = document.getElementById('tab-color');
let space_color = document.getElementById('space-color');
let lf_color = document.getElementById('lf-color');
let tab_size = document.getElementById('tab-size');
let settings_overlay = document.getElementById('reset-settings-overlay');
let help_overlay = document.getElementById('help-overlay');

let skip_level = document.getElementById('skip-level');

if (localStorage['tab_color']) {
    tab_color.value = localStorage['tab_color'];
    update_tab_color();
}
if (localStorage['space_color']) {
    space_color.value = localStorage['space_color'];
    update_space_color();
}
if (localStorage['lf_color']) {
    lf_color.value = localStorage['lf_color'];
    update_lf_color();
}
if (localStorage['tab_size']) {
    tab_size.value = localStorage['tab_size'];
    update_tab_size();
}

setInterval(function() {
    localStorage['tab_color'] = tab_color.value;
    localStorage['space_color'] = space_color.value;
    localStorage['lf_color'] = lf_color.value;
    localStorage['tab_size'] = tab_size.value;
}, 500);

function update_tab_color() {
    let tab_index = Array.from(stylesheet.cssRules).findIndex(rule => rule.selectorText === ".tab");
    stylesheet.deleteRule(tab_index);
    stylesheet.insertRule(`.tab { background-color: ${tab_color.value}; }`);
}

function update_space_color() {
    let space_index = Array.from(stylesheet.cssRules).findIndex(rule => rule.selectorText === ".space");
    stylesheet.deleteRule(space_index);
    stylesheet.insertRule(`.space { background-color: ${space_color.value}; }`);
}

function update_lf_color() {
    let lf_index = Array.from(stylesheet.cssRules).findIndex(rule => rule.selectorText === ".lf");
    stylesheet.deleteRule(lf_index);
    stylesheet.insertRule(`.lf { background-color: ${lf_color.value}; }`);
}

function update_tab_size() {
    let tab_index = Array.from(stylesheet.cssRules).findIndex(rule => rule.selectorText === ".tab-size");
    stylesheet.deleteRule(tab_index);
    stylesheet.insertRule(`.tab-size { tab-size: ${tab_size.value}; }`);
}

function update_skip_level() {
    current_level = parseInt(skip_level.value);
    load_level();
}

tab_color.addEventListener('input', update_tab_color);
space_color.addEventListener('input', update_space_color);
lf_color.addEventListener('input', update_lf_color);
tab_size.addEventListener('change', update_tab_size);
skip_level.addEventListener('change', update_skip_level);

function reset_tab_color() {
    tab_color.value = "#f7a6a6";
    update_tab_color();
}

function reset_space_color() {
    space_color.value = "#9cd8f1";
    update_space_color();
}

function reset_lf_color() {
    lf_color.value = "#e0f39a";
    update_lf_color();
}

function reset_tab_size() {
    tab_size.value = "2";
    update_tab_size();
}

function reset_level() {
    current_level = 1;
    player_name = 'Travis';
    load_level();
}

function reset_code() {
    code_area.innerHTML = "";
    input_area.innerHTML = "";
    output_area.innerHTML = "";
    processText();
}

function open_settings() {
    settings_overlay.classList.remove('hidden');
    skip_level.value = current_level;
}

function close_settings() {
    settings_overlay.classList.add('hidden');
}

function open_help() {
    help_overlay.classList.remove('hidden');
}

function close_help() {
    help_overlay.classList.add('hidden');
}