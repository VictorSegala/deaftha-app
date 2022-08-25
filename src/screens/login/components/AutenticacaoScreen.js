import { Button } from "@mantine/core";
import React from "react";
import "./AutenticacaoScreen.css";

export default function AutenticacaoScreen() {
  return (
    <div className="card-autenticacao">
      <span>Autenticação</span>

      <div className="botoes-autenticacao">
        <hr />
        <Button color="indigo" radius="md" size="md" compact>
          Login pelo Facebook
        </Button>
        <Button color="indigo" radius="md" size="md" compact>
          Login pelo Google
        </Button>
      </div>
    </div>
  );
}
