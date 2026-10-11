import { useRef } from "react"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { Input } from "../Input"
import { PlayCircleIcon } from "lucide-react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes"

export function Form() {
    const { state,setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (taskName === "") {
            alert("Por favor, digite o nome da tarefa.");
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completedDate: null,
            interruptedDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    return (
        <form onSubmit={handleCreateNewTask} className="form" action="">
            <div className="formRow">
                <Input 
                    ref={taskNameInput}
                    id="tarefa" 
                    label="Tarefa" 
                    type="text" 
                    placeholder='Digite algo...' 
                />
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
