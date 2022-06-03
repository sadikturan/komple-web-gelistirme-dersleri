// Functions that Return Functions

function Question(hobby){
   
    switch(hobby){
        case 'car':
            return function(name){
                console.log(name +' do you have a car ?');
            }
        break;

        case 'book':
            return function(name){
                console.log(name +' what is your favourite book ?');
            }
        break;

        case 'software':
            return function(name,type){
                console.log(name +' are you interested in '+type+' ?');
            }
        break;
          
        default:
            return function(name){
                console.log(name +' how are you ?');
            }
    }
}


var carQuestion = Question('car');

carQuestion('Çınar');
carQuestion('Emel');

var bookQuestion = Question('book');

bookQuestion('Yiğit');
bookQuestion('Ada');
bookQuestion('Sena');

var softwareQuestion = Question('software');

softwareQuestion('Sadık','nodejs');
softwareQuestion('Ali','angular');