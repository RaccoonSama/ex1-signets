import './ConteneurGlobal.scss';
import Entete from './Entete';
import PiedDePage from './Pied-De-Page';
import Programmes from './Programmes';
export default function ConteneurGlobal(){

    return(
        <div className="ConteneurGlobal">
            <Entete />
            <Programmes/>
            <PiedDePage/>
        </div>
    );

}