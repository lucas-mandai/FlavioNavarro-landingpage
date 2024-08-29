import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div id="contato" className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center py-2">
          <h2 className="text-2xl font-medium lg:text-2xl pb-4">
            Quer conhecer melhor minhas propostas e conversar comigo?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Entre em contato pelo e-mail: 
          </p>
          <p>contato@flavionavarro20200.com.br</p>
        </div>
      </div>
    </Container>
  );
};
