import init from "./pkg/pestwasm.js";
import { VMHolder } from "./pkg/pestwasm.js";
function run() {
    const output = document.getElementById("terminal");
    const input = document.getElementById("input");
    input.addEventListener('keydown', (e) => {
        if (e.key == 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
        
            // set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) +
              "\t" + this.value.substring(end);
        
            // put caret at right position again
            this.selectionStart =
              this.selectionEnd = start + 1;
          }
    });
    const vm = new VMHolder();
    input.addEventListener('input', (event) => {
        output.textContent = vm.run(event.target.value);
    });
}

init().then(run)