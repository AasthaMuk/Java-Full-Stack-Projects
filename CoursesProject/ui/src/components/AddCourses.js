import React, { useEffect, Fragment, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import axios  from "axios";
import base_url from "../service/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddCourses = () => {

  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [courses,setCourses] = useState({});

  // creating a function to post data on server
  const postDataToServer = (courses) =>{
     axios.post(`${base_url}/courses/add`,courses).then(
       (response)=>{
           console.log(response);
           console.log("SUCCESS");
           toast.success("Course has been added", {
            toastId: 'success1',
        });
       },
       (error)=>{
           console.log(error);
           console.log("ERROR");
           toast.error("error !!!!");
       }
     )
  }


  // form-handler function for adding course
  const handleForm = (e)=>{
      console.log(courses);
      postDataToServer(courses);
      e.preventDefault();
  }

  return (
    <Fragment>
    <p> Enter the form to add course details: </p> 
    <Form onSubmit={handleForm}>
      <FormGroup>
          <Label for="userId" > Course Id: </Label> 
          <Input type="text"
              name="userId"
              id="userId"
              placeholder="Enter id"
              onChange={(e)=>{
                setCourses({...courses,id:e.target.value});
              }}/>
      </FormGroup>

      <FormGroup>
            <Label for="title" > Course Title: </Label> 
            <Input type="text"
                  id="title"
                  placeholder="Enter title"
                  onChange={(e)=>{
                    setCourses({...courses,title:e.target.value});
                  }}/>
      </FormGroup>

      <FormGroup>
            <Label for="description" > Course Description: </Label> 
            <Input type="textarea"
                id="description"
                placeholder="Enter course description"
                style={
                  { height: 150 }
                }
                onChange={(e)=>{
                   setCourses({...courses,description:e.target.value});
                }}/> 
      </FormGroup>

      <Container className="text-center">
          <Button type="submit" color="success" > Add Course </Button> 
          <Button type="reset" color="warning ml-2" onClick={()=>{
               setCourses({})
          }}> Clear </Button> 
      </Container >

  

    </Form> 
    </Fragment >
    );
};

export default AddCourses;