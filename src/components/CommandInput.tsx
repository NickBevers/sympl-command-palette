import styles from "./CommandInput.module.css";
import { Search} from "lucide-preact";
import ResultList from './ResultList';
import { ResultType } from "../types";
import { useState } from "preact/hooks";

// let data : ResultType[] = [];

// interface ResultListProps {
//     results: ResultType[];
// }
// const search = async (query: string) => (await fetch(`${import.meta.env.VITE_API_URL}/?q=${query}`));

const CommandInput = () => {
    const [data, setData] = useState<ResultType[]>([]);
    const handleSearch = () => (e: Event) => {
        const target = e.target as HTMLInputElement;
        const query = target.value;
        if (query.length > 2) {
            search(query);
        }
    };

    const search = async (query: string) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL || process.env.PREACT_API_URL}/?q=${query}`);
        const receivedData = await res.json();
        setData(receivedData.results);
    };


    return (
        <div class={styles.flexColumn}>
            <div class={styles.commandInput__container}>
                <Search class={styles.commandInput__icon} />
                <input
                    type="text"
                    class={styles.commandInput}
                    placeholder="Search by keyword"
                    onInput={handleSearch()}
                />
            </div>

            <ResultList results={data} />
        </div>
    );
};

export default CommandInput;
