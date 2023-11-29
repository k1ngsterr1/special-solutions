// useSendEmail.ts
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export interface SendFormData {
  full_name: string;
  phone_number: string;
  email: string;
  service_option: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
    getValues, // This will be used to get form values
  } = useForm<SendFormData>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((formData) => {
    const form = document.querySelector("form") as HTMLFormElement; // Assuming there's only one form on the page

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        form,
        process.env.REACT_APP_EMAILJS_KEY!
      )
      .then((res: unknown) => {
        console.log("send");
        reset(); // Reset the form fields after successful submission
      })
      .catch((err: unknown) => console.error(err));
  });

  // If you need to do something with the form data before sending, use getValues() here

  return {
    register,
    onSubmit, // No need to wrap handleSubmit here again
    errors,
    isSubmitting,
    isValid,
  };
}
