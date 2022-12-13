import Input from "./Input"; // see import.js in forms
import { Form, Link, useSubmit } from "react-router-dom";

const fields = [
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
];

export default function Registration() {
  const submit = useSubmit();
  // link to registration page and about page below form
  return (
    <>
      <Form
        className="mx-auto my-4 mt-4 flex w-max flex-col gap-y-4 rounded-md border p-8"
        onSubmit={(e) => {
          e.preventDefault();
          submit(e.target, { method: "post" }); // submit must be done before submit to tranfer input
          e.target.reset();
        }}
      >
        {fields.map((field) => (
          <Input key={field.id} {...field} />
        ))}

        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Login
        </button>
      </Form>
      <Link
        to={`/register`}
        className="button text-white underline hover:text-gray-500"
      >
        Create Account
      </Link>
    </>
  );
}

Registration.propTypes = {};
