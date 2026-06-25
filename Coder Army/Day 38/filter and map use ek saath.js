let students = [
  {id: "001", name: "Anish", sports: "Cricket"},
  {id: "002", name: "Smriti", sports: "Basketball"},
  {id: "003", name: "Rahul", sports: "Cricket"},
  {id: "004", name: "Bakul", sports: "Basketball"}
];
let cricket = students.filter((students) => students.sports === "Cricket");  //filter is only return true waali value. and store it in new array
console.log(cricket);
let cricketplayername =  students.filter((students) => students.sports === "Cricket" ).map(students => students.name);
//  Pehle filter kiya, fir map karke sirf names liye.
console.log(cricketplayername); //here we get only cricket player name