import Container from "../components/container";
import React from "react";
import fetch from 'isomorphic-fetch';
import Users from "../components/users";


const Index = (props) => {
    return (
        <Container>
            <h1>Hello world</h1>
            <Users users={props.users}/>
        </Container>
    )
}

Index.getInitialProps = async (context) => {
    const response = await fetch(`https://reqres.in/api/users`);
    const resJSON = await response.json();
    return {users:resJSON.data}
}

export default Index