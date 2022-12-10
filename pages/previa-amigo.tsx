// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/protect_2_self/PlasmicGlobalVariant__Screen";
import { PlasmicPreviaAmigo } from "../components/plasmic/protect_2_self/PlasmicPreviaAmigo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

function PreviaAmigo() {
  // Use PlasmicPreviaAmigo to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPreviaAmigo are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicPreviaAmigo is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [friend, setFriend] = useState();
  const [friendGrupos, setFriendGrupos] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const router = useRouter()

  function aceitaConviteAmizade(id: any){
    axios.put("http://localhost:8080/usuario/aceitarAmizade/" +
    localStorage.getItem("userId") + "/" + id)
    window.location.reload();
  }

  function rejeitaConviteAmizade(id: any){
    axios.put("http://localhost:8080/solicitacoesAmizade/remove/" + id)
    window.location.reload();
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const amigo = await axios.get(
          "http://localhost:8080/usuario/findById/" + localStorage.getItem('friendId')
        );
        setFriend(amigo.data);
        setError(undefined);  
        console.log(friend);
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

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicPreviaAmigo 
        voltar={{
          onClick: () => (localStorage.removeItem("friendId"), router.push("/notificacoes"))
        }}
        nomeUsuario={loading || !friend ? {} : {
          render: (props, Comp) => <Comp {...props}>{(friend as any).nome}</Comp>,
        }}
        aceitar={loading || !friend ? {} : {
          onClick: () => (aceitaConviteAmizade((friend as any).id), router.push("/notificacoes"))
        }}
        recusar={loading || !friend ? {} : {
          onClick: () => (rejeitaConviteAmizade((friend as any).id), router.push("/notificacoes"))
        }}
      />
    </ph.PageParamsProvider>
  );
}

export default PreviaAmigo;
