import { Gallery } from "@features/Gallery/ui";
import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";

export const HomeScreen = () => {
  return (
    <>
      <div
        className="mobile-screen flex flex-col items-center w-full min-[1024px]:hidden"
        id="main-mob"
      >
        <Slide direction="left">
          <h1 className="bigger text-custom-orange">Special Solutions</h1>
        </Slide>
        <Slide direction="right">
          <h2 className="mt-4">Ваш Партнер в Строительстве</h2>
        </Slide>
        <Slide direction="left">
          <p className="paragraph text-center mt-4">
            <span className="orange">Special Solutions</span> представляет
            портфолио передовых строительных работ. Мы стремимся к инновациям в
            каждом проекте, создавая функциональные и эстетически
            привлекательные объекты для наших клиентов.
          </p>
        </Slide>
        <Gallery />
        <Button
          text="Все проекты"
          type="outline"
          onClick={() => console.log("holla")}
          marginTop="mt-8"
        />
      </div>
      <div className="pc-screen w-full max-[1024px]:hidden" id="main">
        <Slide direction="left" triggerOnce={true}>
          <h1 className="w-[60%]">
            Special Solutions - Ваш Партнер в Строительстве
          </h1>
        </Slide>
        <Slide direction="right" triggerOnce={true} delay={100}>
          <p className="paragraph w-[55%] mt-8">
            <span className="orange">Special Solutions</span> представляет
            портфолио передовых строительных работ. Мы стремимся к инновациям в
            каждом проекте, создавая функциональные и эстетически
            привлекательные объекты для наших клиентов.
          </p>
        </Slide>
        <Slide direction="left" delay={200} triggerOnce={true}>
          <Gallery />
        </Slide>
        <Slide direction="right" delay={200} triggerOnce={true}>
          <Button
            text="Все проекты"
            onClick={() => console.log("All Projects")}
            marginTop="mt-8"
            type="outline"
          />
        </Slide>
      </div>
    </>
  );
};
