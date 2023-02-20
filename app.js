'use strict';

var _buttons = {},
    _result = {};

function calculate() {
    var _currentValue = this.innerHTML;

    if (_currentValue == '=') {
        try {
            _result.value = eval(_result.value); // eval dangerous, used for the sake of simplicity
        } catch (e) {
            _result.value = null;
        }
        return;
    }

    _result.value += _currentValue;
}

function initElement() {
    _buttons = document.querySelectorAll('button');
    _result = document.querySelector('#result');
}

function initEvent() {
    for (var index = 0, length = _buttons.length; index < length; index++) {
        _buttons[index].addEventListener('click', calculate);
    }
}

function init() {
    initElement();
    initEvent();
}

window.addEventListener('DOMContentLoaded', init);
