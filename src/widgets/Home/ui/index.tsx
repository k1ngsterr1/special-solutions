import { Gallery } from "@features/Gallery/ui";
import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";

export const HomeScreen = () => {
  return (
    <>
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
          каждом проекте, создавая функциональные и эстетически привлекательные
          объекты для наших клиентов.
        </p>
      </Slide>
      <Gallery />
      <Button
        text="Все проекты"
        type="outline"
        onClick={() => console.log("holla")}
        marginTop="mt-8"
      />
    </>
  );
};
