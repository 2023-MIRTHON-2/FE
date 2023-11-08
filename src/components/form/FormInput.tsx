import { Controller } from "react-hook-form";
import Input from "@mui/joy/Input";
// import { useInput } from "@mui/base/useInput";

export type InputType = "text" | "number" | "password";

interface props {
  name: string;
  placeholder: string;
  type: InputType;
  // isMultiLine: boolean;
  disabled: boolean;
  required: boolean;
}

const FormInput = ({
  name,
  placeholder,
  type,
  // isMultiLine = false,
  disabled = false,
  required = false,
}: props) => {
  return (
    <Controller
      // key={key}
      name={name}
      rules={{ required: required }}
      render={({ field }) => (
        <Input
          // placeholder={`${name}을 입력해주세요.`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          // multiline={isMultiLine}
          {...field}
          // min={data.min}
          // max={data.max}
          // minLength={data.minLength}
          // maxLength={data.maxLength}
          // onChange={(e) => {
          //   field?.onChange(e.target.value);
          //   data.changeHandler ? data.changeHandler(e.target.value) : null;
          // }}
          // onBlur={(option) => {
          //   data.blurHandler && data.blurHandler(option);
          // }}
        />
      )}
    />
  );
};
{
  /* <FormInput data={data} type={data.inputType} field={field}></FormInput> */
}

export default FormInput;
