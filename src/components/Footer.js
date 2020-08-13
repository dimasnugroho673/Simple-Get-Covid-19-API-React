import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer class="lead-footer border-top">
                <div class="container d-flex flex-column flex-md-row flex-wrap">
                    <div class="footer-brand-wrapper mb-md-0">
                        <img src="template/demo/assets/images/logo.svg" alt="logo" />
                    </div>
                    <nav class="lead-social-menu mb-3 mb-md-0 mx-md-auto">
                        <a href="#!"><i data-feather="twitter"></i></a>
                        <a href="#!"><i data-feather="facebook"></i></a>
                        <a href="#!"><i data-feather="linkedin"></i></a>
                        <a href="#!"><i data-feather="instagram"></i></a>
                    </nav>
                    <p class="footer-text text-gray">© Copyright • Powered by lead from <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer" class="text-reset">BootstrapDash</a></p>
                </div>
            </footer>
        );
    }
}