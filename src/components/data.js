import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  ArrowDownRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/navarro.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Principais Ideias",
  desc: "Com influência e apoio podemos mudar a história de Lins",
  image: benefitOneImg,
  bullets: [
    {
      title: "Gabinete Itinerante",
      desc: "Vou até o seu bairro para ouvir as suas necessidades",
      icon: <ArrowRightCircleIcon />,
    },
    {
      title: "Não utilização de verba partidária",
      desc: "Não utilizarei dinheiro público para minha campanha",
      icon: <ArrowRightCircleIcon />,
    },
    {
      title: "Mais oportunidades para cidade",
      desc: "Estreitarei o relacionamento de Lins com pessoas importantes do Brasil todo",
      icon: <ArrowRightCircleIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
