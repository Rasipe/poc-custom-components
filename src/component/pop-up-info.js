import BaseComponent from '../script/base-component.js'
import service from '../models/service.js'

export default class PopUpInfo extends BaseComponent {
    path = 'pop-up-info.html'
    property = ['title', 'info']
    data = {
        text: 'teste'
    }
    send() {
        this.emit('bla', this.property.info, 1, false)
    }
}
