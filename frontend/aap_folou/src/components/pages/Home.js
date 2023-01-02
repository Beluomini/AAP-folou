import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {

    return (
        <section className={styles.home_container}>
            <h1>HOME</h1>
            <p>Imagens</p>

            <ul>
                <li>
                    <a href='/'>Pets Shops</a>
                </li>
            </ul>
        </section>

    );
}

export default Home