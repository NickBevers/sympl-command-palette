import styles from './ResultList.module.css';
import { ResultType } from '../types';
import { User, File, Folder } from 'lucide-preact';
import { format } from 'path';

interface ResultListProps {
    results: ResultType[];
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
    ?  answer = Math.round(elapsed / milliSecondsPerMinute).toString() + ' min ago'
    : elapsed < milliSecondsPerDay
    ? Math.round(elapsed / milliSecondsPerHour).toString() + ' h ago'
    : elapsed < milliSecondsPerMonth
    ? Math.round(elapsed / milliSecondsPerDay).toString() + ' days ago'
    : answer = 'a long time ago'

    return answer;
}

const ResultList =  ({ results }: ResultListProps) => {
    console.log('results', results);

    return (
        <div class={styles.resultList}>
            <ul class={styles.resultList__header}>
                <li class={styles.resultList__header__item}>All results <span class={styles.amount}>{results.length || 0}</span></li>
                <li class={styles.resultList__header__item}>Team <span class={styles.amount}>{results.filter((result) => result.type === 'user').length || 0}</span></li> 
                <li class={styles.resultList__header__item}>Files <span class={styles.amount}>{results.filter((result) => result.type === 'file').length || 0}</span></li> 
                <li class={styles.resultList__header__item}>Projects <span class={styles.amount}>{results.filter((result) => result.type === 'project').length || 0}</span></li> 
            </ul>   

            <div class={styles.resultList__container}>
                {results.map((result) => {
                    return (
                        <div class={styles.resultList__item}>
                            <div class={styles.resultList__item__iconContainer}>
                                {result.type === 'user' && <User class={styles.resultList__icon}/>}
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