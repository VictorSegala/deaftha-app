import imagemInstagram from "../../assets/instagram.png";
import imagemFacebook from "../../assets/facebook.png";
import imagemTwitter from "../../assets/twitter.png";
import imagemYoutube from "../../assets/youtube.png";
import imagemSpotify from "../../assets/spotify.png";

const redesSocias = [
  {
    identificador: "instagram",
    link: null,
    icon: imagemInstagram,
    alt: "Acesse O Instagram Do DJ",
  },
  {
    identificador: "facebook",
    link: null,
    icon: imagemFacebook,
    alt: "Acesse O Facebook Do DJ",
  },
  {
    identificador: "youtube",
    link: null,
    icon: imagemYoutube,
    alt: "Acesse O YouTube Do DJ",
  },
  {
    identificador: "twitter",
    link: null,
    icon: imagemTwitter,
    alt: "Acesse O Twitter Do DJ",
  },
  {
    identificador: "spotify",
    link: null,
    icon: imagemSpotify,
    alt: "Acesse O Spotify Do DJ",
  },
];
const getRedeSocias = (redesdisponiveis) => {
  let redesRetornar = [];

  redesdisponiveis.forEach((redeDisponivel) => {
    let redeFiltrada = redesSocias.filter(
      (redeSocial) => redeSocial.identificador === redeDisponivel.identificador
    );

    if (redeFiltrada.length === 1) {
      redeFiltrada[0].link = redeDisponivel.link;

      redesRetornar.push(redeFiltrada[0]);
    }
  });

  return redesRetornar;
};

export { getRedeSocias };
