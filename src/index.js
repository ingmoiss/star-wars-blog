import React from 'react';
import ReactDOM from 'react-dom';

//Include bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Include css
import "./styles/app.css";

//Include layout
import Layout from "./layout";


ReactDOM.render(
    <Layout />,
  document.getElementById('root')
);

