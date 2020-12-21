import {useHistory} from "react-router-dom";
import {ErrorMessage, Form, Formik} from "formik";
// import LandingDataService from "../../ServerREST/Landing";
import React, {useState} from "react";
import "./SpotifyApp.css";

export function getUser(){
    let user1 = {
        name: 'user',
        password: 'user'
    }

    return user1;
}

function Authorization() {
    const history = useHistory();

    const [testUser, setTestUser] = useState("Enter user");

    return (
        <div>
            <div style={{marginTop: '4em'}}>
                <Formik
                    initialValues={{name: '', password: ''}}
                    onSubmit={
                        (values) => {
                            let u = getUser();
                            if (values.name === u.name) {
                                if (values.password === u.password) {
                                    setTestUser("Success");
                                    history.push('/');
                                } else {
                                    setTestUser("Wrong password");
                                }
                            } else {
                                setTestUser("Wrong user");
                            }
                        }
                    }
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <div className={"authorizationBlock"}>
                                    <label style={{marginLeft: 'auto'}}>
                                        {testUser}
                                    </label>
                                    <input className={"form-control"}
                                           type="text"
                                           name={"name"}
                                           placeholder={"логин"}
                                           onChange={props.handleChange}/>
                                    <input className={"form-control"}
                                           style={{marginTop: '10px'}}
                                           type="text"
                                           name={"password"}
                                           placeholder={"пароль"}
                                           onChange={props.handleChange}/>
                                    <button style={{width: '100%', marginTop: '10px'}} className={"btn btn-default"}
                                            type="submit">Войти
                                    </button>
                                </div>

                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default Authorization

