import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {  register,handleSubmit, errors } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Registration Form</h3>
                <div className="form-group mt-3">
                    <label htmlFor="username">UserName</label>
                    <input type="text" placeholder="enter text" name="username" className="form-control" ref={register({required: 'username is required'})}  />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="enter email" name="email" className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="enter password" name="password" className="form-control"  />
                </div>
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
