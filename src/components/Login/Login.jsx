import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
            label="Email"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="image_URL_address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
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
