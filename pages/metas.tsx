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
  
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const data = [{nome: "Lusca"}, {nome: "Agnaldo"}];

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
        setDados(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

	if (error) {
		return <div>Error: {error.message}</div>
	}

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicMinhasMetas 
      container = {(loading || !dados) ? {} :{ 
        //children: (dados as any).map((entry) => <MiniaturaMeta slot={entry.nome as any}) 
      }}
      />
    </ph.PageParamsProvider>
  );
}

export default MinhasMetas;
