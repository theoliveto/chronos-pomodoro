import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { Form } from "../../components/Form";
import { Main } from "../../templates/Main";

export function Home() {
    return (
        <Main>
            <Container>
                <Countdown />
            </Container>

            <Container>
                <Form />
            </Container>
        </Main>
    );
}
