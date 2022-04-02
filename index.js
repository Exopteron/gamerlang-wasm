import init from "./pkg/pestwasm.js";
import { VMHolder } from "./pkg/pestwasm.js";
function run() {
    const output = document.getElementById("terminal");
    const input = document.getElementById("input");
    const vm = new VMHolder();
    input.addEventListener('input', (event) => {
        output.textContent = vm.run(event.target.value);
    });
}

init().then(run)