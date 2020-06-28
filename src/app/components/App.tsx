import Header from "./Header";
import MetaTag from "./MetaTag";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const App = ({ children }: Props) => (
  <>
    <MetaTag />
    <Header />
    {children}
  </>
);

export default App;
