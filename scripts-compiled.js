"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Basic Rendering
 */
var HelloComponent = function (_React$Component) {
	_inherits(HelloComponent, _React$Component);

	function HelloComponent() {
		_classCallCheck(this, HelloComponent);

		return _possibleConstructorReturn(this, (HelloComponent.__proto__ || Object.getPrototypeOf(HelloComponent)).apply(this, arguments));
	}

	_createClass(HelloComponent, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"h1",
				null,
				"Hi, World"
			);
		}
	}]);

	return HelloComponent;
}(React.Component);

/**
 * Using Props
 */


var HelloUser = function (_React$Component2) {
	_inherits(HelloUser, _React$Component2);

	function HelloUser() {
		_classCallCheck(this, HelloUser);

		return _possibleConstructorReturn(this, (HelloUser.__proto__ || Object.getPrototypeOf(HelloUser)).apply(this, arguments));
	}

	_createClass(HelloUser, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"h1",
				null,
				"Hello, ",
				this.props.name
			);
		}
	}]);

	return HelloUser;
}(React.Component);

/**
 * Using States
 */


var TimesViewed = function (_React$Component3) {
	_inherits(TimesViewed, _React$Component3);

	function TimesViewed(props) {
		_classCallCheck(this, TimesViewed);

		var _this3 = _possibleConstructorReturn(this, (TimesViewed.__proto__ || Object.getPrototypeOf(TimesViewed)).call(this, props));

		var timesViewed = 0;
		if (localStorage.timesViewed) {
			timesViewed = localStorage.timesViewed;
		}
		timesViewed++;
		_this3.state = { numViews: timesViewed };
		localStorage.timesViewed = timesViewed;
		return _this3;
	}

	_createClass(TimesViewed, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"h1",
				null,
				this.state.numViews
			);
		}
	}]);

	return TimesViewed;
}(React.Component);

/**
 * Using Events
 */


var Counter = function (_React$Component4) {
	_inherits(Counter, _React$Component4);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this4 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this4.state = { count: 0 };
		return _this4;
	}

	_createClass(Counter, [{
		key: "incrementCount",
		value: function incrementCount() {
			this.setState({ count: this.state.count + 1 });
		}
	}, {
		key: "resetCount",
		value: function resetCount() {
			this.setState({ count: 0 });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					null,
					" Count: ",
					this.state.count,
					" "
				),
				React.createElement(
					"button",
					{ type: "button", onClick: this.incrementCount.bind(this) },
					"Increment"
				),
				React.createElement(
					"button",
					{ type: "button", onClick: this.resetCount.bind(this) },
					"Reset"
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

var LikeButton = function (_React$Component5) {
	_inherits(LikeButton, _React$Component5);

	function LikeButton(props) {
		_classCallCheck(this, LikeButton);

		var _this5 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

		_this5.state = { liked: false };
		return _this5;
	}

	_createClass(LikeButton, [{
		key: "toggle",
		value: function toggle() {
			this.setState({ liked: !this.state.liked });
		}
	}, {
		key: "render",
		value: function render() {
			var name = this.props.name;

			var txt = this.state.liked ? 'Unlike' : 'like';
			var myColor = this.state.liked ? 'red' : 'black';
			var weight = this.state.liked ? 'bold' : 'normal';

			return React.createElement(
				"p",
				null,
				React.createElement(
					"span",
					{ style: { color: myColor, fontWeight: weight } },
					name
				),
				React.createElement(
					"span",
					{ onClick: this.toggle.bind(this) },
					"\uD83D\uDC4D" + txt
				)
			);
		}
	}]);

	return LikeButton;
}(React.Component);

var MyText = function (_React$Component6) {
	_inherits(MyText, _React$Component6);

	function MyText(props) {
		_classCallCheck(this, MyText);

		var _this6 = _possibleConstructorReturn(this, (MyText.__proto__ || Object.getPrototypeOf(MyText)).call(this, props));

		_this6.state = { bold: false, color: 'black' };
		return _this6;
	}

	_createClass(MyText, [{
		key: "handleMouseOver",
		value: function handleMouseOver() {
			this.setState({ bold: true });
		}
	}, {
		key: "handleMouseOut",
		value: function handleMouseOut() {
			this.setState({ bold: false });
		}
	}, {
		key: "handleClick",
		value: function handleClick() {
			if (this.state.color == 'red') this.setState({ color: 'black' });else this.setState({ color: 'red' });
		}
	}, {
		key: "render",
		value: function render() {
			var myColor = this.state.color;
			var weight = this.state.bold ? 'bold' : 'normal';

			return React.createElement(
				"span",
				{ style: { color: myColor, fontWeight: weight },
					onClick: this.handleClick.bind(this),
					onMouseOver: this.handleMouseOver.bind(this),
					onMouseOut: this.handleMouseOut.bind(this) },
				this.props.text
			);
		}
	}]);

	return MyText;
}(React.Component);

var FilteredList = function (_React$Component7) {
	_inherits(FilteredList, _React$Component7);

	function FilteredList(props) {
		_classCallCheck(this, FilteredList);

		var _this7 = _possibleConstructorReturn(this, (FilteredList.__proto__ || Object.getPrototypeOf(FilteredList)).call(this, props));

		var allItems = ["Cat", "Dog", "Squirrel", "Hamster", "Spider"];
		_this7.state = { initialItems: allItems, currentItems: allItems };
		return _this7;
	}

	_createClass(FilteredList, [{
		key: "filterList",
		value: function filterList(input) {
			var updatedList = this.state.initialItems;

			updatedList = updatedList.filter(function (item) {
				return item.search(input.target.value) !== -1;
			});
			this.setState({ currentItems: updatedList });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("input", { type: "text", placeholder: "Search", onChange: this.filterList.bind(this) }),
				React.createElement(ListItems, { items: this.state.currentItems })
			);
		}
	}]);

	return FilteredList;
}(React.Component);

var ListItems = function (_React$Component8) {
	_inherits(ListItems, _React$Component8);

	function ListItems() {
		_classCallCheck(this, ListItems);

		return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).apply(this, arguments));
	}

	_createClass(ListItems, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"ul",
				null,
				this.props.items.map(function (item) {
					return React.createElement(
						"li",
						{ key: item },
						" ",
						item,
						" "
					);
				})
			);
		}
	}]);

	return ListItems;
}(React.Component);

