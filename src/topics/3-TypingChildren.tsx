/**
 * 
JSX.Element - This doesn't account for arrays.
JSX.Element[] - This doesn't accept strings.
JSX.Element | JSX.Element[] - This doesn't accept strings.
React.ReactChild[] - Accepts multiple children, but it doesn't accept a single child.
React.ReactNode - Accepts everything.
 */

import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple" }}>
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
};

export default Application;
