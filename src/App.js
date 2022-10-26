import cookie from 'react-cookies'
import { useState } from "react";
import axios from "axios";

import Host from "./components/host";
import URL from "./components/url";
import Port from "./components/port";
import Methods from "./components/method";
import Header from "./components/header";

import InputData from "./components/inputData";
import Response from "./components/response";

axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

function App() {
  const [host, setHost] = useState("http://localhost");
  const [url, setUrl] = useState("/blog/login");
  const [port, setPort] = useState(8000);
  const [method, setMethod] = useState("POST");
  const [headerData, setHeaderData] = useState({
    Accept: 'application/json',
    "Content-Type": 'application/json',
    "X-CSRFToken": cookie.load('csrftoken')

  });
  const [inputData, setInputData] = useState({
    "account" : "test6",
    "password" : "test6"
  });

  const csrfToken = "RRIK3mk6w7whwDShh1eXAiTbAQf7E5qt";
  cookie.save('csrftoken', csrfToken);
  cookie.save('X-CSRFToken', csrfToken);
  cookie.save('sessionid', "zgghtm88uwh3bnhr6iql0qd8kqzwmhos");
  console.log(cookie.loadAll())
  // console.log(cookie.load('csrftoken'), cookie.load('sessionid'))


  const submitEvent = (e) => {
    e.preventDefault();

    const data = {
      url,
      port,
      method,
      headerData,
      inputData
    }

    console.log(data)

    const axiosData = {
      // withCredentials: true,
      credentials: "same-origin",
      xsrfCookieName: 'csrftoken',
      xsrfHeaderName: 'X-CSRFTOKEN',
      method: method,
      baseURL: `${host}:${port}`,
      url: `${url}`,
      headers: headerData,
      data: inputData
    }

    axios(axiosData)
    .then((result) => { console.log("success:", result.data) })
    .catch((err) => { console.error("error:", err) })
  }

  return (
    <div className="App">
      <div className="col-lg-8 mx-auto p-3">
        <header className="d-flex align-items-center pb-3 mb-3 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Simple postman web</span>
          </a>
        </header>

        <main>
          <div className="row g-5">
            <div className="col-md-12">
              <form>
                <input name="csrfmiddlewaretoken" value={csrfToken} type="hidden" />
                <Host host={host} setHost={setHost} />
                <Port port={port} setPort={setPort} />
                <URL url={url} setUrl={setUrl} />
                <Methods method={method} setMethod={setMethod} />
                <Header headerData={headerData} setHeaderData={setHeaderData} />

                <InputData inputData={inputData} setInputData={setInputData} />

                <button type="submit" className="btn btn-primary" onClick={submitEvent}>Submit</button>
                <hr className="col-12 mt-4" />

                <Response />

              </form>
            </div>
          </div>
        </main>
        <footer className="pt-5 my-5 text-muted border-top">
          Created by Terry Yao &middot; &copy; 2022
        </footer>
      </div>
    </div>
  );
}

export default App;
