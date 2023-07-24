import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize
} from "../../features/slices/productSlice";

const FilteredProducts = () => {
  //grabbing the products
  const products = useSelector((state) => state.products.filteredProducts);
  const { type } = useParams();
  const error = useSelector((state) => state.products.error);
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pt-6 overflow-x-hidden">
        <div className="p-8 bg-blue-gray-300  mb-4">
          <h1 className="text-4xl text-center text-white font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center ">
            {genderButtons.map((item, index) => {
              return (
                <div key={index}>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    onClick={() => dispatch(filterGender(item))}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
            {/* High Price button start */}
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
              onClick={() => dispatch(sortByPrice())}
            >
              High Price
            </Button>
            {/* High Price button start */}
            {/* select color button start */}
            <div>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        style={{ color: item }}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            {/* select color button end */}
            {/* select size button start */}
            <div>
              <Menu>
                <MenuHandler>
                  <Button
                  disabled={type==='Bags'}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a Size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return <MenuItem key={index} onClick={()=>dispatch(filterBySize(item))}>{item}</MenuItem>;
                  })}
                </MenuList>
              </Menu>
            </div>
            {/* select size button end */}
          </div>
          {/* clear filter button end */}
          <div className="pr-14 ">
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
              onClick={()=>dispatch(filterProducts(type))}
            >
              Clear Filter
            </Button>
          </div>
          {/* clear filter button end */}
        </div>
        {/* if error occur then return error otherwise return productCard component */}
        {error ? (
          <Error></Error>
        ) : (
          <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
            {products.filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
