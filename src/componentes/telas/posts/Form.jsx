import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import PostsContext from "./PostsContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import CampoEntradaTexto from "../../comuns/CampoEntradaTexto";
import Dialogo from "../../comuns/Dialogo";
import { MenuItem } from "@mui/material";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, abreDialogo, setAbreDialogo } =
        useContext(PostsContext);

    return (
        <>
            <Dialogo id="modalEdicao" titulo="Organização"
                open={abreDialogo} setOpen={setAbreDialogo}
                acaoCadastrar={acaoCadastrar} idform="formulario"
                maxWidth="sm">
                <Alerta alerta={alerta} />
                <CampoEntrada id="txtID" label="ID"
                    tipo="text" name="id" value={objeto.id}
                    onchange={handleChange} requerido={false}
                    readonly={true} />
                <CampoEntrada id="txtModelo"
                    label="Modelo"
                    tipo="text" name="modelo"
                    value={objeto.modelo}
                    onchange={handleChange}
                    requerido={true}
                    readonly={false}
                    maxlength={50}
                    msgvalido="Modelo OK"
                    msginvalido="Informe o modelo" />
                <CampoEntradaTexto id="txtNome" label="Nome"
                    rows={5}
                    tipo="text" name="nome"
                    value={objeto.nome}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="Nome OK"
                    msginvalido="Informe o nome" />
                <CampoEntrada id="txtUrl" label="Tamanho"
                    tipo="text" name="tamanho"
                    value={objeto.tamanho}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="Tamanho OK"
                    msginvalido="Informe o tamanho" />
            </Dialogo>
        </>
    )

}

export default Form;