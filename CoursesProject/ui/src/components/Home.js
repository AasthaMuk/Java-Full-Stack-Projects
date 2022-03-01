import React ,{ useEffect } from 'react';
import { Container,Button } from 'react-bootstrap';

const Home = () => {

    useEffect(()=>{
        document.title="Home Page";
    },[]);

    return ( 
    <div>
        <Container className = "text-center">
            <h1 className = "display-3" > Learn Courses </h1> 
            <p> This is developed by Aastha.... </p> 
            {/* <Container>
               <Button color = "primary" outline > Start using Now !!!!</Button> 
            </Container>  */}
        </Container> 
    </div>
    )
}

export default Home