import './app.css'
import Counter from "../counter/counter";

function App () {

    return (
        <div className={"app"}>
            <div className={"window"}>
                <Counter startNum={0}></Counter>
            </div>
        </div>
    );
}

export default App;

