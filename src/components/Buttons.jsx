import React from "react";
import { Button } from "./ui/button";

export const RegisterButton = ({ onClick, outline }) => {
  return (
    <Button
      variant={outline ? "outline" : ""}
      className={
        outline
          ? "select-none border-grey text-grey hover:bg-grey hover:text-grey"
          : "select-none bg-purple-600 hover:bg-grey text-grey"
      }
      onClick={onClick}
    >
      Registrarse
    </Button>
  );
};

export const LoginButton = ({ onClick, outline }) => {
  return (
    <Button
      variant={outline ? "outline" : ""}
      className={
        outline
          ? "select-none border-grey text-grey hover:bg-grey hover:text-grey"
          : "select-none bg-grey hover:bg-grey text-grey"
      }
      onClick={onClick}
    >
      Login
    </Button>
  );
};
