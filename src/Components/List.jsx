import React, {useState} from 'react';
import { Container, ListGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

export default function List() {

    const names = [
        {firstname: 'John', lastname: 'David'},
        {firstname: 'Sofia', lastname: 'Morris'},
        {firstname: 'Mary', lastname: 'Rollins'},
        {firstname: 'Harris', lastname: 'Gilmore'},
        {firstname: 'Faith', lastname: 'Crane'},
        {firstname: 'Edwin', lastname: 'Park'},
        {firstname: 'Jad', lastname: 'Blake'},
        {firstname: 'Rosa', lastname: 'Pollard'},
        {firstname: 'Chase', lastname: 'Bell'},
        {firstname: 'Alora', lastname: 'Marks'},
    ];
    
    const [data, setData]=useState(false);

    const handleList = () => {
        setData(!data);
    };

    let id=1;
    return (
        <Container>
            <h1>Student Names</h1>
            <Button onClick={handleList} variant="secondary" className="mb-3">
                {data ? "Hide List" : "Show List"}
            </Button>
            {data &&
                <ListGroup>
                    {names.map((item) => (
                        <ListGroup.Item variant="dark" key={item.firstname}>{id++}. {item.firstname} {item.lastname}</ListGroup.Item>
                    ))}
                </ListGroup>
            }
        </Container>
    );
}