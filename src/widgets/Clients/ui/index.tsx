import { Gallery } from "@features/Gallery/ui";

import logo1 from "@assets/clients/31.svg";
import logo2 from "@assets/clients/apple_city.svg";
import logo3 from "@assets/clients/burger_king.svg";
import logo4 from "@assets/clients/freedom.svg";
import logo5 from "@assets/clients/kaspi.svg";
import logo6 from "@assets/clients/lampadario.svg";
import logo7 from "@assets/clients/lenovo.svg";
import logo8 from "@assets/clients/siemes.svg";
import logo9 from "@assets/clients/syngenta.svg";

export const ClientScreen = () => {
  return (
    <>
      <main className="content-container">
        <h1>Наши клиенты</h1>
        <p className="paragraph mt-4 text-center w-[100%] min-[1024px]:w-[70%]">
          В мире, где каждое пространство имеет значение, компания Special
          Solutions выступает в качестве ключевого игрока в индустрии создания
          идеальных бизнес-пространств. С момента своего основания, мы
          зарекомендовали себя как лидера в области инновационного и
          функционального строительства, предназначенного для бизнеса всех
          масштабов.
        </p>
        <Gallery image={logo1} image2={logo2} image3={logo3} image4={logo4} />
      </main>
      ;
    </>
  );
};
