import * as yup from 'yup' 

const loginValidationsSchema =yup.object().shape({
Email: yup.string().email("Por favor insira um email valido"),
Password: yup.string().min(8,({min})=> `A senha deve ter no minimo ${min} digitos`)

})