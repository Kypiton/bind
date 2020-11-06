function f(...args) {
	console.log(this);
	console.log (args);
}

function bind(fn, context, ...rest) { 
	return function (...args) {
		return fn.call(context, ...rest.concat(args));
	};
}

let bindedF = bind(f, {name: "Dan"}, 0, 1, 2, 3, 4, 5);
bindedF (6, "Sam", "John");

const object = {
	surname: "Glushchenko"
};

function info(age, genus) {
	console.log(`Age: ${age}, Genus: ${genus}`);
}


function apply(func, context, arr) {
	const uniqId = Date.now().toString();
	context [uniqId] = func;
	const result = context[uniqId](...arr);
	delete context[uniqId];
	return result;
}


apply(info, object, [18, "М"]);

