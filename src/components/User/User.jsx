import { useParams } from "react-router-dom";
function User(){
    const {userid}=useParams()
    return(
<div className="text-2xl text-center text-white bg-gray-600">User: {userid}</div>
    );
}
export default User