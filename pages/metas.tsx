// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicMinhasMetas } from "../components/plasmic/protect_2_self/PlasmicMinhasMetas";
import { useRouter } from "next/router";
import MiniaturaMeta from "../components/MiniaturaMeta";
import { useEffect, useState } from "react";
import axios from "axios";

function MinhasMetas() {
  // Use PlasmicMinhasMetas to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMinhasMetas are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicMinhasMetas is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  
  const [dados, setDados] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/usuario/getMetas/" + localStorage.getItem('userId')
        );
        setDados(response.data);
        setError(undefined);
        console.log(dados);
      } catch (err) {
        setError((err as any).message);
        setDados([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  async function mostraMetas(){
    if (!(document.getElementById("buscaMeta")as any).value){
      const response = await axios.get(
        "http://localhost:8080/usuario/getMetas/" + localStorage.getItem('userId')
      );
      setDados(response.data);
      console.log(dados);
    }
    else{
      const resposta = await axios.get(
          "http://localhost:8080/usuario/findMetasByNome/" + (document.getElementById("buscaMeta")as any).value)
      setDados(resposta.data);
      console.log(dados);
    }
  }

	if (error) {
		return <div>Error: {error.message}</div>
	}

  function registraMeta(metaId: any){
    axios.put
    ("http://localhost:8080/usuario/regMeta/" + localStorage.getItem("userId") + "/" + String(metaId), {
        made: true,
    }).catch(error=>{

    }).then((response) => {
      window.location.reload();
    });
  }


  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicMinhasMetas 
      container = {(loading || !dados) ? {} :{ 
        children: dados.map(entry => <MiniaturaMeta slot={String(entry.nome)} 
                                                    slot2={"Atual sequência: " + String(entry.recorde)} 
                                                    registra={{props: { onClick: () => registraMeta(entry.id)}}}/>) 
      }}
      buscaMeta = {{
        onChange : () => mostraMetas()
      }}
      />
    </ph.PageParamsProvider>
  );
}

export default MinhasMetas;
