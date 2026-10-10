import { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {  
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        focus: 25,
        shortBreak: 5,
        longBreak: 15,
    }
}

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
    state: initialState,
    setState: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskProviderProps) {
    const [state, setState] = useState(initialState);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTaskContext() { 
    return useContext(TaskContext);
}