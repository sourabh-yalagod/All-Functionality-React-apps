import React from "react";
import { useFormik } from "formik";
import { Validate } from './schema/index.jsx';

function App() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const { values, errors , touched , handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:Validate,
    onSubmit: (values) => {
    },
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className="min-w-[350px] w-full max-w-[450px] h-auto grid gap-4 bg-slate-900 text-sm p-10 rounded-lg">
      <h1 className="text-center text-5xl text-white mb-3">Login page</h1>
      <div className="">
        <p className="">Name</p>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="border-[1px] rounded-2 outline-none border-slate-800 pl-3 py-1 w-full text-lg"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          />
        { errors.name && touched.name ? <p className="text-xs ml-2 text-red-900 h-[10px]">{errors.name}</p>: 
        null}
        
      </div>
      <div className="">
        <p className="">Email</p>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="border-[1px] rounded-[5px] outline-none border-slate-800 pl-3 py-1 w-full text-lg"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ?<p className="text-xs ml-2 text-red-900 h-[10px]">{errors.email}</p>: 
        null}
      </div>
      <div className="pb-5">
        <p className="">Password</p>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border-[1px] rounded-[5px] outline-none border-slate-800 pl-3 py-1 w-full text-lg"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? <p className="text-xs ml-2 text-red-900 h-[10px]">{errors.email}</p>: 
        null}
      </div>
      <div className="w-full flex justify-around place-items-center gap-4"></div>
      <button
        id="logIn"
        type="submit"
        className="w-1/2 py-1 text-lg text-white bg-blue-700 hover:bg-blue-800 rounded-md shadow-[0.1px_0.1px_3px_black]">Submit</button>
    </form>
  );
}

export default App;
