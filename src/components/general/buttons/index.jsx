// imports

// components
import * as NavButtons from './NavButtons';
import * as OnClickButtons from './OnClickButtons';

// Det finns tre olika designs för knappar: primary, secondary och ghost. Det finns två olika typer av knappar: NavButton och OnClickButton. NavButton skall användas när man vill länka till en annan sida internt OnClickButton skall användas när man vill använda en onclick på knappen. Styling renderas dynamiskt genom propen type och sedan tar en switch i denna fil hand om vilken knapp som skall renderas.

// NavButton
// Props:
// link: string, url till sida som knappen skall länka till. Använd dig av Routingpath
// text: string, text som skall visas på knappen.
// type: string, typ av knapp.

const NavButton = ({ link, text, type }) => {
  const buttonType = type.toLowerCase();

  switch (buttonType) {
    case 'primary':
      return <NavButtons.NavBtn link={link} btnText={text} />;
    case 'secondary':
      return <NavButtons.NavBtnSecondary link={link} btnText={text} />;
    case 'ghost':
      return <NavButtons.NavBtnGhost link={link} btnText={text} />;
    default:
      return <NavButtons.NavBtn link={link} btnText={text} />;
  }
};

// OnClickButton
// Props:
// onClickHandler: funktionen som skall köras när knappen klickas på.
// text: string, text som skall visas på knappen.
// type: string, typ av knapp.

const OnClickButton = ({ onClickHandler, text, type }) => {
  const buttonType = type.toLowerCase();

  switch (buttonType) {
    case 'primary':
      return (
        <OnClickButtons.OnClickBtn
          onClickHandler={onClickHandler}
          btnText={text}
        />
      );
    case 'secondary':
      return (
        <OnClickButtons.OnClickBtnSecondary
          onClickHandler={onClickHandler}
          btnText={text}
        />
      );
    case 'ghost':
      return (
        <OnClickButtons.OnClickBtnGhost
          onClickHandler={onClickHandler}
          btnText={text}
        />
      );
    default:
      return (
        <OnClickButtons.OnClickBtn
          onClickHandler={onClickHandler}
          btnText={text}
        />
      );
  }
};

export { NavButton, OnClickButton };
