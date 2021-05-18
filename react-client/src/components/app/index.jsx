import Sidebar from '../sidebar';
import Content from '../content';
import style from './app.module.css'

const App = () => {
    return (
        <div className={style.wrapper} id="app-main-wrapper">
            <div id="app-sidebar-wrapper">
                <Sidebar />
            </div>
            <Content />
        </div>
    );
};

export default App;