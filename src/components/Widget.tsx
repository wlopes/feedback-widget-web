import bugImageUrl from '../assets/icons/bug.svg'
import ideaImageUrl from '../assets/icons/idea.svg'
import thoughtImageUrl from '../assets/icons/thought.svg'
import { useState } from "react";
import { FeedbackTypeSelector } from "./FeedbackTypeSelector";
import { FeedbackForm } from './FeedbackForm';
import { SuccessPanel } from './SuccessPanel';

export const feedbackTypes = {
    BUG: {
        title:"Problema",
        icon:{
            source:bugImageUrl,
            alt:"Imagem de um inseto"
        }
    },
    IDEA: {
        title:"Ideia",
        icon:{
            source:ideaImageUrl,
            alt:"Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title:"Problema",
        icon:{
            source:thoughtImageUrl,
            alt:"Imagem de um balão de pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function Widget(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function rollBackFeedbackSelection(){
        setFeedbackType(null)
        setFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4
            flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">            
            
            {feedbackSent ? (
                <SuccessPanel onRolback={rollBackFeedbackSelection}/>
            ) : (
            <>
                {!feedbackType ? (
                    <FeedbackTypeSelector onSelect={setFeedbackType}/>
                ) :             
                    <FeedbackForm 
                        selectedFeedback={feedbackType}
                        onRolback={rollBackFeedbackSelection}
                        onSend={() => setFeedbackSent(true)}/>
                }
            </>)}
            
            
            
            
            <footer className="text-cs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://github.com/wlopes">Willian Lopes</a>
            </footer>
        </div>
    )
}