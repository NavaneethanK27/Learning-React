
import Course from './course';
import HTML from './assets/image1.png' 
import HTML1 from './assets/image2.png'
function CourseList(){
   const courses =[
    {
       name : "HTML",
       price:"199",
       image: HTML,
       rating : "5"
    },
    {
        name : "CSS",
       price:"200",
       image: HTML1,
       rating : "5"
    }
   ]

   
   const courseList = courses.map((course)=>
   <Course name={course.name} 
   image={course.image} 
   price={course.price} 
   rating={course.rating}/>)
   return(
      <>
        {courseList}
      </>
   );



}

export default CourseList