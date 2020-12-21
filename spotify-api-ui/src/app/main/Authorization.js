import {useHistory} from "react-router-dom";
import {ErrorMessage, Form, Formik} from "formik";
// import LandingDataService from "../../ServerREST/Landing";
import React, {useState} from "react";
import "./SpotifyApp.css";

function Authorization() {
    const history = useHistory();

    const [testConnection, setTestConnection] = useState("___");

    return (
        <div>
            <div style={{position: 'absolute', margin: '1em 1em 0 0'}} onClick={() => {
                // LandingDataService.tryConnection().then(
                //     response => {
                //         if (response.data === "OK") {
                //             console.log(testConnection);
                //             setTestConnection("all good");
                //         } else {
                //             console.log(testConnection);
                //             setTestConnection(" problems with server");
                //         }
                //     }
                // ).catch((err) => {
                //     console.error(err);
                //     console.log(err);
                //     setTestConnection("no connection");
                // });
            }}></div>
            <div style={{marginTop: '4em'}}>
                <Formik
                    initialValues={{name: '', password: ''}}
                    onSubmit={
                        (values) => {
                        // LandingDataService.tryLoginUser(values).then(
                        //     response => {
                        //         if (response.data === "Success") {
                        //             console.log("login successes");
                                    history.push('/');
                            //     } else {
                            //         console.log("wrong user");
                            //     }
                            // }
                        // );
                        }
                    }
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div"/>
                                <div className={"authorizationBlock"}>
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
                                    <button style={{width: '100%', marginTop: '10px'}} className={"btn btn-default"} type="submit">Войти</button>
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
