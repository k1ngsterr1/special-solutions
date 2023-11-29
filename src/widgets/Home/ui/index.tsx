import { Gallery } from "@features/Gallery/ui";
import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

// Assets
import gallery01 from "@assets/design_gallery_01.webp";

export const HomeScreen = () => {
  const navigate = useNavigate();

  function navigateServices() {
    navigate("/services");
  }
  function navigatePortfolio() {
    navigate("/portfolio");
  }

  return (
    <>
      <div
        className="mobile-screen flex flex-col items-center w-full min-[1024px]:hidden"
        id="main-mob"
      >
        <Slide direction="left">
          <h1 className="bigger text-custom-orange">Special Solutions</h1>
        </Slide>
        <span className="w-[50%] border-[1px] mt-4 border-custom-black"></span>
        <Slide direction="right">
          <h2 className="mt-4 smaller">
            Ваш Партнер в создании Бизнес Пространства
          </h2>
        </Slide>
        <Slide direction="left">
          <p className="paragraph text-center mt-4">
            <span className="orange">Special Solutions</span> представляет
            портфолио передовых строительных работ. Мы стремимся к инновациям в
            каждом проекте, создавая функциональные и эстетически
            привлекательные объекты для наших клиентов.
          </p>
        </Slide>
        <Gallery
          image={gallery01}
          image2={gallery01}
          image3={gallery01}
          image4={gallery01}
          onClick={navigatePortfolio}
          onClick2={navigatePortfolio}
          onClick3={navigatePortfolio}
          onClick4={navigatePortfolio}
        />
        <Button
          text="Все проекты"
          type="outline"
          onClick={navigatePortfolio}
          marginTop="mt-8"
        />
      </div>
      <div
        className="pc-screen w-full max-[1024px]:hidden min-[2560px]:mt-[100px]"
        id="main"
      >
        <Slide direction="left" triggerOnce={true}>
          <h1 className="w-[60%]">
            Special Solutions -{" "}
            <span className="smaller">
              {" "}
              Ваш Партнер в Cоздании Бизнес Пространства
            </span>{" "}
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
          <Gallery
            image={gallery01}
            image2={gallery01}
            image3={gallery01}
            image4={gallery01}
            onClick={navigatePortfolio}
            onClick2={navigatePortfolio}
            onClick3={navigatePortfolio}
            onClick4={navigatePortfolio}
          />
        </Slide>
        <Slide direction="right" delay={200} triggerOnce={true}>
          <Button
            text="Все проекты"
            onClick={navigatePortfolio}
            marginTop="mt-8"
            type="outline"
          />
        </Slide>
      </div>
    </>
  );
};
