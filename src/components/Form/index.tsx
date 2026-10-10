import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { Input } from "../Input"

import { PlayCircleIcon } from "lucide-react"

export function Form() {
    return (
        <form className="form" action="">
            <div className="formRow">
                <Input id="tarefa" label="Tarefa" type="text" placeholder='Digite algo...' />
            </div>

            <div className="formRow">
                <p>Próximo intervalo é de 25 minutos.</p>
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
