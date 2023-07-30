GOOS=js GOARCH=wasm go build -o lib.wasm
goexec 'http.ListenAndServe(`:8080`, http.FileServer(http.Dir(`.`)))'
