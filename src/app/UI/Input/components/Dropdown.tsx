import React, { ChangeEvent } from 'react';
import { Dropdown } from "flowbite-react";

interface DropdownProps {
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  }
const DropDown: React.FC<DropdownProps> = ({ handleChange }) => {
    return (
         <div className="flex justify-center items-center mt-8">
              <select  onChange={handleChange}>
          <option value={"createdAt"} > Sort by Created At </option>
          <option value={"filenameAZ"} > Sort by A-Z </option>
          <option value={"filenameZA"} > Sort by Z-A </option>
        </select>
         </div>
      
      );
}

export default DropDown;
