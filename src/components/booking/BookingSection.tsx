import FormDateRangePicker from "../form/FormDateRangePicker";
import FormTextArea from "../form/FormTextArea";
import FormInput, { InputType } from "../form/formInput";

interface props {
  title: string;
  data: {
    formType: "input" | "text-area" | "date-range";
    subTitle: string | null;
    name: string;
    placeholder: string;
    type?: InputType;
    disabled?: boolean;
    required?: boolean;
  }[];
}

const BookingSection = ({ title, data }: props) => {
  return (
    <section className={`flex flex-col px-20`}>
      <div
        className={`basic-border-bottom py-2 w-full flex justify-start font-bold text-xl text-my-green`}
      >
        {title}
      </div>
      <div className={`flex flex-col justify-start w-full gap-8 px-16 py-12`}>
        {data.map((_data) => (
          <div className={`flex gap-8 w-full`}>
            {_data.subTitle && (
              <div
                className={`font-semibold text-lg text-my-green min-w-[5rem]`}
              >
                {_data.subTitle}
              </div>
            )}
            {_data.formType === "input" ? (
              <FormInput
                name={_data.name}
                placeholder={_data.placeholder}
                type={_data.type ?? "text"}
                disabled={_data.disabled ?? false}
                required={_data.required ?? false}
              ></FormInput>
            ) : _data.formType === "text-area" ? (
              <FormTextArea
                name={_data.name}
                placeholder={_data.placeholder}
                disabled={_data.disabled ?? false}
                required={_data.required ?? false}
              ></FormTextArea>
            ) : (
              <FormDateRangePicker
                data={undefined}
                field={undefined}
              ></FormDateRangePicker>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingSection;
