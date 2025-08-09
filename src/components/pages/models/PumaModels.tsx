import {useParams} from "react-router-dom";
import {pumaArr} from "../PageTwo.tsx";



const PumaModels = () => {
    const params = useParams()
    const currentModel = pumaArr.find(el => el.id === Number(params.id))
    return (
        <div style = {{textAlign: 'center'}}>
            {currentModel ?
                <>
                <h2>{currentModel.model}</h2>
                <h3>{currentModel.price}</h3>
                <h4>{currentModel.collection}</h4>
                <img
                    src={currentModel.picture}
                    alt={currentModel.model}
                    style={{width: '600px', height: 'auto', marginRight: '10px'}}
                />
                </> :
                <h2>Не существует такой модели</h2>}

        </div>
    );
};

export default PumaModels;