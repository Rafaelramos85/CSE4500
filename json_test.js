const student = {
  name :[ '"Rafael Ramos"' ,  '"Gerald Perkins"'],
  height :[ '"6ft"', '"5ft 10in"' ],
  age : [ 24, 45 ],
  school : ['"CSUSB"' , '"none"' ],
  major : ['"CSE"', '"none"' ]

}
console.log(student);

// turns student into a string
const studentToString = JSON.stringify(student)

// sturns student into an object
const studentToObj = JSON.parse(studentToString)

// shows stubent is a string
console.log(typeof studentToString);

/*********** first entry **************/
console.log(JSON.parse(studentToObj.name[0]));
console.log(JSON.parse(studentToObj.height[0]));
console.log(JSON.parse(studentToObj.age[0]));
console.log(JSON.parse(studentToObj.school[0]));
console.log(JSON.parse(studentToObj.major[0]));

/*********** second entry **************/

// console.log(JSON.parse(studentToObj.name[1]));
// console.log(JSON.parse(studentToObj.height[1]));
// console.log(JSON.parse(studentToObj.age[1]));
// console.log(JSON.parse(studentToObj.school[1]));
// console.log(JSON.parse(studentToObj.major[1]));

// shows student is an object
console.log(typeof studentToObj);