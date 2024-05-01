import React from "react";

function ErrorMessage({ error }: any) {
  return <span className="text-red-600">{error}</span>;
}

export default ErrorMessage;
