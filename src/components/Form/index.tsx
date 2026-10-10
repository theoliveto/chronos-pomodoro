import type { HomeProps } from "../../pages/Home"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { Input } from "../Input"

import { PlayCircleIcon } from "lucide-react"

export function Form({ state }: HomeProps) {
    return (
        <form className="form" action="">
            <div className="formRow">
                <Input id="tarefa" label="Tarefa" type="text" placeholder='Digite algo...' />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de {state.config.focus} minutos.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <Button icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}
