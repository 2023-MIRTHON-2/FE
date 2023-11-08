import Textarea from "@mui/joy/Textarea";
import { Controller } from "react-hook-form";

interface props {
  name: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
}
const FormTextArea = ({
  name,
  placeholder,
  disabled = false,
  required = false,
}: props) => {
  return (
    <Controller
      // key={key}
      name={name}
      rules={{ required: required }}
      render={({ field }) => <Textarea placeholder={placeholder} {...field} />}
    />
  );
};

export default FormTextArea;
