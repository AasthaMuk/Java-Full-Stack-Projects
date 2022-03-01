import React,{ useState,useEffect } from 'react';
import Course from './Course';
import base_url from "../service/api.js";
import axios  from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AllCourses=()=> {

    useEffect(()=>{
        document.title="All Courses";
    },[]);

    const [courses,setCourses]=useState([
     
    ]); 

    // function to call server
    const getCourses=()=>{
        axios.get(`${base_url}/courses`).then(
        (response)=>{
            // success
            // console.log(response.data);
            if(response.data.length>0){
                toast.success("courses have been loaded",{
                    toastId: 'success1',
                });
                setCourses(response.data);
            }
            else{
                toast.error("No Courses Found",{
                    position:"bottom-center",
                });
            }
            
        },
        (error)=>{
           // for error
           console.log(error);
           toast.error("something went wrong");
        })
    }

    // calling loading course function
    useEffect(()=>{
        getCourses();
    },[]);


    // remove course by id
    const removeCourseById = (id)=>{
         
        setCourses(courses.filter((c)=>c.id!==id));
    }


    
    return (
        <div>
            


            <h1>All Courses</h1>
            <p>List of all Courses: </p>

               {
                   courses.length>0 
                    ? courses.map((c) => 
                         <Course key={c.id} course={c} update={removeCourseById}/>) 
                    : "No courses available"

               }
            
        </div>
    )
}

export default AllCourses
