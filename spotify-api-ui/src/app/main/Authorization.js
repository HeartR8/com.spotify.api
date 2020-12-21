import {useHistory} from "react-router-dom";
import {ErrorMessage, Form, Formik} from "formik";
// import LandingDataService from "../../ServerREST/Landing";
import React from "react";

function Authorization() {
    const history = useHistory();

    return (
        <div className={"landing-background"}>
            <div style={{marginTop: '4em'}}>
                <Formik
                    initialValues={{name: '', password: ''}}
                    onSubmit={
                        (values) => {
                        // LandingDataService.tryLoginUser(values).then(
                        //     response => {
                        //         if (response.data === "Success") {
                        //             console.log("login successes");
                        //             history.push('LandingAuthorization');
                        //         } else {
                        //             console.log("wrong user");
                        //         }
                        //     }
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
                                <input className={"inputs-login"}
                                       type="text"
                                       name={"name"}
                                       placeholder={"логин"}
                                       onChange={props.handleChange}/>
                                <input className={"inputs-login"}
                                       type="text"
                                       name={"password"}
                                       placeholder={"пароль"}
                                       onChange={props.handleChange}/>
                                <button className={"button-confirm"} type="submit">Войти</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default Authorization
