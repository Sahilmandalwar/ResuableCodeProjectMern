import { Copy,Share2, Trash } from "lucide-react";

const handleCopy = async() => {
    try{
        await navigator.clipboard.writeText(
            JSON.stringify({title,date,content},null,2)
        );
        alert("Copied")
    }catch(err){
        alert("copied failed");
        console.log(err.message);
    }
}

//below code inside componenet return statement
<button className="bg-pink-600 rounded p-1 text-black" onClick={handleCopy}>
  <Copy size={18} />
 </button>   

