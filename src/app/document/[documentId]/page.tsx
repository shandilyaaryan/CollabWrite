import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";
const DocumentPage = async ( ) => {
    return ( 
        <div className="min-h-screen bg-[#FAFBFD]">
            <Navbar /> 
            <Toolbar />
            <Editor />
        </div>
     );
}
 
export default DocumentPage;