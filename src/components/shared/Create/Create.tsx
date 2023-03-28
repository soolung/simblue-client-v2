import React, { useState } from "react";

import { Form } from "../../../pages/form/Form";
export const Create = () => {
  const [text, setText] = useState<string>();
  return (
    <>
      <Form mode="create" />
    </>
  );
};
