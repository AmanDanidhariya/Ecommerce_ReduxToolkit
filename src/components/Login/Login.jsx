import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../../features/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const defaultValue = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(defaultValue);

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value.trim() });
  };

  const dispatch = useDispatch();

  const errorMessage = useSelector((state) => state.user.errorMessage);

  console.log(errorMessage);
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen bg-blue-gray-100">
      <Card className="w-96 ">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <span className="text-red-600 font-bold">{errorMessage.nameError}</span>
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <span className="text-red-600 font-bold">{errorMessage.passwordError}</span>
          <Input
            label="image_URL_address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image Is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
