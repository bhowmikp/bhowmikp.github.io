import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const App = ({ children }: Props) => (
  <main>
    <Header />
    {children}
  </main>
);

export default App;
