// Tür Dönüşümü

let val;

// number to string
val = String(10)

// bool to string
val = String(true)

// date to string
val = String(new Date())

// array to string
val = String([1,2,3,4])

console.log(val)
console.log(typeof val)
console.log(val.length)

// toString()

val = (10).toString()
val = (false).toString()

// string to number
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('A')
val = Number([1,2,3,4])

// parseInt()
// parseFloat()

val = parseInt('10')
val = parseInt('10.5')
val = parseFloat('10.5')