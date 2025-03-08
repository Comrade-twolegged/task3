import data from "../db-content.json";
import LiNav from "./LiNav";
import "./Nav.scss"

export default function Nav({onSelect, isActive}){
    return(
        <nav>
            <div className="nav">
                <ul>
                    {data.map((data) => (
                        <LiNav 
                        onClick={() => onSelect(data.id)} 
                        key={data.id} 
                        title={data.title}
                        isActive={isActive == data.id}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
}