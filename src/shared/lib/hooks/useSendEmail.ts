import { useForm } from "react-hook-form";
import { OptionType } from "@shared/ui/Selector";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { turnOnLoading } from "../redux/loaderSlice";
import { togglePopup } from "../redux/popupSlice";

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

  const dispatch = useDispatch();

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
        .then(() => {
          dispatch(togglePopup());
          reset();
        });
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
