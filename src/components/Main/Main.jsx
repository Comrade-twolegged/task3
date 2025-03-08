import content from "./db-content.json"
import Block from "./block"
import Nav from "./Nav/Nav"
import "./style/Main.scss"
import { useState } from "react"

export default function Main() {

    const [activeId, setActiveId] = useState(null);

    const handleSelectBlock = (id) => {
        setActiveId(id);
    };

    return (
        <main>
            <div>
                <div className="main">
                    <div className="content__main">
                        {content.map((data) => (
                            <Block styleActive={activeId === data.id} key={data.id} title={data.title} contents={data.content} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="main__nav">
                <Nav onSelect={handleSelectBlock} isActive={activeId} />
            </div>
        </main>
    )
}