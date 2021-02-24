import './Programmes.scss';
import tabProgramme from "./data/programme.json";
import Programme from "./Programme";

export default function Programmes(props) {
    return(
        <div className="programmes">
            <ul className="liste-programme">
            {
                tabProgramme.map(unProgramme => <Programme key={unProgramme.id} id={unProgramme.id} titre={unProgramme.titre} color={unProgramme.color} dateModif={unProgramme.dateModif}/>)
            }
            </ul>
        </div>


    );
}