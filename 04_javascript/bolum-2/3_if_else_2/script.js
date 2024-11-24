// If/Else Koşul İfadeleri-2

// yas >= 18
// mezuniyet == "lise" yada mezuniyet == "universite"

let yas = 20;
let mezuniyet = "ilkokul";

if((yas >= 18) && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
    console.log("ehliyet alabilirsiniz.");
}
else {
    console.log("ehliyet alamazsınız.");
}


// and (&&)
// true, true => true 
// false, true => false
// false, false => false

// veya (||)
// true, true => true 
// false, true => true
// false, false => false