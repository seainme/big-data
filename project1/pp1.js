//clients//employees//
db.employees.insert({})
db.departments.insert({})
db.users.insert({})

db.users.insert({
    name: 'Evgeniy Ivanov',
    age: 25,
    tokken_count: 0
    addressCollection: {
        city: 'Odessa',
        county: 'Ukraine',
        address: 'Black Sea',
    }
})

db.users.find.pretty()

db.users.insert({
    _id: 'user_1',
    name: 'Evgeniy Ivanov',
    age: 25
})

var generateFname = function() {
    var collection = [
    'Andrei', 
    'Alex',
    'Yuriy', 
    'Stanislav',
    'Gennadiy',
    'Santos',
    'Evgeniy'];
    var index = Math.floor((Math.random()*(7-1)+1));
    return collection[index];

}

var generateLname = function() {
    var collection = [
        'Petrov', 
        'Sidorov',
        'Pushkin',
        'Mikhaylov',
        'Furduy',
        'Amigos', 
        'Ivanov'];
    var index = Math.floor((Math.random()*(7-1)+1));
    return collection[index];
}

var generateFullname = function() {
    return generateFname() + ' ' + generateLname();
  }
  
  for(i = 0; i < 7; i++) {
    db.users.insert({
      name  : generateFullname(),
      age   : 25
    })
  }

  for(i = 0; i < 50; i++) {
    db.employees.insert({
      name  : generateFullname(),
        })

var generateAddress = function() {
    var collection = 
    ['80 Delaware Street Lake Wales, FL, USA', 
    '89 Military Ave. Belleville, ON, USA', 
    '9268 The Green London, UK', 
    '250 Riverside Lane Brooklyn, USA', 
    '29 South Street BRIGHTON, UK',
    '212 Prospect Street Austin, USA',
    '515 Black Sea, Odessa, Ukraine'];
    var index = Math.floor((Math.random()*(7-1)+1));
    return collection[index];
    
}

var generatenumberPhone = function() {
    var collection = [
        '089123456', 
        '088987564',
        '087154874',
        '089123456', 
        '088987564',
        '087154874',
        '089123456'
        ];
    var index = Math.floor((Math.random()*(7-1)+1));
    return collection[index];
}

var generateEmail = function(name) {
    var collection = [
        '@gmail.com', 
        '@yahoo.com',
        '@icloud.com',
        '@mail.com', 
        '@yandex.ru',
        '@kinetiksoft.com',
        '@ukr.net'
        ];
    var index = Math.floor((Math.random()*(7-1)+1));
    return name + collection[index];
}
//for users
var generateBankAccount = function(currency) {
    var bankaccountName;
        
    var{

    bankaccountName = Math.floor((Math.random()*(700000000-30000000000+1)+300000000);
    return 'BG30'+ bankaccountName +currency;
}

var generateAmountOfMoney = function(){
    return Math.floor(Math.random() * 8000-3000 + 1) + 3000); 
};
}
//for departments
var generateDepartments = function(name){
    var collection = [
        'Credits',
        'Cashbox',
        'Payments'
    ];
    var index = Math.floor((Math.random()*(50-10)+10));
    return  name + collection[index];

  }
//for employees
  var generatePosition = function(name){
      var collection = [
          'Cashier',
          'Creditor',
          'Consultant'
      ];

      var index =Math.floor((Math.random()*(50-10)+10));
      return  name + collection[index];
    }
