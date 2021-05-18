import Sidebar from '../sidebar';
import Content from '../content';
import style from './app.module.css'

const App = () => {
    return (
        <div className={style.wrapper}>
            <Sidebar />
            <Content />
        </div>
    );
};

export default App;