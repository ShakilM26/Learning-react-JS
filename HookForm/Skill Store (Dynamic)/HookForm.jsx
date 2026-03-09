import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { skillSchema } from "./schema"

export default function SkillManager() {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      userName: "",
      skills: [{ skillName: "" }] 
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  const onSubmit = (data) => {
    console.log("Your Skills:", data);
    alert(`${data.userName} your all info submitted`);
  };

  return (
    <div style={{ padding: '20px'}}>
      <h2>Skill Store</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* user name */}
        <div style={{ marginBottom: '15px' }}>
          <label>Your Name:</label> <br />
          <input {...register("userName")} placeholder="Enter name" style={{ padding: '8px', width: '100%' }} />
          <p style={{ color: 'red', fontSize: '13px' }}>{errors.userName?.message}</p>
        </div>

        <hr />

        {/* skill inputs */}
        <h4>Add Skills:</h4>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: '15px'}}>
            <input 
              {...register(`skills.${index}.skillName`)} 
              placeholder="ex. JavaScript"
              style={{ padding: '8px' }}
            />
            
            <button type="button" onClick={() => remove(index)} style={{ marginLeft: '10px', color: 'red' }}>
              Remove
            </button>

            <p style={{ color: 'red', fontSize: '12px'}}>
              {errors.skills?.[index]?.skillName?.message}
            </p>
          </div>
        ))}

        <button 
          type="button" 
          onClick={() => append({ skillName: "" })}
          style={{ marginBottom: '20px', cursor: 'pointer' }}
        >
          Add More Skill
        </button>

        <br />
        <button type="submit" style={{ background: 'green', color: 'white', cursor: 'pointer', width: '100%' }}>
          Save Your Skills
        </button>
      </form>
    </div>
  );
}