import { useForm } from "react-hook-form";
import { OptionType } from "@shared/ui/Selector";
import emailjs from "@emailjs/browser";

export interface SendFormData {
  full_name: string;
  phone_number: string;
  email: string;
  service: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<SendFormData>({
    mode: "onChange",
  });

  const onSubmit = (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    if (event) {
      event.preventDefault();

      emailjs
        .sendForm(
          "service_mpcvnod",
          "template_exf8ibb",
          event.target,
          "WDWj-JZ9ORopqFaG3"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            reset();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );
    }
  };

  const handleSelectChange = (selectedOption: OptionType | null) => {
    setValue("service", selectedOption ? selectedOption.value : "", {
      shouldValidate: true,
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    handleSelectChange,
    errors,
  };
}
