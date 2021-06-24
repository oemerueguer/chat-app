import React , { useRef }from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ SubId }) {
    const idRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        SubId(idRef.current.value)
    }

    const newID = () => {
        SubId(uuidV4())
    }


    return (
        <Container className="align-items-center d-flex" style={{height : '100vh'}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your Id</Form.Label>
                    <Form.Control type="text" ref={idRef}></Form.Control>
                </Form.Group>                
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={newID} variant="secondary">Create a new ID</Button>     
            </Form>
        </Container>
    )
}
