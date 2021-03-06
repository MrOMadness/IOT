/* eslint-disable no-useless-constructor */
/* eslint-disable max-len */

import api from '../global/api';

/* eslint-disable require-jsdoc */
class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    $('.LogoutLink').on('click', () => {
      api.logOut();
    });
  }

  async render() {
    const dashboardLink = '#/dashboard';
    const antrisLink = 'https://github.com/MrOMadness/IOT';
    const loginLink = '#/login';
    const navType = 'dark'; // light, dark, primary

    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-${navType} bg-${navType}">
        <div class="container-fluid">
          <a class="navbar-brand" href="${dashboardLink}">IOT - Nicholas Stancio Saka</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item logoutMobile">
                <a class="nav-link" href="${antrisLink}" target="_blank">About Me</a>
              </li>
              <li class="nav-item logoutMobile">
                <a class="nav-link LogoutLink" href="${loginLink}">Logout</a>
              </li>
              <li class="nav-item logoutMobile" style="margin: 8px 0px 4px;">
                <div class="dropdown d-inline">
                  <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                  </button>

                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item pointer navBarNodeRed">Node Red</a></li>
                    <li><a class="dropdown-item pointer navBarMySql" href="http://35.240.225.5/phpmyadmin/" target="_blank">MY SQL</a></li>
                    <li><a class="dropdown-item pointer navBarDashboard">Dashboard</a></li>
                  </ul>
                </div>
              </li>
              
            </ul>
            <span class="navbar-text logoutDesktop">

              <div class="dropdown d-inline">
                <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </button>

                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item pointer navBarNodeRed">Node Red</a></li>
                  <li><a class="dropdown-item pointer navBarMySql" href="http://35.240.225.5/phpmyadmin/" target="_blank">MY SQL</a></li>
                  <li><a class="dropdown-item pointer navBarDashboard">Dashboard</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item pointer navBarFetchApi" data-bs-toggle="modal" data-bs-target="#fetchApiModal">Fetch API</a></li>
                </ul>
              </div>

              <a href="${antrisLink}" class="mx-2" target="_blank">About Me</a> 
              <a href="${loginLink}" class="mx-1 LogoutLink"><b>Logout</b></a>
              
            </span>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavigationBar);
