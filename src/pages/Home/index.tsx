import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { Form } from "../../components/Form";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { Main } from "../../templates/Main";

export type HomeProps = { 
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
    return (
        <Main>
            <Container>
                <Countdown {...props} />
            </Container>

            <Container>
                <Form {...props} />
            </Container>
        </Main>
    );
}
