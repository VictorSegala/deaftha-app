import React from "react";
import api from "../fuctions/api";
import { getRedeSocias } from "../fuctions/RedeSocias";
import "./ToolbarRedesSociais.css";

export default function ToolbarRedeSocias() {
  const [redesSocias, setRedesSociais] = React.useState([]);

  React.useEffect(() => {
    const consultarLinks = async () => {
      const { data } = await api.get("/public-api/v1/link", { data: {} });

      setRedesSociais(data);
    };

    consultarLinks();
  }, []);

  const RedeSocial = ({ identificador, link, icon, alt }) => {
    return (
      <a
        href={link}
        target="_blank"
        className={"toolbar-icon " + identificador}
        rel="noreferrer"
        data-toggle="tooltip"
        data-placement="top"
        title={alt}
      >
        <img src={icon} width={40} alt="" />
      </a>
    );
  };

  return (
    <div className="toolbar">
      <div className="toolbar-content-redes">
        {getRedeSocias(redesSocias).map((redeSocial) => (
          <RedeSocial key={redeSocial.identificador} {...redeSocial} />
        ))}
      </div>
    </div>
  );
}
