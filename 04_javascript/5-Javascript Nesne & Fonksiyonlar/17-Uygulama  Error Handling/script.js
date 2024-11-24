document.getElementById('myBtn').addEventListener('click',function(e){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';
    try{
        if(name.value.length === 0){
            throw new Error('name is required');
        }

        if(name.value.length > 20){
            throw new Error('name is too long');
        }

        if(age.value.length === 0){
            throw new Error('age is required');
        }

        if(isNaN(age.value)){
            throw new Error('age is not numeric');
        }

        console.log('form is submitted');

    } catch(err){
        errors.innerHTML = err.message;
    }finally{
        name.value = '';
        age.value = '';
    }

 

    e.preventDefault();
});