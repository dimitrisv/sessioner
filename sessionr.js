var trickList = [
  '540',
  'aerial',
  'gainerflash',
  'tornado',
  'backsweep',
  'b-kick',
  'b-twist',
  'cork',
  'sideswipe',
  'doubleleg',
  'cartwheel',
  'raiz',
  'hook',
  'scoot > full',
  'td raiz',
  'full',
  'flash',
  'bs900'
]

var Hello = React.createClass({
  getInitialState: function() {
    return({
      comboLength: 5
    });
  },

  shuffle: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },

  generateCombo: function(e) {
    e.preventDefault();

    var newCombo = this.shuffle(this.props.trickList).slice(0, this.state.comboLength-1).join(' > ');

    $('.combos').append("<div class='combo'>"+newCombo+"</div>");
  },

  clearAll: function(e) {
    e.preventDefault();

    $('.combos .combo').remove();
  },

  render: function() {
    return (
      <div>
        <div className="btn-container">
          <a href="#" onClick={this.generateCombo} className="new-combo-btn btn">New Combo</a>
          <a href="#" onClick={this.customizeClicked} className="customize-btn btn">Customize</a>
          <a href="#" onClick={this.clearAll} className="clear-all-btn btn">Clear All</a>
        </div>
        <div className="combos">
        </div>
      </div>
    );
  }
})

ReactDOM.render(
  <Hello trickList={trickList} />,
  document.getElementById('main')
);