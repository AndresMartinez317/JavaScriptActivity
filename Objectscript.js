const Library = [
    { Title: 'book1', Author: 'Author1', status:{own:true, reading:false, read: false} },
    { Title: 'book2', Author: 'Author2', status:{own:true, reading:false, read: false} },
    { Title: 'book3', Author: 'Author3', status:{own:true, reading:false, read: false} },
  ];

Library[0].read = true;
Library[1].read = true;
Library[2].read = true;
Library[0].Title = 'Firstbook';
const str = JSON.stringify(Library);
console.log(str);