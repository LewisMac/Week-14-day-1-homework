var React = require("react");
var Film = require("./Film")
// var Showtime = require("./Showtime")

var FilmList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  visitPage: function(){
    window.location = "http://www.imdb.com/showtimes/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2750716742&pf_rd_r=14A7QY2BNDHHZQV9RVMA&pf_rd_s=right-5&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_sh_lk1"
  },
  render: function(){
    var filmNodes = this.props.data.map(function(film){
      // console.log(film.filmPage);
      return (
        <Film director={film.director} key={film.id} filmPage={film.filmPage}>
        {film.name}
        
        </Film>
        );
    });
    return (
      <div className="film-list">
      { filmNodes }
      <button onClick={this.visitPage}>Get Showtimes</button>
      </div>
      );
  }
});

module.exports = FilmList;