import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productSlice";
import { Link, useParams } from "react-router-dom";
import HeartSvg from "../Heart/HeartSvg";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card
        className="w-80 bg-blue-gray-100"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader color="blue" className="relative h-96">
          <Typography className="absolute right-2 top-2">
            {/* heart svg */}
            <HeartSvg />
          </Typography>
          <img src={img} alt={name} className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography className="font-bold text-2xl" variant="small">
            {price}$
          </Typography>

          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas w-3 h-3 fa-map-marker-alt fa-sm mt-[3px] rounded-full mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
