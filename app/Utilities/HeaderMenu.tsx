import React from "react";

type HeaderProps = {
  title: string;
};

const HeaderMenu = ({ title }: HeaderProps) => {
  return (
    <div>
      <div className="p-5">
        <h3 className="text-center text-2xl">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
