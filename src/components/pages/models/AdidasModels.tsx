import {adidasArr} from "../PageOne.tsx";
import {useParams} from "react-router-dom";

const AdidasModels = () => {
    console.log(adidasArr)
    const params = useParams()
    console.log(params)

    const currentModel = adidasArr.find(el => el.id === Number(params.id))

    return (
        <div style = {{textAlign: 'center'}}>
            <div>
                {currentModel ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </> : <h2>Такой модели не существует</h2>}
            </div>

        </div>

    );
};

export default AdidasModels;