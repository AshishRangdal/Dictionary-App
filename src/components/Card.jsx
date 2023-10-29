import React from "react";
import "./cardstyle.css";

const Card = (props) => {
  const { sourceUrl, meaningofWord, word, phonetic } = props.info;
  const audioUrl = props.info.audio;
  const navigateTo = () => {
    window.open(sourceUrl, "_blank");
  };

  return (
    <div className="cardContainer">
      <h1 className="mainWord">{word ? word.toUpperCase() : "Loading..."}</h1>
      <p>{phonetic}</p>

      <p>Pronounce: </p>

      <audio key={Math.random()} controls>
        <source src={audioUrl} type="audio/ogg"></source>
      </audio>

      {meaningofWord !== undefined
        ? meaningofWord.map((val, index) => {
            return (
              <div key={index}>
                <h2 className="partofSpeech">
                  {val.partOfSpeech
                    ? val.partOfSpeech.toUpperCase()
                    : "Wait..."}{" "}
                  :-
                </h2>
                <ul>
                  {val.definitions.map((def) => {
                    return <li key={Math.random()}>{def.definition}</li>;
                  })}
                </ul>
              </div>
            );
          })
        : console.log("Fetching Meaning...")}

      <div className="linkContainer">
        <div id="lear-more-container">
          <button onClick={navigateTo} className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </div>

        <a
          href="https://github.com/AshishRangdal"
          target="_blank"
          className="glow-on-hover"
          rel="noopener noreferrer"
        >
          @AshishRangdal {new Date().getFullYear()}
        </a>
      </div>
    </div>
  );
};

export default Card;
