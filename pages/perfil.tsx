// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicPerfil } from "../components/plasmic/protect_2_self/PlasmicPerfil";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

function Perfil() {
  // Use PlasmicPerfil to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPerfil are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicPerfil is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  
  const [dados, setDados] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/usuario/findById/" + localStorage.getItem('userId')
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
      <PlasmicPerfil
      			nome={(loading || !dados) ? {} : {
              render: (props, Comp) => <Comp {...props}>{dados.nome}</Comp>,
            }}
            username={(loading || !dados) ? {} : {
              render: (props, Comp) => <Comp {...props}>{dados.username}</Comp>,
            }}
            campoEmail={(loading || !dados) ? {} : {
              render: (props, Comp) => <Comp {...props}>{dados.email}</Comp>,
            }}
            campoTelefone={(loading || !dados) ? {} : {
              render: (props, Comp) => <Comp {...props}>{dados.telefone}</Comp>,
            }}
      />
    </ph.PageParamsProvider>
  );
}

export default Perfil;