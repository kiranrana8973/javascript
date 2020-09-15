// objects in javascript

let student = {
    first:'kiran',
    last:'rana',
    age : 34,
    studentInfo : function(){
        return 'Full name is : ' + this.first + ' ' + this.last
    } 
}
            
console.log(student)
console.log(student.first)
console.log(student['first'])
console.log(student.studentInfo())