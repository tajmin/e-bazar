import React from "react";
import { FormInput, FormInputLabel, Group } from "./FormComponents.styles";

const FormComponents = ({ label, ...rest }) => {
  return (
    <Group>
      <FormInput {...rest} />
      <FormInputLabel shrink={rest.value.length}>{label}</FormInputLabel>
    </Group>
  );
};

export default FormComponents;
