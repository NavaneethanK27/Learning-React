
import Course from './course';
import HTML from './assets/image1.png' 
import HTML1 from './assets/image2.png'
import { useState } from 'react';
function CourseList(){
   const [courses, setCourses]=useState([
    {
       id : 1,
       name : "HTML",
       price:199,
       image: HTML,
       rating : "5"
    },
    {
       id : 2,
       name : "CSS",
       price:200,
       image: HTML1,
       rating : "5"
    }
   ])

   function handledelete(id){
      const newCourse = courses.filter((courses)=>courses.id!=id)
      setCourses(newCourse);
   }
   
   courses.sort((x,y)=>y.price-x.price)
   // const vfm=courses.filter((courses)=>courses.price<200);
   const courseList = courses.map(
   (course,index)=>
   <Course key={index} name={course.name}
      image={course.image} 
      price={course.price} 
      rating={course.rating} ondelete={()=>handledelete(course.id)}/>)
   return(
      <>
        {courseList}
      </>
   );



}

export default CourseList