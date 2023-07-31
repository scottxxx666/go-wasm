# Go Webassembly test
environment: go1.20.1, chrome 115.0.5790.114

1.speed. code in fib.go, fib.html
Fibonacci(40)
```
js: 1458.6240234375 ms
wasm: 3722.241943359375 ms
```
js is faster

2.memory
```
	temp := make([]int, 0)
	for i := 0; i < 40000000; i++ {
		temp = append(temp, 1)
	}
```
run this code when everytime button clicked
result: allocate 1.8G (in both Activity Monitor and Task Manager), 
not release after function end, but not increase after click more times