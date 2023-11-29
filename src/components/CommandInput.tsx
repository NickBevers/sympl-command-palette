import styles from "./CommandInput.module.css";
import 'animate.css';
import { Search } from "lucide-preact";
import ResultList from "./ResultList";
import { ResultType } from "../types";
import { useState, useRef, useEffect } from "preact/hooks";

const CommandInput = () => {
    const [data, setData] = useState<ResultType[]>([]);
    const [searchVisible, setSearchVisible] = useState<boolean>(false);
    const [isVisibile, setIsVisible] = useState<boolean>(false);
    const clickRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (e: Event) => {
        if (clickRef.current && !clickRef.current.contains(e.target as HTMLInputElement)) {
            setSearchVisible(false);
            setIsVisible(false);
        }
    };

    const handleSearch = () => (e: Event) => {
        const target = e.target as HTMLInputElement;
        const query = target.value;
        query.length > 2
            ? search(query) && setIsVisible(true)
            : setIsVisible(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && (e.key === ":" || e.key === "/")) {
            setSearchVisible(true);
            // set focus on input
            document.getElementById("searchInput").focus();
        }
    };

    const search = async (query: string) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL || process.env.PREACT_API_URL}/?q=${query}`);
        const receivedData = await res.json();
        setData(receivedData.results);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    return (
        <div class={styles.flexColumn} ref={clickRef}>
            <div class={`${styles.commandInput__instructions} ${searchVisible ? styles.hidden : 'animate__fadeIn'} animate__animated`}>Press <pre>ctrl or cmd + /</pre> to start searching.</div>

            <div class={`${styles.commandInput__container} ${!searchVisible ? styles.hidden : 'animate__fadeIn'} animate__animated`}>
                <Search class={styles.commandInput__icon} />
                <input
                    type="text"
                    id={'searchInput'}
                    class={styles.commandInput}
                    placeholder="Search by keyword"
                    onInput={handleSearch()}
                />
            </div>

            <ResultList data={data} visible={isVisibile}/>
        </div>
    );
};

export default CommandInput;
