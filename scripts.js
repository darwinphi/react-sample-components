/**
 * Basic Rendering
 */
class HelloComponent extends React.Component {
	render() {
		return (
			<h1>Hi, World</h1>
		)
	}
}

/**
 * Using Props
 */
class HelloUser extends React.Component {
	render() {
		return (
			<h1>Hello, { this.props.name }</h1>
		)
	}
}

/**
 * Using States
 */
class TimesViewed extends React.Component {
	constructor(props) {
		super(props)
		var timesViewed = 0
		if (localStorage.timesViewed) {
			timesViewed = localStorage.timesViewed
		}
		timesViewed++
		this.state = { numViews: timesViewed }
		localStorage.timesViewed = timesViewed
	}

	render() {
		return <h1>{ this.state.numViews }</h1>
	}
}

/**
 * Using Events
 */
class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = { count: 0}
	}

	incrementCount() {
		this.setState({ count: this.state.count + 1})
	}

	resetCount() {
		this.setState({ count: 0 })
	}

	render() {
		return (
			<div>
				<div> Count: { this.state.count } </div>
				<button type="button" onClick={ this.incrementCount.bind(this) }>
					Increment
				</button>
				<button type="button" onClick={ this.resetCount.bind(this) }>
					Reset
				</button>
			</div>
		)
	}
}

class LikeButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = { liked: false }
	}

	toggle() {
		this.setState({ liked: !this.state.liked })
	}

	render() {
		var { name } = this.props 
		var txt = this.state.liked ? 'Unlike': 'like'
		var myColor = this.state.liked ? 'red': 'black'
		var weight = this.state.liked ? 'bold': 'normal'

		return (
			<p>
				<span style={{color: myColor, fontWeight: weight}}>
					{ name }
				</span>
				<span onClick={this.toggle.bind(this)}>
					{'\ud83d\udc4d' + txt }
				</span>
			</p>
		)
	}
}

class MyText extends React.Component {
	constructor(props) {
		super(props)
		this.state = { bold: false, color: 'black' }
	}

	handleMouseOver() {
		this.setState({ bold: true })
	}

	handleMouseOut() {
		this.setState({ bold: false })
	}

	handleClick() {
		if (this.state.color == 'red')
			this.setState({ color: 'black' })
		else 
			this.setState({ color: 'red'} )
	}

	render() {
		var myColor = this.state.color
		var weight = this.state.bold ? 'bold' : 'normal'

		return (
			<span style={{ color:myColor, fontWeight: weight}}
			onClick={this.handleClick.bind(this)}
			onMouseOver={this.handleMouseOver.bind(this)}
			onMouseOut={this.handleMouseOut.bind(this)} >
				{this.props.text}
			</span>
		)
	}
}

class FilteredList extends React.Component {
	constructor(props) {
		super(props)
		var allItems = ["Cat", "Dog", "Squirrel", "Hamster", "Spider"]
		this.state = { initialItems: allItems, currentItems: allItems }
	}

	filterList(input) {
		var updatedList = this.state.initialItems

		updatedList = updatedList.filter(item => item.search(input.target.value) !== -1)
		this.setState({ currentItems: updatedList })
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Search" onChange={this.filterList.bind(this)} />
				
				<ListItems items={this.state.currentItems} />
			</div>
		)
	}
}

class ListItems extends React.Component {
	render() {
		return (
			<ul>
				{ this.props.items.map(item => <li key={item}> {item} </li>) }
			</ul>
		)
	}
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {items: [], text: ' ', id: 0}
	}

	handleChange(e) {
		this.setState({ text: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		var newItem = { text: this.state.text, id: this.state.id }
		
		this.setState({
			items: this.state.items.concat(newItem),
			text: '',
			id: this.state.id + 1
		})
	}

	render() {
		return (
			<div>
				<h3>TODO List</h3>
				<TodoList items={ this.state.items }/>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input onChange={this.handleChange.bind(this)} value={this.state.text}/>
					<button>Add</button>
				</form>
			</div>
		)
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{ this.props.items.map(item => <TodoItem key={item.id} id={item.id} text={item.text} /> ) }
			</ul>
		)
	}
}

class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = { amDone: false }
	}

	handleClick() {
		this.setState({ amDone: !this.state.amDone })
	}

	render() {
		var line = this.state.amDone ? 'line-through': 'none'
		return (
			<li key={this.props.id} onClick={this.handleClick.bind(this)} style={{ textDecoration: line}} >
				{ this.props.text }				
			</li>
		)
	}
}

class Multiplier extends React.Component {
	constructor(props) {
		super(props)
		this.state = { input1: 0, input2: 0, product: 0 }
		this.multiply = this.multiply.bind(this)
	}

	multiply(id, val) {
		if (id == 1) {
			this.setState({ input1: val, product: val * this.state.input2 })
		}
		else if (id == 2) {
			this.setState({ input2: val, product: this.state.input1 * val })
		}
	}

	render() {
		return (
			<div>
				<NumberInputField id="1" action={this.multiply} />
				<NumberInputField id="2" action={this.multiply} />
				<OutputField product={this.state.product} />
			</div>
		)
	}
}

class NumberInputField extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.action(this.props.id, e.target.value)
	}

	render() {
		return (
			<input onChange={this.handleChange} />
		)
	}
}

class OutputField extends React.Component {
	render() {
		return (
			<div>
				The product is { this.props.product }
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Multiplier />
				<TodoApp />
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);