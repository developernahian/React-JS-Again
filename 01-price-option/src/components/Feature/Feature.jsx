import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const Feature = ({feature}) => {
    return (
        <div >
            <p className="flex items-center gap-3 mr-2"><FaCheckCircle className="text-green-500" />
            {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;