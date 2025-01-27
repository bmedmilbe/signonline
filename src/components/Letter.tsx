import React from "react";

interface Props {
  htmlString: string;
}

const Letter: React.FC<Props> = ({ htmlString }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default Letter;
