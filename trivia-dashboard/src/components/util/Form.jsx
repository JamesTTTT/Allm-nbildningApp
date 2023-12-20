import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
const Form = ({ buttonText, fields, onSubmit, onChange, details, errors }) => {
  const formIntputs = () => {
    return fields.map((item, index) => {
      return (
        <div
          key={index}
          className="w-full flex flex-row items-center justify-center"
        >
          <input
            name={item.name}
            value={details[item.name] || ""}
            placeholder={item.placeholder}
            type={item.type}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors === undefined ? null : errors[item.name] ? (
            <AiOutlineExclamationCircle className="text-red-500 text-2xl ml-2" />
          ) : errors[item.name] === undefined ? (
            <AiOutlineExclamationCircle className="text-gray-500 text-2xl ml-2" />
          ) : (
            <AiOutlineCheckCircle className="text-green-500 text-2xl ml-2" />
          )}
        </div>
      );
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div>{formIntputs()}</div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
