import ForgeUI, { render, useConfig, Fragment, Image, TextField, Select, Option, ConfigForm, Macro } from "@forge/ui";

const defaultConfig = {url: "http://img.icons8.com/plasticine/2x/happy.png"};

const Config = () => {
  return (
    <ConfigForm>
      <Select label="Color" name="url">
        <Option label="Happy" value="http://img.icons8.com/plasticine/2x/happy.png" />
        <Option label="Sad" value="https://img.icons8.com/cute-clipart/2x/sad.png" />
        <Option label="Angry" value="https://img.icons8.com/cute-clipart/2x/angry.png" />
        <Option label="Surprised" value="https://img.icons8.com/officel/2x/surprised.png" />
        <Option label="Thinking" value="https://img.icons8.com/emoji/2x/thinking-face.png" />
        <Option label="Sleeping" value="https://img.icons8.com/officel/2x/sleeping.png" />
        <Option label="Bored" value="https://img.icons8.com/color/2x/bored.png" />
      </Select>
    </ConfigForm>
  );
}

const App = () => {
  let { url } = useConfig();

  let url_f;

  url_f="http://img.icons8.com/plasticine/2x/happy.png"

  if(url && url.length>0){
    url_f = url;
  }

  const dataUri = url_f;

  return (
    <Fragment>
      <Image src={dataUri} alt="Image" />
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
    config={<Config />}
    defaultConfig={defaultConfig}
  />
);
