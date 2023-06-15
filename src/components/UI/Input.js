import classes from './Input.module.css';

const Input = props => {
    return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>  
        {/* ...props.input ensures that all key-value pairs of input element are added as props*/}
    </div>
    )
}

export default Input;