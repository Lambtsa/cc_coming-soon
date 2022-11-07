import { MetaData } from "@components/MetaData";
import URL from "@constants/url";
import { FiveOhOhScreen } from "@screens/fiveOhOh";

const Custom404 = () => {
  return (
    <>
      <MetaData
        title="Charlie's Closet | Habillez votre enfant sans déshabiller la planète"
        description="Habillez votre enfant sans déshabiller la planète"
        url={URL.PROD}
      />
      <FiveOhOhScreen />
    </>
  );
};

export default Custom404;
