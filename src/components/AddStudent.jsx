import { useState } from 'react';

import axios from 'axios';

export const AddStudent = () => {
    const[form,setForm]=useState({
        first_name:"",
        last_name:"",
        email:"",
        gender:"",
        age:"",
        tenth_Score:"",
        twelth_Score:"",
        preferred_branch:""

    })
    const formHandle=(e)=>{
        const{id,value}=e.target;
        setForm({...form,[id]:value});
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("localhost:8080/students",{
            first_name:form.first_name,
            last_name:form.last_name,
            email:form.email,
            gender:form.gender,
            age:form.age,
            tenth_score:form.tenth_Score,
            twelth_score:form.twelth_Score,
        })
    }
    return (
      <form className="addstudent">
        <div>
          First Name:{" "}
          <input
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            onChange={formHandle}
          />
        </div>
        <div>
          Last Name:   {" "}
          <input
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            onChange={formHandle}
          />
        </div>
        <div>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
            onChange={formHandle}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
              name="gender"
              className="male"
              type="radio"
              value={"male"}
              onChange={formHandle}
              
            />{" "}
            Female{" "}
            <input
              name="gender"
              className="female"
              type="radio"
              value={"female"}
              onChange={formHandle}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            onChange={formHandle}
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            onChange={formHandle}
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            onChange={formHandle}
          />{" "}
        </div>
        <div>
          <select
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
            onChange={formHandle}
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" onChange={submitHandler}  />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };