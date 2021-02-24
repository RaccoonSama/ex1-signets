import './Programme.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Programme(props) {

    var style = {
        backgroundColor: props.color
    };


    return(
        <li className="programme" style={ style } >
            <img src={'./img-programmes/' + props.id + '.png'}/>
            <div className="info">
                <p className="titre">{props.titre}</p>
                <p className="date-modif">{props.dateModif}</p>
                <MoreVertIcon/> 
            </div>
        </li>

    );
}