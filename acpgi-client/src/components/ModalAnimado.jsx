import { useEffect, useState } from "react";

function ModalAnimado({
    aberto,
    children
}) {

    const [visivel, setVisivel] = useState(aberto);

    const [animandoSaida, setAnimandoSaida] = useState(false);


    useEffect(() => {

        if (aberto) {

            setVisivel(true);
            setAnimandoSaida(false);

        } else if (visivel) {

            setAnimandoSaida(true);

            const timer = setTimeout(() => {

                setVisivel(false);
                setAnimandoSaida(false);

            }, 300);

            return () => clearTimeout(timer);

        }

    }, [aberto]);


    if (!visivel) {
        return null;
    }


    return (
        <div
            className={
                animandoSaida
                    ? "modal-animado modal-saindo"
                    : "modal-animado"
            }
        >
            {children}
        </div>
    );

}

export default ModalAnimado;