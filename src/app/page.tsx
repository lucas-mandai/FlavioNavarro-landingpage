import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
    
        preTitle="Juntos podemos"
        title=" Lins de Portas Abertas"
      >
        Com influência e apoio na Assembleia Legislativa, Câmara dos Deputados, Governo do Estado-SP, Senado Federal e Ministérios
      </SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle="Juntos Podemos"
        title="Sobre mim"
        id="sobre"
      >
        Cristão, casado, pai de 3 filhos. Estou de volta a Lins com muita disposição para contribuir com minha influência a nível nacional trazendo grandiosas oportunidades para nossa cidade. 
      </SectionTitle>

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq /> */}
      <Cta />
    </Container>
  );
}
