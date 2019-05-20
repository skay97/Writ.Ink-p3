import React from "react";
import ReactQuill, { Quill } from "react-quill"

/* 
 * Simple editor component that takes placeholder text as a prop 
 */
class QuillEditor extends React.Component {
    constructor (props) {
      super(props)
      this.state = { editorHtml: '', theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
        this.setState({ editorHtml: html });
    }
    
    handleThemeChange (newTheme) {
      if (newTheme === "core") newTheme = null;
      this.setState({ theme: newTheme })
    }
    
    render () {
      return (
        <div>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={QuillEditor.modules}
            formats={QuillEditor.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />
          <div className="themeSwitcher">
            <label>Theme </label>
            <select onChange={(e) => 
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div>
         </div>
       )
    }
  }
  
  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  QuillEditor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  QuillEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link'
  ]
  
  /* 
   * PropType validation
   */
//   Quill.propTypes = {
//     placeholder
//   }
  
  /* 
   * Render component on page
   */
//   ReactDOM.render(
//     <Editor placeholder={'Write something...'}/>, 
//     document.querySelector('.app')
//   )

export default QuillEditor;

// import React from "react";
// import { render } from "react-dom";
// import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "./Quill.css"

// const CustomHeart = () => <span>♥</span>;

// function insertHeart() {
//   const cursorPosition = this.quill.getSelection().index;
//   this.quill.insertText(cursorPosition, "♥");
//   this.quill.setSelection(cursorPosition + 1);
// }

// /*
//  * Custom toolbar component including the custom heart button and dropdowns
//  */
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-font">
//       <option value="arial" selected>
//         Arial
//       </option>
//       <option value="comic-sans">Comic Sans</option>
//       <option value="courier-new">Courier New</option>
//       <option value="georgia">Georgia</option>
//       <option value="helvetica">Helvetica</option>
//       <option value="lucida">Lucida</option>
//       <option value="roboto">Roboto</option>
//       <option value="Baloo-Bhai">Baloo Bhai</option>
//     </select>
//     <select className="ql-size">
//       <option value="extra-small">Size 1</option>
//       <option value="small">Size 2</option>
//       <option value="medium" selected>
//         Size 3
//       </option>
//       <option value="large">Size 4</option>
//     </select>
//     <select className="ql-align" />
//     <select className="ql-color" />
//     <select className="ql-background" />
//     <button className="ql-clean" />
//     <button className="ql-insertHeart">
//       <CustomHeart />
//     </button>
//   </div>
// );

// // Add sizes to whitelist and register them
// const Size = Quill.import("formats/size");
// Size.whitelist = ["extra-small", "small", "medium", "large"];
// Quill.register(Size, true);

// // Add fonts to whitelist and register them
// const Font = Quill.import("formats/font");
// Font.whitelist = [
//   "arial",
//   "comic-sans",
//   "courier-new",
//   "georgia",
//   "helvetica",
//   "lucida",
//   "roboto",
//   "Baloo-Bhai"
// ];
// Quill.register(Font, true);

// /*
//  * Editor component with custom toolbar and content containers
//  */
// class QuillEditor extends React.Component {
//   state = { editorHtml: "" };

//   handleChange = html => {
//     this.setState({ editorHtml: html });
//   };

//   static modules = {
//     toolbar: {
//       container: "#toolbar",
//       handlers: {
//         insertHeart: insertHeart
//       }
//     }
//   };

//   static formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "color"
//   ];

//   render() {
//     return (
//       <div className="text-editor">
//         <CustomToolbar />
//         <ReactQuill
//           value={this.state.editorHtml}
//           onChange={this.handleChange}
//           placeholder={this.props.placeholder}
//           modules={QuillEditor.modules}
//           formats={QuillEditor.formats}
//         />
//       </div>
//     );
//   }
// }

// // const App = () => (
// //   <div className="custom-toolbar-example">
// //     <h3>Custom Toolbar with React Quill (Fully working)</h3>
// //     <Editor placeholder={"Write something or insert a heart ♥"} />
// //   </div>
// // );

// // render(<App />, document.getElementById("root"));

// export default QuillEditor;
