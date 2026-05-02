import { useEffect, useState } from 'react';
import Course from './course';
import data from './data/dummydata.json';
import usefetch from './usefetch';

function CourseList() {
 

  const [courses,dummy,error]=usefetch('http://localhost:3000/Courses');
  
  function handleDelete(id) {
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
  }


    if(error){
      return (
      <>
      <p>ERROR:</p>
      </>
      )
    }

    if(!courses){
      return(
      <>
      <p>loading.. ...<div class="tenor-gif-embed" data-postid="6449096453315144907" data-share-method="host" data-aspect-ratio="0.9875" data-width="100%"><a href="https://tenor.com/view/loading-gif-6449096453315144907">Loading Sticker</a>from <a href="https://tenor.com/search/loading-stickers">Loading Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script></p>
      </>
      )
    }

    const courseList=courses.map(course => (
         <Course key={course.id}
          name={course.name}
          image={course.image}
          price={course.price}
          rating={course.rating}
          onDelete={() => handleDelete(course.id)}/>
        ))   

        return (
            <>
             {courseList}
             <button onClick={()=>{setDummy(!dummy)}}>Dummy button</button>
            </>
          );
  
}

export default CourseList;