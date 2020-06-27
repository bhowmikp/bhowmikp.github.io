import Header from "./Header";
import { ReactNode } from "react";

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
