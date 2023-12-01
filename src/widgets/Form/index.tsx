import { useState } from "react";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";
import { Selector } from "@shared/ui/Selector";
import { ThanksPopup } from "@features/ThanksPopup/ui";
import { useSelector } from "react-redux";

import "./styles.scss";

type OptionType = { value: string; label: string };

export const Form = () => {
  const { register, handleSubmit, errors, handleSelectChange } = useSendEmail();

  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setOpen] = useState(false);

  const options: OptionType[] = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Офиса", label: "Дизайн Офиса" },
    { value: "Утепление Офиса", label: "Утепление Офиса" },
  ];

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedValue(selectedOption ? selectedOption.value : "");
    handleSelectChange(selectedOption);
  };

  const selectedOptionObject =
    options.find((option) => option.value === selectedValue) || null;

  const onFormSubmit = (data: any) => {
    handleSubmit(data);
    setOpen((o) => !o);
  };

  return (
    <>
      <div
        className="mobile-screen  flex flex-col items-center w-full min-[1024px]:hidden"
        id="contacts-mob"
      >
        <Slide direction="left" triggerOnce>
          <h5 className="mt-12">Свяжитесь с нами</h5>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph text-center mt-8">
            Компания <span className="orange">Special Solution </span>{" "}
            занимается разработкой передовых решений, способных удовлетворить
            самые изысканные и специфические запросы наших клиентов. Мы сочетаем
            глубокие знания отрасли с инновационным мышлением, чтобы предлагать
            продукты и услуги, выходящие за рамки стандартных предложений.
          </p>
        </Slide>
        <form
          className="form flex flex-col items-center mt-8 mb-16"
          onSubmit={onFormSubmit}
        >
          <Slide direction="left" className="w-full" triggerOnce>
            <div className="form__input mt-4">
              <Input
                {...register("full_name", {
                  required: "Заполните ваше имя",
                  pattern: {
                    value: /^[A-Za-zА-Яа-яёЁ]+(\s[A-Za-zА-Яа-яёЁ]+)*$/,
                    message: "Пожалуйста введите ваше имя правильно",
                  },
                })}
                name="full_name"
                type="text"
                placeholder="Ваше Имя*"
                isError={Boolean(errors.full_name)}
              />
              {errors.full_name && (
                <span className="form__input--error mt-4">
                  {errors.full_name.message}
                </span>
              )}
            </div>
          </Slide>
          <Slide direction="right" className="w-full" triggerOnce>
            <div className="form__input mt-8">
              <Input
                {...register("phone_number", {
                  required: "Заполните ваш телефон",
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: "Пожалуйста введите номер телефона правильно",
                  },
                })}
                name="phone_number"
                type="text"
                placeholder="Ваш Номер Телефона*"
                isError={Boolean(errors.phone_number)}
              />
              {errors.phone_number && (
                <span className="form__input--error mt-4">
                  {errors.phone_number.message}
                </span>
              )}
            </div>
          </Slide>
          <Slide direction="left" className="w-full" triggerOnce>
            <div className="form__input  mt-8">
              <Input
                {...register("email", {
                  required: "Заполните электронную почту",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Пожалуйста введите электронную почту правильно",
                  },
                })}
                name="email"
                type="email"
                placeholder="Ваша почта*"
                isError={Boolean(errors.email)}
              />
              {errors.email && (
                <span className="form__input--error mt-4">
                  {errors.email.message}
                </span>
              )}
            </div>
          </Slide>
          <div className="w-[100%]">
            <Selector
              key={selectedValue}
              options={options}
              selectedOption={selectedOptionObject}
              onChange={handleChange}
            />
          </div>
          <Slide
            direction="right"
            className="w-full flex items-center justify-center"
          >
            <Button text="Отправить" marginTop="mt-8" type="full" />
          </Slide>
        </form>
      </div>
      <div
        className="pc-screen flex flex-col items-center w-full max-[1024px]:hidden mt-24"
        id="contacts"
      >
        <h5>Свяжитесь с нами</h5>
        <p className="paragraph text-center w-[60%] mt-8">
          Компания <span className="orange">Special Solution</span> занимается
          разработкой передовых решений, способных удовлетворить самые
          изысканные и специфические запросы наших клиентов. Мы сочетаем
          глубокие знания отрасли с инновационным мышлением, чтобы предлагать
          продукты и услуги, выходящие за рамки стандартных предложений.
        </p>
        <form
          className="form flex flex-col items-center mt-8 mb-16"
          onSubmit={onFormSubmit}
        >
          <Slide direction="left" className="w-full" triggerOnce>
            <div className="form__input flex flex-col justify-center items-center mt-4">
              <Input
                {...register("full_name", { required: "Заполните ваше имя" })}
                name="full_name"
                type="text"
                placeholder="Ваше Имя*"
                isError={Boolean(errors.full_name)}
              />
              {errors.full_name && (
                <span className="form__input--error mt-4">
                  {errors.full_name.message}
                </span>
              )}
            </div>
          </Slide>
          <Slide direction="right" className="w-full" triggerOnce>
            <div className="form__input flex flex-col items-center justify-center mt-8">
              <Input
                {...register("phone_number", {
                  required: "Заполните ваш телефон",
                })}
                name="phone_number"
                type="text"
                placeholder="Ваш Номер Телефона*"
                isError={Boolean(errors.phone_number)}
              />
              {errors.phone_number && (
                <span className="form__input--error mt-4">
                  {errors.phone_number.message}
                </span>
              )}
            </div>
          </Slide>
          <Slide direction="left" className="w-full" triggerOnce>
            <div className="form__input flex flex-col items-center justify-center mt-8">
              <Input
                {...register("email", {
                  required: "Заполните электронную почту",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Пожалуйста введите электронную почту правильно",
                  },
                })}
                name="email"
                type="email"
                placeholder="Ваша почта*"
                isError={Boolean(errors.email)}
              />
              {errors.email && (
                <span className="form__input--error mt-4">
                  {errors.email.message}
                </span>
              )}
            </div>
          </Slide>
          <div className="w-[60%]">
            <Selector
              key={selectedValue}
              options={options}
              selectedOption={selectedOptionObject}
              onChange={handleChange}
            />
          </div>
          <Slide
            direction="right"
            className="w-full flex items-center justify-center"
            triggerOnce
          >
            <Button text="Отправить" marginTop="mt-16" type="full" />
          </Slide>
        </form>
      </div>
      <ThanksPopup open={isOpen} closeMenu={() => setOpen(false)} />
    </>
  );
};
