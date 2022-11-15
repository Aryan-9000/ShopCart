import axios from "axios";
let instance = null;
if(process.env.NODE_ENV === "production") {
       instance = axios.create({
              baseURL: "https://appshopcart.herokuapp.com/",
       });
}
export default instance;
