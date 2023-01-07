import { App } from './App';
import './style/index.css';
import webpackLogo from './images/logo-webpack.png';

const app = new App();
app.hello();

function printWebpackHeadline() {
    const webpackHeadlineBlock = document.createElement('div');
    webpackHeadlineBlock.classList.add('webpack-title');
    webpackHeadlineBlock.innerHTML = '<h1>Hello from webpack</h1>';
    return webpackHeadlineBlock;
}

function printWebpackLogo() {
    const webpackLogoBlock = document.createElement('img');
    webpackLogoBlock.src = webpackLogo;
    webpackLogoBlock.classList.add('webpack-logo');
    return webpackLogoBlock;
}

document.body.appendChild(printWebpackLogo());
document.body.appendChild(printWebpackHeadline());
