import { render } from 'preact';
import './style.css';
import CommandInput from "./components/CommandInput";

export const App = () => {
    return (
        <div class='app'>
            <header class='header'>
                <CommandInput />
            </header>
        </div>
    );
};

render(<App />, document.getElementById('app'));
