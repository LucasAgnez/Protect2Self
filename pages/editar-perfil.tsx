// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import axios from "axios";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicEditarPerfil } from "../components/plasmic/protect_2_self/PlasmicEditarPerfil";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

function EditarPerfil() {
  // Use PlasmicEditarPerfil to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicEditarPerfil are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicEditarPerfil is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const router = useRouter()

  function atualizaPerfil(){
    axios.put
    ("http://localhost:8080/usuario/update/",{
			id: localStorage.getItem('userId'),
			nome: (document.getElementById("nome") as any).value,
      username: (document.getElementById("username")as any).value,
      telefone: (document.getElementById("telefone")as any).value,
      email:(document.getElementById("email")as any).value,
      senha: (document.getElementById("senha")as any).value,
    })
    .then((response) => {
      console.log(JSON.stringify(response));
      router.push('/perfil');
    });
  }

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

      <PlasmicEditarPerfil 
			nome={{
				props: (loading || !dados) ? {} : { value: String((dados as any).nome), onChange: (e) => setDados({...dados, nome: e.target.value})} 
			}}
			username={{
				props: (loading || !dados) ? {} : { value: String((dados as any).username), onChange: (e) => setDados({...dados, username: e.target.value})}
			}}
			email={{
				props: (loading || !dados) ? {} : { value: String((dados as any).email), onChange: (e) => setDados({...dados, email: e.target.value})}
			}}
			telefone={{
				props: (loading || !dados) ? {} : { value: String((dados as any).telefone), onChange: (e) => setDados({...dados, telefone: e.target.value})}
			}}
			/*
			*/
        confirma={{
          props: { onClick: () => atualizaPerfil()}
        }}
        cancela={{
          props: { onClick: () => router.push('/perfil')}
        }}
      />
    </ph.PageParamsProvider>
  );
}

export default EditarPerfil;