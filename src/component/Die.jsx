

function Die (props){
    const{value,isHeld,id, hold} = props;

    const styles = {
       backgroundColor: isHeld ? "#59E391" : "white"
    }

    return (
        <button 
            style={styles}
            className="die-button"
            id={id} 
            onClick={()=> hold(id)}
            aria-pressed={props.isHeld}
            aria-label={`Die with Value ${props.value},
            ${props.isHeld ? "Held": "not Held"}`}
        >
            {value}    
        </button>
    )
}


export default Die;