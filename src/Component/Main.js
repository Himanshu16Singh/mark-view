import React, { useState } from "react";
import '../Style/main.css';

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

    function handleClick(e){
        if (e.target.tagName === "A")
        {
            e.target.setAttribute("target", "_blank");
        }
    }

    return (
        <div id="preview" className={props.class2}>
            <ToolBar
                text={"md Preview"}
                icon={props.icon}
                click={() => props.handlePreviewExpand(!props.previewExpand)}
            />

            <div id="prev-div-2" className="bg-color p-3 mb-5 shadow-color" 
                dangerouslySetInnerHTML={{__html: marked(props.markdown)}}
                onClick={handleClick}
            >
            </div>
        </div>
    );
}

const Editor = (props) => {

    function handleKeyDown(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            var start = e.target.selectionStart;
            var end = e.target.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            e.target.value = e.target.value.substring(0, start) +
            "\t" + e.target.value.substring(end);

            // put caret at right position again
            e.target.selectionStart =
            e.target.selectionEnd = start + 1;
        }
    }

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
                    onKeyDown={handleKeyDown}
                >
                    {console.log(props.markdown)}
                </textarea>
            </div>
        </div>
    );
}

const placeholder = `# Welcome to markView : Interactive Markdown Previewer!

<div align="center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCQ-J5LrkIXvMsa-G4VwTrWXeYeq2kxpZvw&usqp=CAU" 
    alt="Bean: funny face"/>
</div>

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/Himanshu16Singh/mark-view), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
`;

const Main = () => {

    const [text,updateText] = useState(placeholder);
    const [editorExpand,handleEditorExpand] = useState(false);
    const [previewExpand,handlePreviewExpand] = useState(false);

    const styleClass = editorExpand ? ["editor maximized mt-3", "hide", "fas fa-compress-alt cx"] : 
                        previewExpand ? 
                        ["hide", "editor maximized mt-3", "fas fa-compress-alt cx"] : 
                        ["editor mt-4", "preview mt-4 ", "fas fa-expand-alt cx"];

    return (
        <div className="main">
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
