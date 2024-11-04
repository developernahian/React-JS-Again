import { useParams } from "react-router-dom";
import Menu from "../components/Menu";


const ProductPage = () => {
    let{id,name}=useParams();
    return (
        <div>
            <Menu />
            <p>ID:{id}</p>
            <p>Name:{name}</p>
            <h1>Product Page</h1>
        </div>
    );
};

export default ProductPage;