import Player from './Player';

function Human(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.location}</p>
            <p>{props.age}</p>
            <Player position="Small forward"/>
        </div>
    )
    
}

export default Human;