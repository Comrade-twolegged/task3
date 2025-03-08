import "./Nav.scss"

export default function LiNav({onClick, title, isActive}){
    return(
        <>
        <li className={`nav-item ${isActive ? "active" : ""}`} onClick={onClick}>{title}</li>
        </>
        
    );
}