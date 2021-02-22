import React, { useState } from "react";
import '../Style/main.css'

let marked = require("marked");

const ToolBar = (props) => {

    return (
        <div className="bg-dark text-white shadow-color">
            <i className="fas fa-book-open ml-2"></i>
                <span className="p-2">{props.text}</span>
            <i className={props.icon} onClick={props.click}></i>
        </div>
    );
}

const Previewer = (props) => {
    return (
        <div id="preview" className={props.class2}>
            <ToolBar
                text={"md Preview"}
                icon={props.icon}
                click={() => props.handlePreviewExpand(!props.previewExpand)}
            />

            <div id="prev-div-2" className="bg-color p-3 mb-5 shadow-color" 
                dangerouslySetInnerHTML={{__html: marked(props.markdown)}}
            >
            </div>
        </div>
    );
}

const Editor = (props) => {
    return (
        <div id="editor" className={props.class1}>
            <ToolBar 
                text={"md Editor"}
                icon={props.icon}
                click={() => props.handleEditorExpand(!props.editorExpand)}
            />
            
            <div id="edit-div-2">
                <textarea className="bg-color shadow-color"
                    value={props.markdown} onChange={(e) => props.updateMark(e.target.value)}
                >
                    {console.log(props.markdown)}
                </textarea>
            </div>
        </div>
    );
}

const Main = () => {

    const [text,updateText] = useState("");
    const [editorExpand,handleEditorExpand] = useState(false);
    const [previewExpand,handlePreviewExpand] = useState(false);

    const styleClass = editorExpand ? ["editor maximized mt-3", "hide", "fas fa-compress-alt cx"] : 
                        previewExpand ? 
                        ["hide", "editor maximized mt-3", "fas fa-compress-alt cx"] : 
                        ["editor mt-4", "preview mt-4", "fas fa-expand-alt cx"];

    return (
        <div>
            <Editor markdown={text} updateMark={updateText}
                class1={styleClass[0]}
                icon={styleClass[2]}
                editorExpand={editorExpand}
                handleEditorExpand={handleEditorExpand}
            />
            <Previewer markdown={text}
                class2={styleClass[1]}
                icon={styleClass[2]}
                previewExpand={previewExpand}
                handlePreviewExpand={handlePreviewExpand}
            />
        </div>
            
    );
}

export default Main
