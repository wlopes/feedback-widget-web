import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "./CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";
import { feedbackTypes, FeedbackType } from "./Widget"

interface FeedbackFormProps{
    selectedFeedback: FeedbackType;
    onRolback: () => void;
    onSend: () => void;
}

export function FeedbackForm(props: FeedbackFormProps){
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    const feedbackTypeInfo = feedbackTypes[props.selectedFeedback]

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        console.log(comment)
        console.log(screenshot)

        props.onSend();
    }

    return (
        <>
            <header>
                <button type="button" 
                className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                onClick={props.onRolback}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex gap-2">
                    <img src={feedbackTypeInfo.icon.source} alt={feedbackTypeInfo.icon.alt}
                    className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form className="my-4 w-full"
                onSubmit={e => {handleSubmit(e) } }
            >
                <textarea 
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-2 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 p-2 focus:ring-brand-500 focus-ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder="Conte com deltalhes o que está acontecendo"
                value={comment}
                onChange={ e => setComment(e.target.value) } />

                <footer className="flex gap-2 mb-3 w-full">
                    <ScreenshotButton screenshot={screenshot} onScreenshot={setScreenshot}/>
                    <button type="submit" disabled={comment.length === 0}
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinv-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
                        Enviar feedback
                    </button>
                </footer>
            </form>
            
            
        </>
    )
}