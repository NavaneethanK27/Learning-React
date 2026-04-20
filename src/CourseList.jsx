import { useEffect, useState } from 'react';
import Course from './course';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  function handleDelete(id) {
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
  }

  return (
    <>
      {courses.map(course => (
        <Course
          key={course.id}
          name={course.name}
          image={course.image}
          price={course.price}
          rating={course.rating}
          onDelete={() => handleDelete(course.id)}
        />
      ))}
    </>
  );
}

export default CourseList;