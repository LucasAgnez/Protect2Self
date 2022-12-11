// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import axios from "axios";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicCriacaoMetaHabito } from "../components/plasmic/protect_2_self/PlasmicCriacaoMetaHabito";
import { useRouter } from "next/router";
import { useState } from "react";

function CriacaoMetaHabito() {
  // Use PlasmicCriacaoMetaHabito to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCriacaoMetaHabito are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicCriacaoMetaHabito is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).

  const router = useRouter()
  const [frequencia, setFrequencia] = useState<number>()
  const [preenchido, setPreenchido] = useState<boolean>()

  function criaMetaHabito() {
    axios.post
    ("http://localhost:8080/meta/save", {
      nome: (document.getElementById("nome") as any).value,
      descricao: (document.getElementById("descricao")as any).value,
      tipo: "HABITO",
      frequencia,
      objs : "3;6;9;12;15",
    })
    .then((response) => {
      axios.put("http://localhost:8080/usuario/addMeta/" + localStorage.getItem('userId') + "/" + response.data.id)
      console.log(JSON.stringify(response));
      router.push('/logged');
    });
  }

  const estatdcmplt = (frequencia !== undefined) && preenchido

  function checaPreenchido(){
    if((document.getElementById("nome") as any).value && (document.getElementById("descricao") as any).value){
      setPreenchido(true);
    }
  }

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicCriacaoMetaHabito 
      frequencia={{
        props: { onChange: (e) => e && setFrequencia(+e)}
      }}
      nome={{
        props: { onChange: () => checaPreenchido()}
      }}
      descricao={{
        props: { onChange: () => checaPreenchido()}
      }}
      confirma={{
          props: { 
            isDisabled : !estatdcmplt,
            onClick: () => criaMetaHabito()}
      }} 
      />
    </ph.PageParamsProvider>
  );
}

export default CriacaoMetaHabito;
