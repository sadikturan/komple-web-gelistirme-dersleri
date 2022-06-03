// Call,Apply & Bind

var welcome = function(a,b){
    console.log('Welcome '+this.name+'.Are you interested in '+a+' and '+b);
}

var yigit = {name:'Yiğit'};
var ada = {name : 'Ada'};

welcome.call(yigit,'asp.net','angular');
welcome.call(ada,'asp.net','angular');

welcome.apply(yigit,['asp.net','angular']);
welcome.apply(ada,['asp.net','angular']);

var welcomeYigit = welcome.bind(yigit);
welcomeYigit('asp.net','ada');

var welcomeAda = welcome.bind(ada);
welcomeAda('asp.net','angular');

