import { useNavigate } from "react-router-dom";

import {
  useState,
  useEffect,
  useRef
} from "react";
import "../styles/TopBar.css";
import {
  FaSearch,
  FaFilter,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

import NotificacaoNegadaModal from "../modals/NotificacaoNegadaModal";
import NotificacaoConfirmadaModal from "../modals/NotificacaoConfirmadaModal";

function TopBar({
  placeholder = "Pesquisar...",
  valorPesquisa = "",
  onPesquisar,
  onFiltroClick,
  onNotificacaoClick,
  onPerfilClick
}) {

  const [textoPesquisa, setTextoPesquisa] = useState("");
  useEffect(() => {

    setTextoPesquisa(valorPesquisa);
  
  }, [valorPesquisa]);

  const [menuPerfil, setMenuPerfil] = useState(false);
const [menuNotificacoes, setMenuNotificacoes] = useState(false);
const [notificacoes, setNotificacoes] = useState([]);
const [temNotificacaoNova, setTemNotificacaoNova] = useState(false);

const abrirPerfil = () => {
  setMenuNotificacoes(false);
  setMenuPerfil(!menuPerfil);
};

const abrirNotificacoes = () => {
  setMenuPerfil(false);
  setMenuNotificacoes(!menuNotificacoes);
};

const perfilRef = useRef(null);
const notificacaoRef = useRef(null);
const navigate = useNavigate();

useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      perfilRef.current &&
      !perfilRef.current.contains(event.target)
    ) {
      setMenuPerfil(false);
    }

    if (
      notificacaoRef.current &&
      !notificacaoRef.current.contains(event.target)
    ) {
      setMenuNotificacoes(false);
    }

  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };


}, []);

useEffect(() => {

  const carregarNotificacoes = () => {

      const lista = JSON.parse(
          localStorage.getItem("notificacoes") || "[]"
      );

      setNotificacoes(lista);
      setTemNotificacaoNova(lista.length > 0);

  };

  carregarNotificacoes();

}, []);

const [notificacaoSelecionada, setNotificacaoSelecionada] = useState(null);
const [notificacaoConfirmadaSelecionada, setNotificacaoConfirmadaSelecionada] = useState(null);

  return (
    <div className="topbar">
      <div className="search-box">
      <FaSearch
  style={{ cursor: "pointer" }}
  onClick={() =>
    onPesquisar?.(textoPesquisa)
  }
/>

        <input
  type="text"
  placeholder={placeholder}
  value={textoPesquisa}
  onChange={(e) =>
    setTextoPesquisa(e.target.value)
  }
  onKeyDown={(e) => {

    if (e.key === "Enter") {

      onPesquisar?.(textoPesquisa);

    }

  }}
/>
      </div>

      <div className="topbar-actions">
        <button
          className="icon-btn"
          onClick={onFiltroClick}
        >
          <FaFilter size={20} />
        </button>

        <div
  className="menu-wrapper"
  ref={notificacaoRef}
>

<button
    className="icon-btn notificacao-btn"
    onClick={() => {

        abrirNotificacoes();

        setTemNotificacaoNova(false);

    }}
>

    <FaBell size={20}/>

    {temNotificacaoNova && (

        <span className="notificacao-badge"></span>

    )}

</button>

  {menuNotificacoes && (
    <div className="dropdown-menu">

    <div className="menu-header">
      <h4>Notificações</h4>
  
      <button
        className="menu-close"
        onClick={() =>
          setMenuNotificacoes(false)
        }
      >
        ✕
      </button>
    </div>
  
    {notificacoes.length === 0 ? (

<p>Nenhuma notificação.</p>

) : (

  notificacoes.map((notificacao) => (

    <div
        key={notificacao.id}
        className={`notificacao ${notificacao.tipo}`}
    >

        <strong>
            {notificacao.titulo}
        </strong>

        <p>
            {notificacao.mensagem}
        </p>

        <button
    className="ver-mais-btn"
    onClick={() => {

        setMenuNotificacoes(false);


        if(notificacao.tipo === "erro"){

            setNotificacaoSelecionada(notificacao);

        }


        if(notificacao.tipo === "sucesso"){

            setNotificacaoConfirmadaSelecionada(notificacao);

        }

    }}
>
    Ver mais
</button>

    </div>

))

)}
  
  </div>
  )}

</div>

<div
  className="menu-wrapper"
  ref={perfilRef}
>

<button
  className="icon-btn"
  onClick={abrirPerfil}
>
  <FaUserCircle size={24} />
</button>

{menuPerfil && (
  <div className="dropdown-menu">

  <div className="menu-header">
    <h4>Perfil</h4>

    <button
      className="menu-close"
      onClick={() =>
        setMenuPerfil(false)
      }
    >
      ✕
    </button>
  </div>

  <button
  onClick={() => {

    setMenuPerfil(false);

    navigate("/meu-perfil");

  }}
>
  Meu Perfil
</button>

<button
  onClick={() => {

    localStorage.removeItem("logado");

    setMenuPerfil(false);

    navigate("/", { replace: true });

  }}
>
  Sair
</button>

  </div>
)}

</div>
</div>

<NotificacaoNegadaModal
    aberto={notificacaoSelecionada !== null}
    fechar={() => setNotificacaoSelecionada(null)}
    notificacao={notificacaoSelecionada}
/>

<NotificacaoConfirmadaModal

    aberto={notificacaoConfirmadaSelecionada !== null}

    fechar={() => setNotificacaoConfirmadaSelecionada(null)}

    notificacao={notificacaoConfirmadaSelecionada}

/>

</div>
  );
}

export default TopBar;