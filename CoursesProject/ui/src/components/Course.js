import React from 'react';
import { Card,CardBody,CardSubtitle,CardText,Button,Container } from 'reactstrap';
import axios from "axios";
import base_url from '../service/api';
import { toast } from 'react-toastify';


const Course=({course,update})=> {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/delete/${id}`).then(
            (response)=>{
                toast.success("course is deleted!!!!");
                update(id);
            },
            (error)=>{
                toast.error("course not deleted..... Server Problem !!!!");
            }
        )
    }

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                      }
                    }>Delete</Button>
                    {/* <Button color="success ml-3">Update</Button> */}
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course
