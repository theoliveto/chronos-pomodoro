import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { Input } from "../Input"

import { PlayCircleIcon, StopCircleIcon } from "lucide-react"

export function Form() {
    return (
        <form className="form" action="">
            <div className="formRow">
                <Input id="tarefa" label="Tarefa" type="text" placeholder='Digite algo...' />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <Button icon={<PlayCircleIcon />} color='green' />
                <Button icon={<StopCircleIcon />} color='red' />
            </div>
        </form>
    )
}
