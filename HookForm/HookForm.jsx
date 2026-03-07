import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "./Schema";
import './App.css'

export default function RegistrationForm() {
  const {
    register, // connect input field 
    handleSubmit, // for handle form submit
    formState: {errors},
  } = useForm({
    resolver: zodResolver(userSchema) // connecting with zod
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Form Submited')
  };

  return (
    <div>
      <h2>Task: Zod and React Hook Form</h2>
      <hr/>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('username')} placeholder='Username' />
        <p>{errors.username?.message}</p>
      </div>

      <div>
        <input {...register('email')} placeholder='Email' />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <input {...register('age')} placeholder='Age' />
        <p>{errors.age?.message}</p>
      </div>

      <div>
        <input {...register('password')} placeholder='Password' />
        <p>{errors.password?.message}</p>
      </div>

      <button onSubmit={onSubmit}>Submit</button>
    </form>
    </div>

  )
}