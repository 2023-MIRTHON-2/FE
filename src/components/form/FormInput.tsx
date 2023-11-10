import { Controller } from "react-hook-form";
import Input from "@mui/joy/Input";
import { FormInputStyle } from "../../styles/form/formStyle";
import BaisicButton from "../button/BaisicButton";

export type InputType = "text" | "number" | "password";

interface props {
  name: string;
  placeholder: string;
  type: InputType;
  disabled: boolean;
  required: boolean;
  endDecorator?: {
    type: "button";
    onClickEvent: (value: any) => void;
  } | null;
}

const FormInput = ({
  name,
  placeholder,
  type,
  disabled = false,
  required = false,
  endDecorator = null,
}: props) => {
  return (
    <FormInputStyle>
      <Controller
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <Input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            endDecorator={
              <>
                {endDecorator ? (
                  endDecorator.type === "button" ? (
                    <BaisicButton
                      content={"조회하기"}
                      color={"green"}
                      type={"button"}
                      onClickEvent={() => {
                        endDecorator.onClickEvent &&
                          endDecorator.onClickEvent(field.value);
                      }}
                      size={"small"}
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </>
            }
            {...field}
          />
        )}
      />
    </FormInputStyle>
  );
};

export default FormInput;
