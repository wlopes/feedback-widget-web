import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton(){
    return (
        <Popover.Button title="Fechar formulário de Feedbak" 
        className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100">
            <X weight="bold" font-size="16" className="w-4 h-4"/>
        </Popover.Button>
    )
}