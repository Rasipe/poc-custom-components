import PopUpInfo from './component/pop-up-info.js'
import App from './component/app.js'
import MyForm from './component/my-form.js'

try {
    customElements.define('my-app', App);
    customElements.define('popup-info', PopUpInfo);
    customElements.define('my-form', MyForm)
} catch {

}