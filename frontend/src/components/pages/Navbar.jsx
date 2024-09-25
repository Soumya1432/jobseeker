import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = false;

  return (
    <div className="shadow-xl  ">
      <div className="flex  items-center justify-between mx-auto container max-w-7xl h-16 px-4">
        <div className="">
          <h1 className="text-blue-400 text-3xl">
            Job<span className="text-red-400">Dhundo</span>
          </h1>
        </div>
        <div className="lg:flex md:flex hidden items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to={'/jobs'}>Jobs</Link></li>
            <li><Link to={'/browse'}>Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/signup"}>
                <Button className="bg-blue-600 text-white hover:bg-blue-900 hover:text-white">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Soumya Biswas</h4>
                    <p className="text-sm text-muted-foreground">
                      The profile for the user is generated
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-gray-600">
                  <div className="flex w-fit items-center cursor-pointer">
                    <User2 />
                    <Button variant="link">View profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-400 focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden flex flex-col items-start px-4 py-2 space-y-2 bg-white shadow-md">
          <ul className="flex flex-col font-medium items-start gap-3">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex flex-col gap-2 mt-4">
              <Link to={"/login"}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button className="bg-blue-600 text-white hover:bg-blue-900 hover:text-white w-full">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h4 className="font-medium">Soumya Biswas</h4>
                </div>
              </div>
              <Button variant="link" className="text-left w-full">
                View profile
              </Button>
              <Button variant="link" className="text-left w-full">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
