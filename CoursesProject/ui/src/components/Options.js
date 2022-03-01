import React from 'react';
import { ListGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

const Options =()=> {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/home" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addCourse" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewCourses" action>View Courses</Link>
        </ListGroup>
    );
}

export default Options
