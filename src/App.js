import React, {useState} from "react";
import './styles.css';

function Button({label, onClick}){
    return(
        <button className="button" onClick={() => onClick(label)}>{label}</button>
    )
}

// Helper function to check if a value is an operator
const isOperator = (value) => {
    return ['+', '-', '*', '/'].includes(value);
};

const App  = () => {
    const[input, setInput] = useState('');
    const[result, setResult] = useState(null);

    const handleClick = (value) => {
        if(value === '=') {
            try{
                setResult(eval(input));
                setInput('')
            }
            catch{
                setInput('')
                setResult('ERROR');
            }
        }
        else if(value === 'C'){
            setInput('');
            setResult(null);
        }
        else{
            if(result !== null && isOperator(value)){
                setResult(null);
                setInput(result+value);
            }
            else if(result !== null){
                setResult(null)
                setInput(input+value)
            }
            else{
                setInput(input+value)
            }
        }
    };

    return(
        <div className="calculator">
            <div className = "resultBox">
                {input !== null && <p> {input} </p>}
                {result !== null && <p> {result} </p>}
            </div>

            <div className="body">
                <Button label="1" onClick={handleClick} />
                <Button label="2" onClick={handleClick} />
                <Button label="3" onClick={handleClick} />
                <Button label="+" onClick={handleClick} />
            </div>
            <div>
                <Button label="4" onClick={handleClick} />
                <Button label="5" onClick={handleClick} />
                <Button label="6" onClick={handleClick} />
                <Button label="-" onClick={handleClick} />
            </div>
            <div>
                <Button label="7" onClick={handleClick} />
                <Button label="8" onClick={handleClick} />
                <Button label="9" onClick={handleClick} />
                <Button label="*" onClick={handleClick} />
            </div>
            <div>
                <Button label="0" onClick={handleClick} />
                <Button label="C" onClick={handleClick} />
                <Button label="=" onClick={handleClick} />
                <Button label="/" onClick={handleClick} />
            </div>
        </div>
        
    )
}

export default App;
