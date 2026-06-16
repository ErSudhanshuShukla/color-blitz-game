# node list & html collection

# selectors

- get elements by id
- get elements by class
- get elements by tagname
- query selector ("tag", ".Class", "#Id")
- query selector all

# text manipulation

- textcontent
- innerHtml

# class

- .classList.add("class") "add"
- .classList.remove("class") "delete"
- .classList.contains("class") "boolean"
- .classList.toggle("class") "add/remove"
- .classList.replace("class") "replace with new"

# apply events

- .addEventListener ("event name",() => {})

# attributes & properties

- attributes - predefined properties cannot change
- properties - can change

- get, set, remove, has

# dataset custom attribute

# input.value vs input.getAttribute("value")

# creating,inserting & removing element

- .createElement("")
- .appendChild(); "only single element"
- .removeChild()
- .insertBefore()
- .replaceChild()
- .append(,) "multiple"
- .prepend()
- .before()
- .after()
- .replaceWith()

# events

- mouseEvents - dblclick, mouseover, mouseleave
- pointerEvents - click
- keyboardEvents - keypress, keydown, keyup
- inputEvents - input
- submitEvents - from
- inlineEvents - onClick

# event propogation/event traversal

- event capturing / top-down
  -> window - doctype - html - boby - main - div - button(target)

- event bubbling / down-top
  -> button (target) - div - main - body - html - document - window

# submit event

- event.preventDefault(); stop page from reloading
- form.reset()
- required in input

# event deligations
set timeout 
clear interval
.clientHeight
.clientWeight