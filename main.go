package main

import (
	"syscall/js"
)

func fib(i int) int {
	if i <= 1 {
		return 1
	}
	return fib(i-1) + fib(i-2)
}

func fibFunc(this js.Value, args []js.Value) interface{} {
	return js.ValueOf(fib(args[0].Int()))
}

func main() {
	done := make(chan int, 0)
	js.Global().Set("fibBridge", js.FuncOf(fibFunc))
	<-done
}