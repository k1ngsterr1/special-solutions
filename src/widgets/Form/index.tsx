import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { Input } from "@shared/ui/Input";

export const Form = () => {
  const { register, handleSubmit, errors, isSubmitting, isValid, onSubmit } =
    useSendEmail();

  return (
    <>
      <h5 className="mt-12">Свяжитесь с нами</h5>
      <p className="paragraph mt-8">
        Компания <span className="orange">Special Solution </span> занимается
        разработкой передовых решений, способных удовлетворить самые изысканные
        и специфические запросы наших клиентов. Мы сочетаем глубокие знания
        отрасли с инновационным мышлением, чтобы предлагать продукты и услуги,
        выходящие за рамки стандартных предложений.
      </p>
      <form
        className="form flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__input mt-4">
          <Input
            {...register("full_name", { required: "Заполните ваше имя" })}
            type="text"
            placeholder="Имя"
            isError={Boolean(errors.full_name)}
          />
          {errors.full_name && (
            <span className="form__input--error">
              {errors.full_name.message}
            </span>
          )}
        </div>
        <div className="form__input mt-4">
          <Input
            {...register("full_name", { required: "Заполните ваше имя" })}
            type="text"
            placeholder="Имя"
            isError={Boolean(errors.full_name)}
          />
          {errors.full_name && (
            <span className="form__input--error">
              {errors.full_name.message}
            </span>
          )}
        </div>
        <div className="form__input mt-4">
          <Input
            {...register("phone_number", { required: "Заполните ваш телефон" })}
            type="text"
            placeholder="Ваш Номер Телефона*"
            isError={Boolean(errors.phone_number)}
          />
          {errors.phone_number && (
            <span className="form__input--error">
              {errors.phone_number.message}
            </span>
          )}
        </div>
        <div className="form__input mt-4">
          <Input
            {...register("email", {
              required: "Заполните электронную почту",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Пожалуйста введите электронную почту правильно",
              },
            })}
            type="email"
            placeholder="Email"
            isError={Boolean(errors.email)}
          />
          {errors.email && (
            <span className="form__input--error">{errors.email.message}</span>
          )}
        </div>
      </form>
    </>
  );
};
