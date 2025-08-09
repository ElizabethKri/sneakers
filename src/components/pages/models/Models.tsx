import {adidasArr, AdidasItem} from "../PageOne.tsx";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "../PageTwo.tsx";

type CrossModel = {
    [key: string] : (AdidasItem[] | PumaItem[])
}

const crossModels: CrossModel = {
    adidas: adidasArr,
    puma: pumaArr
}

const Models = () => {
    console.log(adidasArr)
    const {model, id} = useParams<{model: string, id: string}>();
    console.log(model)

    const currentModel = model ? crossModels[model].find(el => el.id ===Number(id)) : null

    return (
        <div style = {{textAlign: 'center'}}>
            <div>
                {currentModel ?
                    <>
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

export default Models;