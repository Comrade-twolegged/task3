import "./style/Block.scss"

export default function Block({styleActive, title, contents}){
    return(
        
        <div className={`block ${styleActive ? "highlight" : ""}`}>
            <h2 className="title-2">{title}</h2>
            <p className="contents">{contents}</p>
        </div>
    )
}