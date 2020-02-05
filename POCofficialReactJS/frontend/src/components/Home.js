import React from 'react';
import {Button,Spinner} from 'react-bootstrap';

const home =() =>{
    return(
        <div>
            <h1>Home</h1>
            <p>Home page body content</p>
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    );
}

export default home;