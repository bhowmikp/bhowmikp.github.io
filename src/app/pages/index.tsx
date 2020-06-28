import App from "../components/App";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

export default () => {
  const isAmp = useAmp();

  return (
    <App>
      <p>Index Page</p>
      {isAmp ? <p>Amp site</p> : <p>Regular site</p>}
    </App>
  );
};
