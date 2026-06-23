import { Heading } from './components/Heading.tsx'; 

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <>
            <Heading>
                Olá Mundo
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since 1966, 
                when designers at Letraset and James Mosley, 
                the librarian at St Bride Printing Library in London, 
                took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
            </p>
        </>
    );
}
