// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicAdicionaAGrupo } from "../components/plasmic/protect_2_self/PlasmicAdicionaAGrupo";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

function AdicionaAGrupo() {
  // Use PlasmicAdicionaAGrupo to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicAdicionaAGrupo are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicAdicionaAGrupo is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [nome, setNome] = useState<string>();
  const [vazio, setVazio] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      try {
        const nomeUsuario = await axios.get(
          "http://localhost:8080/usuario/findById/"+ localStorage.getItem("userId"))
        setNome(nomeUsuario.data.nome)
        setError(undefined);  
      } catch (err) {
        setError((err as any).message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>
  }

  async function buscaUsuarios(){
    try{
        var nome = String((document.getElementById("buscaAmigo")as any).value)
        if(nome.includes('@')){
          const resposta = await axios.get(
            "http://localhost:8080/usuario/findByEmail/"+ nome)
            adicionaAmigo(resposta.data.id);
          }
          else {
            const resposta = await axios.get(
              "http://localhost:8080/usuario/findByName/" + nome)
              adicionaAmigo(resposta.data.id);
            }
          }catch (err) {
            setVazio(true)
          } finally {
            setLoading(false);
          }
        }
        
  function adicionaAmigo(friendId: any){
    console.log(nome)
    console.log(friendId)
    console.log(localStorage.getItem('grupoId'))
    try{
    axios.post
    ("http://localhost:8080/solicitacaoGrupo/save",{
      //nomeAmigo: nome,
			grupoId: localStorage.getItem('grupoId'),
      userId: friendId
    })}catch (err) {
      setEnviado(false);
    } finally {
      setEnviado(true);
    }
  }

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicAdicionaAGrupo 
      confirma={nome ? {
        onClick : () => buscaUsuarios()
      } : {}}
      usuarios={vazio ? {
        children: "Não encontramos ninguém com esse nome"
      } : enviado ? {
        children: "Convite enviado!"
      } : {}}
      />
    </ph.PageParamsProvider>
  );
}

export default AdicionaAGrupo;
