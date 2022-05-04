import { feedbackTypes, FeedbackType } from "./Widget"
import { CloseButton } from "./CloseButton";

interface FeedbackTypeSelectorProps {
    onSelect :(type: FeedbackType) => void;
}

export function FeedbackTypeSelector(props: FeedbackTypeSelectorProps){
    return (
    <>
    <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
    </header>
    <div className="flex py-8 gap-2 w-full">
        
    
    { 
    Object.entries(feedbackTypes).map((e) => {
        return (                        
            <button key={e[0]}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-400 focus:outline-none"
                onClick={() => {props.onSelect(e[0] as FeedbackType)}}
                type="button"
            >
                <img src={e[1].icon.source} alt={e[1].icon.alt} />
                <span>{e[1].title}</span>
            </button>            
        )    
    }) 
    }
</div>
</>
)
}