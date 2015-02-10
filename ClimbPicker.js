/**
 * Created by npowers on 06/02/15.
 */

// todo move data to a json file
var data = [
    {
        "id": "001",
        "name": "Cheddar Gorge",
        "region":"South West",
        "location": "Somerset",
        "gridLocation": "TBC",
        "rating": 6,
        "durationMinutes" : 20,
        "lengthKilometres": 3.5,
        "elevationGainMetres": 150,
        "gradientAverage": 5,
        "gradientMaximum": 16,
        "primaryImage": "/path/to/primary-image",
        "whereImage": "/path/to/where-image",
        "description": "Bacon ipsum dolor amet sirloin pork chop andouille picanha. Spare ribs tri-tip meatball ham, ham hock flank beef leberkas. Kevin ham hock turducken, doner spare ribs turkey frankfurter ground round meatball bresaola. Chuck flank shankle brisket pork. Tri-tip hamburger turkey tail frankfurter leberkas. Bacon ham hock sausage hamburger pork t-bone biltong porchetta. T-bone prosciutto sirloin pork belly jowl, corned beef bresaola cupim. Leberkas kevin biltong cow. Brisket ribeye porchetta pastrami pig capicola filet mignon frankfurter meatloaf shank. Chuck chicken beef ribs shankle tenderloin short loin."
    },
    {
        "id": "004",
        "name": "Dunkery Beacon",
        "region":"South West",
        "location": "Somerset",
        "gridLocation": "TBC",
        "rating": 10,
        "durationMinutes" : 25,
        "lengthKilometres": 3.5,
        "elevationGainMetres": 370,
        "gradientAverage": 10.2,
        "gradientMaximum": 18,
        "primaryImage": "/path/to/primary-image",
        "whereImage": "/path/to/where-image",
        "description": "Bacon ipsum dolor amet sirloin pork chop andouille picanha. Spare ribs tri-tip meatball ham, ham hock flank beef leberkas. Kevin ham hock turducken, doner spare ribs turkey frankfurter ground round meatball bresaola. Chuck flank shankle brisket pork. Tri-tip hamburger turkey tail frankfurter leberkas. Bacon ham hock sausage hamburger pork t-bone biltong porchetta. T-bone prosciutto sirloin pork belly jowl, corned beef bresaola cupim. Leberkas kevin biltong cow. Brisket ribeye porchetta pastrami pig capicola filet mignon frankfurter meatloaf shank. Chuck chicken beef ribs shankle tenderloin short loin."
    }
];

var FilterableClimbsList = React.createClass({
    render: function(){
        return (
            <div className="FilterableClimbsList">
            <h1>FilterableClimbsList</h1>
            <ClimbList data={this.props.data} />
            <ClimbListFilter />
            <ClimbDetail />

            </div>
            );
    }
});

var ClimbList = React.createClass({
    render: function() {
        var climbListItemNodes = this.props.data.map(function (climblistitem) {
            return (
                <ClimbListItem
                    name={climblistitem.name}
                    location={climblistitem.location}
                    gradientAverage={climblistitem.gradientAverage}
                    >

                </ClimbListItem>
            );
        });
        return (
            <div className="ClimbList">
            <h2>I am a ClimbList</h2>
            {climbListItemNodes}
            </div>
        );
    }
});



var ClimbListItem = React.createClass({
    render: function(){
        return (
            <div className="ClimbListItem">
                <h3>{this.props.name}</h3>
                <p>{this.props.location}</p>
                <p>{this.props.gradientAverage}</p>
            </div>
            );
    }
});

var ClimbListPaginate = React.createClass({
    render: function(){
        return (
            <div className="ClimbListPaginate">
                <h3>Im a ClimbListPaginate</h3>
            </div>
            );
    }
});


var ClimbListFilter = React.createClass({
    render: function(){
        return (
            <div className="ClimbListFilter">
                <h2>Im a ClimbListFilter</h2>
                <FilterByRegion />
                <FilterByRating />
                <FilterByElevationGain />
            </div>
            );
    }
});

var FilterByRegion = React.createClass({
    render: function(){
        return (
            <div className="FilterByRegion">
                <h3>Im a FilterByRegion</h3>
            </div>
            );
    }
});


var FilterByRating = React.createClass({
    render: function(){
        return (
            <div className="FilterByRating">
                <h3>Im a FilterByRating</h3>
            </div>
            );
    }
});


var FilterByElevationGain = React.createClass({
    render: function(){
        return (
            <div className="FilterByElevationGain">
                <h3>Im a FilterByElevationGain</h3>
            </div>
            );
    }
});


var ClimbDetail = React.createClass({
    render: function(){
        return (
            <div className="ClimbDetail">
                <h2>Im a ClimbDetail</h2>
                <ClimbDetailHeader />
                <ClimbDetailContent />
                <ClimbDetailFactfile />
            </div>
        );
    }
});

var ClimbDetailHeader = React.createClass({
    render: function(){
        return (
            <div className="ClimbDetailHeader">
                <h3>Im a ClimbDetailHeader</h3>
            </div>
        );
    }
});

var ClimbDetailContent = React.createClass({
    render: function(){
        return (
            <div className="ClimbDetailContent">
                <h3>Im a ClimbDetailContent</h3>
            </div>
        );
    }
});

var ClimbDetailFactfile = React.createClass({
    render: function(){
        return (
            <div className="ClimbDetailFactfile">
                <h3>Im a ClimbDetailFactfile</h3>
            </div>
        );
    }
});








React.render(
    <FilterableClimbsList data={data} />, document.body
);