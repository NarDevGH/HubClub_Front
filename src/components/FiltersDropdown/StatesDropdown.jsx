import { useState } from "react";
import Select from "react-select";

const options = [
  { label: "Nuevo", value: "nuevo" },
  { label: "En Desarrollo", value: "en_desarrollo" },
  { label: "Finalizado", value: "finalizado" },
];

export default function StatesDropdown(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOnChange = (e) => {
    console.log(e);
    setSelectedOption(e);
    props.setStatesFilter(e);
  };

  return (
    <Select
      defaultValue={selectedOption}
      onChange={handleOnChange}
      options={options}
      isMulti={true}
      placeholder="Estado"
    />
  );
}
