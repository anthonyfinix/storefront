import Sidebar from '../sidebar';
import Content from '../content';

const App = () => {
    return (
        <div id="app-main-wrapper">
            <div id="app-sidebar-wrapper">
                <Sidebar />
            </div>
            <div id="app-content-wrapper">
                <Content />
            </div>
        </div>
    );
};

export default App;