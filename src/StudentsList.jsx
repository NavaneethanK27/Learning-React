import Student from './Student'
function StudentsList(){
const students=[
     {
        name:"naveen",
        regno:"23105033"
     },
     {
        name:"Mouli",
        regno:"23105031"
     }
   ]

      const studentsList=students.map((student,index) => <Student key={index} name ={student.name} regno={student.regno}/>)
   return(
       <div>
           {studentsList}
       </div>
   );
}

export default StudentsList