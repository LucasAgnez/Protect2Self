// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import axios from "axios";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicCriacaoMetaHabitoGrupo } from "../components/plasmic/protect_2_self/PlasmicCriacaoMetaHabitoGrupo";
import { useRouter } from "next/router";
import { useState } from "react";

function CriacaoMetaHabitoGrupo() {
  // Use PlasmicCriacaoMetaHabitoGrupo to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCriacaoMetaHabitoGrupo are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicCriacaoMetaHabitoGrupo is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const router = useRouter()
  const [frequencia, setFrequencia] = useState<number>()
  const [preenchido, setPreenchido] = useState<boolean>()

  function criaGrupoHabito() {
    axios.post
    ("http://localhost:8080/meta/save/",{
        nome: (document.getElementById("nomeMeta") as any).value,
        descricao: (document.getElementById("descricaoMeta")as any).value,
        tipo: "HABITO",
        frequencia,
        objs : "3;6;9;12;15",
    }).then((responseMeta) => {
        axios.post
          ("http://localhost:8080/grupo/save/meta/" + localStorage.getItem('userId') + "/" + responseMeta.data.id, {
        nome: (document.getElementById("nomeGrupo") as any).value,
        descricao: (document.getElementById("descricaoGrupo")as any).value,
      }).
        then((responseGrupo) => {
          axios.put("http://localhost:8080/grupo/meta/define/" + responseGrupo.data.id + "/" + responseMeta.data.id)
          console.log(JSON.stringify(responseGrupo));
          router.push('/logged');
        })
    });
  }

  const estatdcmplt = (frequencia !== undefined) && preenchido

  function checaPreenchido(){
    if((document.getElementById("nomeMeta") as any).value && (document.getElementById("descricaoMeta") as any).value){
      if((document.getElementById("nomeGrupo") as any).value && (document.getElementById("descricaoGrupo") as any).value){
        setPreenchido(true);
      }
    }
  }

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicCriacaoMetaHabitoGrupo
            frequencia={{
              props: { onChange: (e) => e && setFrequencia(+e)}
            }}
            nomeMeta={{
              props: { onChange: () => checaPreenchido()}
            }}
            descricaoMeta={{
              props: { onChange: () => checaPreenchido()}
            }}
            nomeGrupo={{
              props: { onChange: () => checaPreenchido()}
            }}
            descricaoGrupo={{
              props: { onChange: () => checaPreenchido()}
            }}
            confirma={{
              props: { 
                isDisabled : !estatdcmplt,
                onClick: () => criaGrupoHabito()}
            }} 
      />
    </ph.PageParamsProvider>
  );
}

export default CriacaoMetaHabitoGrupo;
