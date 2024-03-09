class ReactiveModel {
    constructor() {
        this._value = "";
    }

    updateValue(data) {
        this.setValue(data)
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
        this.updateUI();
    }

    updateUI() {
        main.innerText = this._value;
    }
}

const data = new ReactiveModel();
const input = document.getElementById("input");
const main = document.getElementById("main");

input.addEventListener("input", function (event) {
    data.updateValue(event.target.value)
});