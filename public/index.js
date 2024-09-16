(async () => {
  const init = async () => {
    const { glue } = await window.GlueWebPlatform();

    console.log(`Glue42 initialized successfully! Glue42 version: ${glue.version}`);
    return glue;
  };
  const glue = await init().catch(console.error);

  const names = ["Stock Input", "Stock Display"];
  const urls = ["app1.html", "app2.html"];
  const options = [{
    top: 100,
    left: 100,
    width: 200,
    height: 200
  }, {
    top: 100,
    left: 301,
    width: 200,
    height: 200
  }];
  const stockInput = await glue.windows.open(names[0], urls[0], options[0]);
  const stockDisplay = await glue.windows.open(names[1], urls[1], options[1]);
})();

