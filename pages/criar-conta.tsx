// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import axios from "axios";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicCriarConta } from "../components/plasmic/protect_2_self/PlasmicCriarConta";
import { useRouter } from "next/router";

function CriarConta() {
  // Use PlasmicCriarConta to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCriarConta are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicCriarConta is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  
  const router = useRouter()

  function criaUsuario() {
    axios
      .post("localhost:8080/usuario/save", {
        nome: (document.getElementById("nomeCompleto") as any).value,
        username: (document.getElementById("nomeUsuario")as any).value,
        telefone: (document.getElementById("telefone")as any).value,
        senha: (document.getElementById("senha")as any).value,
        email:(document.getElementById("email")as any).value,
      })
      .then((response) => {
        console.log(JSON.stringify(response));
      });
    //router.push('/')
  }

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicCriarConta confirma={{
          props: { onClick: () => criaUsuario()}
      }} 
      />
    </ph.PageParamsProvider>
  );
}

export default CriarConta;
