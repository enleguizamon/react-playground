import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNotEmpty } from "../../hooks/notEmpty";

function AddStartup() {
  const [inputs, setInputs] = useState({});
  const requiredFields = ["name", "logo", "mail"];

  function handleInputs(e) {
    const { value, name } = e.target;

    setInputs({ ...inputs, [name]: value });
  }

  function AddStartup() {
    const isValid = useNotEmpty(inputs, requiredFields);
    if (isValid) {
      console.log("El formulario es valido");
    } else {
      console.log("El formulario es invalido");
    }
  }

  return (
    <>
      <Input name="name" label="nombre" onChange={handleInputs} />
      <Input name="logo" label="logo" onChange={handleInputs} />
      <Input name="mail" label="mail" onChange={handleInputs} />
      <Input
        name="web"
        label="web"
        placeholder="opcional"
        onChange={handleInputs}
      />
      <Input
        name="twitter"
        label="twitter"
        placeholder="opcional"
        onChange={handleInputs}
      />
      <Input
        name="instagram"
        label="instagram"
        placeholder="opcional"
        onChange={handleInputs}
      />
      <Button onClick={AddStartup} label="Agregar startup" />
    </>
  );
}

export default AddStartup;
