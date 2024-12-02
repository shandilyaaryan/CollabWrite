import { Editor } from "./Editor";
import { Toolbar } from "./toolbar";
const DocumentPage = async ( ) => {
    return ( 
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
     );
}
 
export default DocumentPage;