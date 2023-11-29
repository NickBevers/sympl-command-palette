import styles from './ResultList.module.css';
import { ResultType } from '../types';
import { User, File, Folder } from 'lucide-preact';
import { useEffect, useState } from 'preact/hooks';

interface ResultListProps {
    data: ResultType[];
}

const timeDifference = (current: Date = new Date(), previous: Date) => {
    const milliSecondsPerMinute = 60 * 1000;
    const milliSecondsPerHour = milliSecondsPerMinute * 60;
    const milliSecondsPerDay = milliSecondsPerHour * 24;
    const milliSecondsPerMonth = milliSecondsPerDay * 30;
    const milliSecondsPerYear = milliSecondsPerDay * 365;

    const elapsed = current.getTime() - previous.getTime();
    let answer = '';

    elapsed < milliSecondsPerMinute
    ? answer = 'just now'
    : elapsed < milliSecondsPerHour 
    ? answer = `${Math.round(elapsed / milliSecondsPerMinute).toString()}min ago`
    : elapsed < milliSecondsPerDay
    ? answer = `${Math.round(elapsed / milliSecondsPerHour).toString()}h ago`
    : elapsed < milliSecondsPerMonth
    ? answer = `${Math.round(elapsed / milliSecondsPerDay).toString()} days ago`
    : answer = 'a long time ago'

    return answer;
}

const ResultList =  ({ data }: ResultListProps) => {
    const [results, setResults] = useState<ResultType[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('all');

    useEffect(() => {
        setResults(data);
    }, [data]);

    const filterResults = (type: string) => {
        setActiveFilter(type);
        const filteredResults = data.filter((result) => result.type === type);
        setResults(filteredResults);
    }

    return (
        <div class={styles.resultList}>
            <ul class={styles.resultList__header}>
                <li class={`${styles.resultList__header__item} ${activeFilter === 'all' ? styles.active : ''}`} onClick={() => {setActiveFilter('all'); setResults(data)}}>All results <span class={styles.amount}>{data.length || 0}</span></li>
                <li class={`${styles.resultList__header__item} ${activeFilter === 'user' ? styles.active : ''}`} onClick={() => {filterResults('user')}}>Team <span class={styles.amount}>{data.filter((result) => result.type === 'user').length || 0}</span></li> 
                <li class={`${styles.resultList__header__item} ${activeFilter === 'file' ? styles.active : ''}`} onClick={() => {filterResults('file')}}>Files <span class={styles.amount}>{data.filter((result) => result.type === 'file').length || 0}</span></li> 
                <li class={`${styles.resultList__header__item} ${activeFilter === 'project' ? styles.active : ''}`} onClick={() => {filterResults('project')}}>Projects <span class={styles.amount}>{data.filter((result) => result.type === 'project').length || 0}</span></li> 
            </ul>

            <hr class={styles.resultList__header_underline} />

            <div class={styles.resultList__container}>
                {results.map((result) => {
                    return (
                        <div class={styles.resultList__item}>
                            <div class={styles.resultList__item__iconContainer}>
                                {result.type === 'user' && <div class={styles.userIcon__container}><User class={`${styles.resultList__icon} ${styles.resultList__icon_user}`}/><span class={styles.userIcon__status}></span></div>}
                                {result.type === 'file' && <File class={styles.resultList__icon}/>}
                                {result.type === 'project' && <Folder class={styles.resultList__icon}/>}
                            </div>
                            <div class={styles.resultList__item__content}>
                                <h3 class={styles.resultList__item__title}>
                                    {result.type === 'user' && result.firstName + ' ' + result.lastName}
                                    {result.type === 'file' && result.fileName}
                                    {result.type === 'project' && result.title}
                                </h3>
                                <p class={styles.resultList__item__description}>
                                    {result.type === 'user' && `Last active ${timeDifference(new Date(), new Date(result.lastLogin))}`}
                                    {result.type === 'file' && `Added by ${result.createdBy} in ${result.folder}`}
                                    {result.type === 'project' && `Project added by ${result.owner} on ${new Date(result.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
                                </p>
                            </div>
                        </div>    
                    );
                })}
            </div>
        </div>
    );
}

export default ResultList;