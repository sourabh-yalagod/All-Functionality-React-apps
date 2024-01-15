import * as Yup from "yup";

export const Validate = Yup.object({
    name:Yup.string().min(2).required('this field is required..!'),
    email:Yup.string().email().required('email must can not be empty..!'),
    password:Yup.string().required('email must can not be empty..!')
})