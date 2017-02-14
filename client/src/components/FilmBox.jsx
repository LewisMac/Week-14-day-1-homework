var React = require("react");
var FilmList = require("./FilmList.jsx");

var films = [
{
  id: 0,
  director: "Chris McKay",
  name: "The Lego Batman Movie",
  filmPage: "http://www.imdb.com/title/tt4116284/",
  showPage: "http://www.imdb.com"
}, {
  id: 1,
  director: "Danny Boyle",
  name: "T2 Trainspotting",
  filmPage: "http://www.imdb.com/title/tt2763304/",
  showPage: "http://www.imdb.com"
}, {
  id: 2,
  director: "Stanley Kubrick",
  name: "Dr Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  filmPage: "http://www.imdb.com/title/tt0057012/",
  showPage: "http://www.imdb.com"
}
];

var FilmBox = React.createClass({

  getInitialState: function(){
    return {
      data: films
    }
  },

  render: function(){
    return (
      <div className="film-box">
      <p>Opening This Week</p>
      <FilmList data={ this.state.data }/>
      </div>
      )
  }

});

module.exports = FilmBox;