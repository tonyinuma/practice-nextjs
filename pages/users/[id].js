import React from "react";
import {useRouter} from "next/router";
import Container from "../../components/container";

const User = ({user}) => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} alt="" style={{borderRadius:'50%'}}/>
                        </div>
                        <div className="card-body text-center">
                            <h3>{user.first_name}, {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

User.getInitialProps = async (ctx) => {
    const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await response.json();

    return {user: resJSON.data}
}

export default User
