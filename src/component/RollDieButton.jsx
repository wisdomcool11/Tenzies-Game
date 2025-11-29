

function RollDieButton (props){
    return (
        <button 
            onClick={props.rollDiceButton}
            className="roll_dice_button w-[120px] py-3 bg-[#5035FF] 
            text-white rounded-md font-bold text-xl cursor-pointer
            active:translate-y-1 active:shadow-lg transition-all
            "
        >
            Roll Dice
        </button>
    )
}


export default RollDieButton;
