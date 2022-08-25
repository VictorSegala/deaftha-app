import React from "react";
import ToolbarRedeSocias from "../../global/components/ToolbarRedeSocias";
import AutenticacaoScreen from "./components/AutenticacaoScreen";
import "./LoginScreen.css";

export default function LoginScreen() {
  return (
    <div className="fundo-login">
      <ToolbarRedeSocias />
      <div className="container-autenticacao">
        <AutenticacaoScreen />
      </div>
    </div>
  );
}
