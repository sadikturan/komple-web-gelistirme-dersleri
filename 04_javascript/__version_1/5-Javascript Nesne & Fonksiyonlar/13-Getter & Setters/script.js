const person = {
    firstName : 'Sadık',
    lastName : 'Turan'
}


Object.defineProperty(person,'fullName',{ 
    get function() {
        return `${this.firstName} ${this.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(person,'age',{
    value : 50,
    writable : false
})

person.age = 55;

// person.firstName = 'Sena';
//person.fullName = 'Çınar Turan'
//console.log(person.fullName);
console.log(person.age);