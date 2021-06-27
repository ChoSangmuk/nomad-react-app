import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) history.push("/");
  }

  render() {
    const { location: { state } } = this.props;
    if (state === undefined) return null;
    else return (
      <div className="detail__container">
        <div className="detail__background__image"
          style={{
            backgroundImage: "url(" + state.backposter + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className="detail__contents" >
            <span>{state.title}, {state.year}</span>
            <span>{state.summary}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;