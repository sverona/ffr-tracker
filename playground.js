function tryToSetStyle(inputElement, targetElement, property, value) {
	var oldStyle = window.getComputedStyle(targetElement)
		       .getPropertyValue(property);

	targetElement.style.setProperty(property, value);
	var newStyle = window.getComputedStyle(targetElement)
		       .getPropertyValue(property);

	var success;
	if (value == oldStyle) {
		success = true;
	} else if (oldStyle != newStyle) {
		success = true;
	} else {
		success = false;
	}

	var feedbackColor;
	if (inputElement.value.length == 0) {
		feedbackColor = 'white';
	} else if (success) {
		feedbackColor = 'var(--success)';
	} else {
		feedbackColor = 'var(--failure)';
	}

	inputElement.style.setProperty('background-color', feedbackColor);
	return success;
}

function addStyleListener(inputElement, targetElement, property) {
	inputElement.onchange = (e => {
		var value = e.target.value;
		tryToSetStyle(inputElement, targetElement, property, value);
	});
}

var listeners = [
	// [document.querySelector('#container-width'), document.querySelector('#container'), 'width'],
	// [document.querySelector('#container-height'), document.querySelector('#container'), 'height'],
	[document.querySelector('#flex-direction'), document.querySelector('#container'), 'flex-direction'],
	[document.querySelector('#flex-wrap'), document.querySelector('#container'), 'flex-wrap'],
	[document.querySelector('#align-items'), document.querySelector('#container'), 'align-items'],
	[document.querySelector('#justify-content'), document.querySelector('#container'), 'justify-content'],
	[document.querySelector('#item-width'), document.documentElement, '--item-width'],
	[document.querySelector('#item-height'), document.documentElement, '--item-height'],
	[document.querySelector('#flex-basis'), document.querySelector('#red'), 'flex-basis'],
	[document.querySelector('#flex-grow'), document.querySelector('#red'), 'flex-grow'],
	[document.querySelector('#flex-shrink'), document.querySelector('#red'), 'flex-shrink'],
	[document.querySelector('#order'), document.querySelector('#red'), 'order'],
];

for (const [inputSelector, targetSelector, property] of listeners) {
	addStyleListener(inputSelector, targetSelector, property); 
}
