import React from "react";
import { useForm } from "react-hook-form";
import {  useDispatch } from "react-redux";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { add } from "./userSlice";
import "./CreateUser.css";

const CreateUser = () => {
    
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(add(data));
        reset()

    };

    return (
        <div className="Container">
            <form onSubmit={handleSubmit(onSubmit)} className="Form">
                <div className="Name">
                    <div className="title">
                        <span>Title *: </span>
                        <select {...register("Title")} required>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Miss.">Miss.</option>
                        </select>
                    </div>
                    <div className="firstname">
                        <span>Firstname *: </span>
                        <input {...register("Firstname")} required />
                    </div>
                    <div className="lastname">
                        <span>Lastname *: </span>
                        <input {...register("Lastname")} required/>
                    </div>
                </div>
                <div className="birthdaynation">
                    <div className="birthday">
                        <span>BirthDay *: </span>
                        <input {...register("Birthday")} type="date" required/>
                    </div>
                    <span>Nationality : </span>
                    <select {...register("Nationality")}>
                        <option value="thai">thai</option>
                        <option value="japan">japan</option>
                        <option value="Chinese">chinese</option>
                    </select>
                </div>
                <div className="cityzen">
                    <span>CityzenID : </span>
                    <input {...register("CityzenID")} />
                </div>
                <div className="gender">
                    <span>Gender :</span>
                    <span>
                        <input
                            type="radio"
                            {...register("gender")}
                            value="male"
                        />{" "}
                        Male
                        <input
                            type="radio"
                            {...register("gender")}
                            value="female"
                        />{" "}
                        Female
                        <input
                            type="radio"
                            {...register("gender")}
                            value="unisex"
                        />{" "}
                        Unisex
                    </span>
                </div>
                <div className="moblie">
                    <span>MobliePhone : </span>
                    <PhoneInput {...register("MobliePhone")} />
                </div>
                <div className="passport">
                    <span>Passport No : </span>
                    <input {...register("Passport No")} />
                </div>
                <div className="expect">
                    <div className="salary">
                        <span>Expected Salary : </span>
                        <input {...register("Expected Salary")} />
                    </div>
                    <input type="submit" className="submit" />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
