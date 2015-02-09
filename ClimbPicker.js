/**
 * Created by npowers on 06/02/15.
 */


var FilterableClimbsList = React.createClass({
    render: function(){
        return (
            <div className="FilterableClimbsList">
            <h1>FilterableClimbsList</h1>
            <ClimbList />
            <ClimbListFilter />
            <ClimbDetail />

            </div>
            );
    }
});


var ClimbList = React.createClass({
    render: function(){
        return (
            <div className="ClimbList">
            <h2>Im a ClimbList</h2>
            <ClimbListItem />
            <ClimbListPaginate />
            </div>
            );
    }
});

var ClimbListItem = React.createClass({
    render: function(){
        return (
            <div className="ClimbListItem">
                <h3>Im a ClimbListItem</h3>
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
    <FilterableClimbsList />, document.body
);