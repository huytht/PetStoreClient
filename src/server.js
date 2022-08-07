import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

import Html from "./Html";
import App from "./App";

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname)));

app.get("*", async (req, res) => {
  const scripts = ["vendor.js", "index.js"];
  const initialState = {
    initialText: "rendered on the server side!",
  };

  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router>
        <App {...initialState} />
      </Router>
    </Provider>
  );

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html content={content} state={initialState} scripts={scripts} />
  );

  res.send(`<!DOCTYPE html>${html}`);
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
