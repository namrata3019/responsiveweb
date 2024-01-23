import { useEffect } from "react";
import { useState } from "react";
import CourseFilters from "../Components/CourseFilter";
import CourseGrid from "../Components/CourseGrid";
import CutomPagination from "../Components/Pagination";
import { Paper } from "@mui/material";
import { fetchCourse } from "../Service/CourseService";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filterCourses, setfilterCourses] = useState([]);
  const [page, setPage] = useState(1);

  let start = page * 6 - 6;
  let end = start + 6;

  useEffect(() => {
    if (courses.length === 0) {
      fetchCourse()
        .then((resp) => {
          console.log(resp.data.slice().reverse())
          setCourses(resp.data.slice().reverse());
          setfilterCourses(resp.data.slice().reverse());
          
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [courses]);

  useEffect(() => {
    setPage(1)
  }, [filterCourses]);

  return (
    <div
      style={{
        display: "flex",
        padding: 1,
        gap: 1,
        flexDirection: "column",
        alignContent:"center"
      }}
    >
      <CourseFilters
        setfilterCourses={setfilterCourses}
        courses={courses}
        setCourses={setCourses}
      />
      <CourseGrid courses={filterCourses.slice(start, end)} page={page} />
      { filterCourses.slice(start, end).length > 0 && <CutomPagination
        courses={filterCourses}
        setCourses={setCourses}
        page={page}
        setPage={setPage}
      />}
    </div>
  );
};

export default Courses;
