import React, { useState } from "react";
import imageOne from "../../assets/images/Mobile login-cuate.png";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/constants/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authslice";
import store from "@/redux/store";
import { Loader2 } from "lucide-react";


const Login = () => {
  const [takeInput, setTakeInput] = useState({
    email: "",
    password: "",
    role: ""
  });
  const { loading } = useSelector(store=>store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = e => {
    setTakeInput({ ...takeInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData=new FormData();
    // formData.append("email",takeInput.email);
    // formData.append("password",takeInput.password);
    // formData.append("role",takeInput.role);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, takeInput, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error(error.response.data.message);
    }
    finally{
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center border rounded-md shadow-md overflow-hidden">
        <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-gray-50">
          <img
            src={imageOne}
            alt="Login Illustration"
            className="object-contain h-full"
          />
        </div>
        <div className="md:w-1/2 w-full p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Hey User, Sign Up Now,
            </h1>

            <div className="flex flex-col space-y-1">
              <Label>Email</Label>
              <Input
                type="email"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
                value={takeInput.email}
                name="email"
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={takeInput.password}
                name="password"
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                    checked={takeInput.role === "student"}
                    onChange={changeEventHandler}
                  />
                  <Label>Student/Employee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                    checked={takeInput.role === "recruiter"}
                    onChange={changeEventHandler}
                  />
                  <Label>Recruiter</Label>
                </div>
              </div>
            </div>
{
   loading ? <Button className="w-full"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait </Button>
   :
            <Button
              type="submit"
              className="w-full py-2 text-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Sign in
            </Button>

}

            <p className="text-sm text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import imageOne from "../../assets/images/Mobile login-cuate.png";
// import { Label } from "../ui/label";
// import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Link } from "react-router-dom";
// const Login = () => {

//   return (
//     <div className="h-full w-full flex items-center">
//       <div className="h-1/2 w-1/2">
//         <img className="" src={imageOne} />
//       </div>
//       <div className="h-1/2 w-1/2 border border-2 px-8 py-10">
//         <form action="" className="py-4">
//           <h1 className="text-4xl">Hey user, Sign up Now</h1>

//           <div className="flex flex-col mt-10 my-2">
//             <Label>Full Name</Label>
//             <input
//               type="text"
//               className="mt-2 w-80 px-2 py-2 border bottom-2 rounded-md shadow-sm"
//               placeholder="Enter your full name "
//             />
//           </div>

//           <div className="flex flex-col mt-10 my-2">
//             <Label>Email </Label>
//             <input
//               type="text"
//               className="mt-2 w-80 px-2 py-2 border bottom-2 rounded-md shadow-sm"
//               placeholder="Enter your email address "
//             />
//           </div>

//           <div className="flex flex-col mt-10 my-2">
//             <Label>Phone Number</Label>
//             <input
//               type="text"
//               className="mt-2 w-80 px-2 py-2 border bottom-2 rounded-md shadow-sm"
//               placeholder="Enter your phone no "
//             />
//           </div>

//           <div className="flex flex-col mt-10 my-2">
//             <Label>Password</Label>
//             <input
//               type="text"
//               className="mt-2 w-80 px-2 py-2 border bottom-2 rounded-md shadow-sm"
//               placeholder="Enter your password"
//             />
//           </div>

//           <div className="flex  items-center justify-between ">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-2">
//                 <input
//                  type="radio"
//                  name="role"
//                  value="student"
//                  className="cursor-pointer" />
//                 <Label htmlFor="r1">Student/Employee</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//               <input
//                  type="radio"
//                  name="role"
//                  value="recruiter"
//                  className="cursor-pointer" />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>

//      <div className="flex items-center gap-2">
//         <label>profile</label>
//         <Input type="file"
//         accept="image/*"
//         className="cursor-pointer "/>
//      </div>

//           </div>

//           <Button type="submit" className="text-sm bg-blue-500 w-32">Sign Up</Button>
//           <p>Already have an account?
//         <Link to={'/signup'}  className="text-blue-700">Sign in</Link>
//          </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
