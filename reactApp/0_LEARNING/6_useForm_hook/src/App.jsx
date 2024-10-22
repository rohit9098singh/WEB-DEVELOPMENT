import React from "react";
import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input 
            {...register("firstName", {
              required: "This field is required",
              minLength: { value: 4, message: "Minimum length is 4" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })} 
            placeholder="Enter your first name"
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        <div>
          <label>Middle Name:</label>
          <input 
            {...register("middleName")} 
            placeholder="Enter your middle name"
          />
          {/* Optionally display an error message if needed */}
          {errors.middleName && <span>{errors.middleName.message}</span>}
        </div>

        <div>
          <label>Last Name:</label>
          <input 
            {...register("lastName", { 
              required: "This field is required", 
              minLength: { value: 4, message: "Minimum length is 4" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })} 
            placeholder="Enter your last name"
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>

        <input 
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
}

export default App;

