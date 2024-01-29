import './card.css'

export const Cards = (props) => {

    return(<div className="card-projects">
        <div className='card-img'>
            <img src={props.src} alt={props.alt} />
        </div>
        <div className='card-descricao'>
            <span>{props.description}</span>
        </div>
        <div className='card-buttons'>
            <a href={props.deploy}  className='card-buttons-btn' target='_blank' rel="noreferrer">   
            DEPLOY             
            </a>
            <a href={props.repositorio} className='card-buttons-btn' target='_blank' rel="noreferrer"> 
            REPOSITORIO               
            </a>
        </div>
    </div>
    )

}