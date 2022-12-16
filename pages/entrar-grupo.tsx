// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicEntrarGrupo } from "../components/plasmic/protect_2_self/PlasmicEntrarGrupo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Select__Option from "../components/Select__Option";

function EntrarGrupo() {
  // Use PlasmicEntrarGrupo to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicEntrarGrupo are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicEntrarGrupo is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [metas, setMetas] = useState<any[]>();
  const [grupo, setGrupo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [metaSelecionada, setMetaSelecionada] = useState<number>()
  const [importa, setImporta] = useState<boolean>(false);

  const router = useRouter()


  useEffect(() => {
    const getData = async () => {
      try {
        const metaResponse = await axios.get(
          "http://localhost:8080/usuario/getMetas/" + localStorage.getItem('userId')
        );
        setMetas(metaResponse.data);
        const grupoResponse = await axios.get(
          "http://localhost:8080/grupo/findById/" + localStorage.getItem('grupoId')
        );
        setGrupo(grupoResponse.data);
        setError(undefined);  
        console.log(metas);
      } catch (err) {
        setError((err as any).message);
        setMetas([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>
  }

  function entraGrupo(){

      axios.put("http://localhost:8080/usuario/aceitarGrupo/" +
        localStorage.getItem("userId") + "/" + 
        localStorage.getItem("grupoId")
      )
      axios.put("http://localhost:8080/grupo/importaMeta/" +
        localStorage.getItem("grupoId") + "/" + 
        localStorage.getItem("userId") + "/" + 
        grupo.meta.id
      )
      router.push("/grupos")
  }

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicEntrarGrupo
      nomeGrupo={(loading || !grupo ) ? {} : {
        render: (props, Comp) => <Comp {...props}>{grupo.nome}</Comp>,
      }}
      descricaoGrupo={(loading || !grupo ) ? {} : {
        render: (props, Comp) => <Comp {...props}>{grupo.descricao}</Comp>,
      }}
      metaGrupo={(loading || !grupo ) ? {} : {
        render: (props, Comp) => <Comp {...props}>{grupo.meta.nome}</Comp>,
      }}
      descricaoMeta={(loading || !grupo ) ? {} : {
        render: (props, Comp) => <Comp {...props}>{grupo.meta.descricao}</Comp>,
      }}
      aceitar={{
        onClick: () => entraGrupo()
      }}
      /*
      aceitar2={{
        onClick: () => setImporta(true)
      }}
      entrar={{ 
        onClick: () => entraGrupo()
      }}
      */
      />
    </ph.PageParamsProvider>
  );
}

export default EntrarGrupo;
