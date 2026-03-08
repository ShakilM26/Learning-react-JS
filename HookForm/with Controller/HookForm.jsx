import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {formSchema} from '../components/Schema'

export default function Form(){
    const{
        control, register, handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert('Succesfully Submited')
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Simple User Form</h2>

            <div>
                <input {...register('name')} placeholder="Name"/>
                <p>{errors.name?.message}</p>
            </div>

            <div>
                <input
                type='number' 
                {...register('age', {valueAsNumber: true})} placeholder="Age"/>
                <p>{errors.age?.message}</p>
            </div>

            <div>
                <input {...register('email')} placeholder="Email"/>
                <p>{errors.email?.message}</p>
            </div>

            <div>
                <Controller
                    name='location'
                    control={control}
                    render={({field}) => (
                        <input {...field} placeholder="Enter your location" />
                    )}
                />
                <p>{errors.location?.message}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}