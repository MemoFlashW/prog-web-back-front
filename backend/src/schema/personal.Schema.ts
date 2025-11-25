import {z} from 'zod';

const telefonoRegex = new RegExp(
    /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
)
//validaciones con Zod - construir un schema
export const personalSchema = z.object({
    nombre:z.string().min(2).max(200),
    direccion:z.string(),
    telefono:z.string().regex(telefonoRegex),
    //telefono:z.string().min(10).max(15),
    estatus: z.number().int().positive('Solo numeros positivos').min(1).max(2)
});
