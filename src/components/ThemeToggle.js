export default function ThemeToggle(props) {

    return (
        <div className='theme'>
            <button 
                className='theme--btn'
                onClick={() => props.setIsLightOn(!props.isLightOn)}>
                    {props.isLightOn ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}