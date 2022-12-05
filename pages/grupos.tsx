// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicMeusGrupos } from "../components/plasmic/protect_2_self/PlasmicMeusGrupos";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import MiniaturaGrupo from "../components/MiniaturaGrupo";

function MeusGrupos() {
  // Use PlasmicMeusGrupos to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMeusGrupos are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicMeusGrupos is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).

  const [dados, setDados] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/grupo/getGrupos/" + localStorage.getItem('userId')
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

  async function mostraGrupos(){
    if (!(document.getElementById("buscaGrupo")as any).value){
      const response = await axios.get(
        "http://localhost:8080/grupo/getGrupos/" + localStorage.getItem('userId')
      );
      setDados(response.data);
      console.log(dados);
    }
    else{
      const resposta = await axios.get(
          "http://localhost:8080/grupo/findGruposByNome/"+ localStorage.getItem('userId') + "/" + (document.getElementById("buscaGrupo")as any).value)
      setDados(resposta.data);
      console.log(dados);
    }
  }

	if (error) {
		return <div>Error: {error.message}</div>
	}

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicMeusGrupos 
      container = {(loading || !dados) ? {} :{ 
        children: dados.map(entry => <MiniaturaGrupo 
                                        onClick={() => (localStorage.setItem('grupoId', entry.id), router.push('/tela-grupo'))} 
                                        slot={String(entry.nome)} slot3={String(entry.meta.nome)} 
                                        slot2={"Sequencia atual: " + String(entry.meta.atual)}
                                      />) 
      }}
      buscaGrupo = {{
        onChange : () => mostraGrupos()
      }}
      />
    </ph.PageParamsProvider>
  );
}

export default MeusGrupos;
