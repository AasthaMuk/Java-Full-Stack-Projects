import "./App.css";
import { ToastContainer } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import Options from "./components/Options";
import Home from './components/Home';
import AddCourses from './components/AddCourses';
import AllCourses from './components/AllCourses';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <div>
      <Router>

        <ToastContainer />

        <Container>
          <Header />

          <Row>
            <Col md={4}> 
                   <Options />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/home" element={<Home/>} exact/>
                <Route path="/addCourse" element={<AddCourses/>} exact/>
                <Route path="/viewCourses" element={<AllCourses/>} exact/>
              </Routes>
            </Col>
          </Row>

        </Container>

      </Router>
    </div>
  );
}

export default App;
