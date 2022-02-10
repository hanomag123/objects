console.log('hello')

let Animal = function(name, eats, walk) {
    this.name = name;
    this.eats = eats;
    this.walk = walk;
    this.showName = function() {
        alert(this.name);
    }
    };
let Dog = function(name) {
    Animal.apply(this, arguments)
    this.name = name;
}

let animal = new Animal(), 
dog = new Dog('Bob', true, true);


console.log(animal);
console.log(dog)


let Tech = function(power) {
    let status = false;
    power = power || 0;
    this.enable = function() {
        return status = true;
    }
    this.disable = function() {
        return status = false;
    }
    this.getStatus = function() {
        return status;
    }
    this.getPower = function() {
        return power;
    }
}

let Teapot = function(power, size) {
    Tech.apply(this, arguments)
    
    size = size || 1000;
    let waterAmmount = 0,
    status = false;
    let parentGetStatus = this.getStatus,
        parentDisable = this.disable;

    this.setWater = function(ammount) {
        if (ammount > 0 && ammount <= size) waterAmmount = ammount;
        else if (ammount > size) waterAmmount = size;
        else waterAmmount = 0;
    }
    this.getWater = function() {
        return waterAmmount;
    }
    this.onOff = function() {
        if(parentGetStatus === true && waterAmmount > 0) {
            status = !status;
            console.log(status)
        }
        if (status === true) {
            boiling()
            return status
        }
    }
    let boiling = function() {
        alert('boiling')
    }
    
    this.getStatus = function() {
        parentGetStatus.call(this)
        if (status === true && parentGetStatus() === true) return true;
        return false;
    }
    this.disable = function() {
        parentDisable.call(this);
        parentDisable();
        if (parentGetStatus() === false) this.onOff();
    }
    this.showInfo = function() {
        return (this.getStatus() ? 'work' : 'not work') + waterAmmount
    }
}

let teapot = new Teapot(3500, 3000);

console.dir(document)

let Doom = function() {
    this.create = function(tagname) {
        let elem = document.createElement(tagname)
        document.body.appendChild(elem)
        return elem;
    }
    this.attr = function(element, name, value) {
        return value ? element.setAttribute(name, value) : element.getAttribute(name)
    }
    this.html = function(element, value) {
        return value ? element.innerHTML = value : element.innerHTML
    }
    this.search = function(selector, element = document.body) {
        return element.querySelectorAll(selector)
    }
    this.addClass = function(element, className) {
        element.classList.add(className)
    }
    this.removeClass = function(element, className) {
        element.classList.remove(className)
    }
    this.toggleClass = function(element, className) {
        element.classList.toggle(className)
    }
    this.hasClass = function(element, className) {
        return element.classList.contains(className) ? true : false
    }
    this.append = function(element, newElement, beforeElem) {
        beforeElem = beforeElem ?? null ?? undefined
        beforeElem !== undefined ? beforeElem.before(newElem) : element.appendChild(newElement);
    }
    this.on = function(element, eventName, funcName) {
        element.addEventListener(eventName, funcName);
    }
}

let dom = new Doom(),
    newElem = dom.create('div');

    dom.attr(newElem, 'data-status', 'true')
    console.log(dom.attr(newElem, 'data-status'))
    dom.html(newElem, 'Hello')
    console.log(dom.html(newElem))
    dom.addClass(newElem, 'main')
    console.log(dom.search('.main'))

    dom.removeClass(dom.search('.main1')[0], 'main1')

    dom.toggleClass(newElem, 'main')
    console.log(dom.hasClass(newElem, 'main'))

    dom.append(newElem, dom.create('p'))
    dom.append(newElem, dom.create('strong'))
    dom.append(newElem, dom.create('button'))
    dom.append(newElem, dom.create('p'), null)

    dom.on(newElem, 'click', newAlert);

    function newAlert() {
        console.log(this)
    }










