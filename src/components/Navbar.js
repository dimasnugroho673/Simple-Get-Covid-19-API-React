import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-lg navbar-light bg-white">
                    <div class="container">
                        <a class="navbar-brand" href="index.html"><img src="template/demo/assets/images/logo.svg" alt="lead-ui-kit logo" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#leadUIMainNav"
                            aria-controls="leadUIMainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i data-feather="menu"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="leadUIMainNav">
                            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Components</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="lead-landing.html">Lead Landing Page</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="../documentation/documentation.html" target="_blank">Docs</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.bootstrapdash.com/product/lead-ui-kit/" target="_blank" rel="noopener noreferrer" class="btn btn-rounded btn-danger">Upgrade to PRO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}