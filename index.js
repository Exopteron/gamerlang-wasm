import init from "./pkg/pestwasm.js";
import { VMHolder } from "./pkg/pestwasm.js";
function run() {
    const output = document.getElementById("terminal");
    const input = document.getElementById("input");
    input.addEventListener('keydown', (e) => {
        if (e.key == 'Tab') {
            e.preventDefault();
            var start = input.selectionStart;
            var end = input.selectionEnd;
        
            // set textarea value to: text before caret + tab + text after caret
            input.value = input.value.substring(0, start) +
              "\t" + input.value.substring(end);
        
            // put caret at right position again
            input.selectionStart =
              input.selectionEnd = start + 1;
          }
    });
    const vm = new VMHolder();
    input.addEventListener('input', (event) => {
        output.textContent = vm.run(event.target.value);
    });
}

init().then(run)