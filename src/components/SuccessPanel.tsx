import { CloseButton } from "./CloseButton";

import successImg from "../assets/icons/success.svg"

interface SuccessPanelProps {
    onRolback: () => void
}

export function SuccessPanel(props: SuccessPanelProps){
    return (
    <>
        <header>
            <CloseButton />
        </header>

        <div className="flex flex-col items-center py-10 w-[384px]">
            <img src={successImg} alt="´Icone Sucesso"/>
            <span className="text-xl mt-2">Agradescemos o Feedback</span>

            <button type="button"
                className="py-2 px-6 mt-6 bg-zinc-800 rounde-md border-transparent text-sm leading-6 hover:bg-zing-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinv-900 focus:ring-brand-500"
                onClick={props.onRolback}
            >
                Quero enviar outro
            </button>
        </div>
    </>
    )
}