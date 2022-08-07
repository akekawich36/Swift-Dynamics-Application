import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "react-phone-number-input/style.css";
import { add } from "./userSlice";
import "./CreateUser.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhoneInput from "react-phone-number-input";
import Button from "@mui/material/Button";

const CreateUser = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(add(data));
        reset();
    };

    return (
        <Box className="Box">
            <form onSubmit={handleSubmit(onSubmit)} className="Form">
                <Grid className="Name">
                    <Grid>
                        Title * :
                        <select {...register("Title")} required>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Miss.">Miss.</option>
                        </select>
                    </Grid>
                    <Grid>
                        Firstname * :
                        <input
                            {...register("Firstname")}
                            required
                            type="text"
                        />
                    </Grid>
                    <Grid>
                        Lastname * :
                        <input {...register("Lastname")} required type="text" />
                    </Grid>
                </Grid>
                <Grid className="BirthdayNation">
                    <Grid>
                        BirthDay * :
                        <input {...register("Birthday")} type="date" required />
                    </Grid>
                    <Grid>
                        Nationality :
                        <select {...register("Nationality")}>
                            <option value="thai">Thai</option>
                            <option value="japanese">Japanese</option>
                            <option value="Chinese">Chinese</option>
                            <option value="German">German</option>
                            <option value="Korean">Korean</option>
                        </select>
                    </Grid>
                </Grid>
                <Grid className="cityzen">
                    CityzenID :
                    <input {...register("CityzenID")} type="number" />
                </Grid>
                <Grid className="gender">
                    Gender :
                    <input
                        type="radio"
                        {...register("gender")}
                        value="Male"
                    />{" "}
                    Male
                    <input
                        type="radio"
                        {...register("gender")}
                        value="Female"
                    />{" "}
                    Female
                    <input
                        type="radio"
                        {...register("gender")}
                        value="Unisex"
                    />{" "}
                    Unisex
                </Grid>
                <Grid className="moblie">
                    Moblie Phone :
                    <PhoneInput {...register("MobliePhone")} />
                </Grid>
                <Grid className="passport">
                    Passport No :
                    <input {...register("Passport No")} type="number" />
                </Grid>
                <Grid className="Salary">
                    Expected Salary :
                    <input {...register("Expected Salary")} type="number" required/>
                </Grid>
                <Grid className="Button">
                    <Button type="submit" className="submit">
                        SUBMIT
                    </Button>
                </Grid>
            </form>
        </Box>
    );
};

export default CreateUser;
