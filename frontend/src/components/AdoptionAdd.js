import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from 'axios';

function AdoptionAdd(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios({
            method: "post",

            url: "http://127.0.0.1:5000/adopt/add",

            data: {
                "title": data.title,
                "description": data.description
            }
        })
        .then(() => console.log("Se agrego " + data.title))
        .catch((error) => console.error("No se pudo agregar"))    
    }

    return (
        <>
        <h1 className="titulo-seccion">Agrega tu Pichicho</h1>

        <Box className="adoptionAdd"
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <TextField
                    required
                    label="Title"
                    {...register("title", { required: true })}
                />
            </div>
            <div>
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    maxRows={4}
                    {...register("description", { required: true })}
                />
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
                
            <Button variant="outlined" size="large" type="submit">
                Send
            </Button>
       </Box>
       </>
    );
}


export default AdoptionAdd;
