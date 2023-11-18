import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export interface SendFormData {
  full_name: string;
  phone_number: string;
  email: string;
  option: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SendFormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: SendFormData) => {
    const formData = data as unknown as Record<string, unknown>;

    emailjs
      .send("your_service_id", "your_template_id", formData, "your_user_id")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting, isValid };
}