var TodoApp = function (_React$Component9) {
	_inherits(TodoApp, _React$Component9);

	function TodoApp(props) {
		_classCallCheck(this, TodoApp);

		var _this9 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

		_this9.state = { items: [], text: ' ', id: 0 };
		return _this9;
	}

	_createClass(TodoApp, [{
		key: "handleChange",
		value: function handleChange(e) {
			this.setState({ text: e.target.value });
		}
	}, {
		key: "handleSubmit",
		value: function handleSubmit(e) {
			e.preventDefault();
			var newItem = { text: this.state.text, id: this.state.id };

			this.setState({
				items: this.state.items.concat(newItem),
				text: '',
				id: this.state.id + 1
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h3",
					null,
					"TODO List"
				),
				React.createElement(TodoList, { items: this.state.items }),
				React.createElement(
					"form",
					{ onSubmit: this.handleSubmit.bind(this) },
					React.createElement("input", { onChange: this.handleChange.bind(this), value: this.state.text }),
					React.createElement(
						"button",
						null,
						"Add"
					)
				)
			);
		}
	}]);

	return TodoApp;
}(React.Component);

var TodoList = function (_React$Component10) {
	_inherits(TodoList, _React$Component10);

	function TodoList() {
		_classCallCheck(this, TodoList);

		return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
	}

	_createClass(TodoList, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"ul",
				null,
				this.props.items.map(function (item) {
					return React.createElement(TodoItem, { key: item.id, id: item.id, text: item.text });
				})
			);
		}
	}]);

	return TodoList;
}(React.Component);

var TodoItem = function (_React$Component11) {
	_inherits(TodoItem, _React$Component11);

	function TodoItem(props) {
		_classCallCheck(this, TodoItem);

		var _this11 = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, props));

		_this11.state = { amDone: false };
		return _this11;
	}

	_createClass(TodoItem, [{
		key: "handleClick",
		value: function handleClick() {
			this.setState({ amDone: !this.state.amDone });
		}
	}, {
		key: "render",
		value: function render() {
			var line = this.state.amDone ? 'line-through' : 'none';
			return React.createElement(
				"li",
				{ key: this.props.id, onClick: this.handleClick.bind(this), style: { textDecoration: line } },
				this.props.text
			);
		}
	}]);

	return TodoItem;
}(React.Component);

var Multiplier = function (_React$Component12) {
	_inherits(Multiplier, _React$Component12);

	function Multiplier(props) {
		_classCallCheck(this, Multiplier);

		var _this12 = _possibleConstructorReturn(this, (Multiplier.__proto__ || Object.getPrototypeOf(Multiplier)).call(this, props));

		_this12.state = { input1: 0, input2: 0, product: 0 };
		_this12.multiply = _this12.multiply.bind(_this12);
		return _this12;
	}

	_createClass(Multiplier, [{
		key: "multiply",
		value: function multiply(id, val) {
			if (id == 1) {
				this.setState({ input1: val, product: val * this.state.input2 });
			} else if (id == 2) {
				this.setState({ input2: val, product: this.state.input1 * val });
			}
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(NumberInputField, { id: "1", action: this.multiply }),
				React.createElement(NumberInputField, { id: "2", action: this.multiply }),
				React.createElement(OutputField, { product: this.state.product })
			);
		}
	}]);

	return Multiplier;
}(React.Component);

var NumberInputField = function (_React$Component13) {
	_inherits(NumberInputField, _React$Component13);

	function NumberInputField(props) {
		_classCallCheck(this, NumberInputField);

		var _this13 = _possibleConstructorReturn(this, (NumberInputField.__proto__ || Object.getPrototypeOf(NumberInputField)).call(this, props));

		_this13.handleChange = _this13.handleChange.bind(_this13);
		return _this13;
	}

	_createClass(NumberInputField, [{
		key: "handleChange",
		value: function handleChange(e) {
			this.props.action(this.props.id, e.target.value);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement("input", { onChange: this.handleChange });
		}
	}]);

	return NumberInputField;
}(React.Component);

var OutputField = function (_React$Component14) {
	_inherits(OutputField, _React$Component14);

	function OutputField() {
		_classCallCheck(this, OutputField);

		return _possibleConstructorReturn(this, (OutputField.__proto__ || Object.getPrototypeOf(OutputField)).apply(this, arguments));
	}

	_createClass(OutputField, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"The product is ",
				this.props.product
			);
		}
	}]);

	return OutputField;
}(React.Component);

var App = function (_React$Component15) {
	_inherits(App, _React$Component15);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(Multiplier, null),
				React.createElement(TodoApp, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
