import Input from "./Input"; // see import.js in forms
import PropTypes from "prop-Types";

// initial version taken from in-class work

const fields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
  },
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

export default function Registration({ onClick }) {
  return (
    <form
      onSubmit={onClick}
      className="mx-auto my-4 mt-4 flex h-fit w-max flex-col gap-y-4 rounded-md border p-8"
    >
      {fields.map((field) => (
        <Input key={field.id} {...field} />
      ))}

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Create Account
      </button>
    </form>
  );
}

Registration.propTypes = {
  onClick: PropTypes.func.isRequired,
};
