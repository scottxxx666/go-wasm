importScripts('wasm_exec.js');

console.time('worker init');
const go = new self.Go();
WebAssembly.instantiateStreaming(fetch("lib.wasm"), go.importObject).then(result => {
    go.run(result.instance)
})
console.timeEnd('worker init');

postMessage('worker is ready');

onmessage = (e) => {
    const data = +e.data;
    console.log("Message received from main script: " + data);
    const res = fibBridge(data);
    console.log("Posting message back to main script");
    postMessage('result: ' + res);
};
