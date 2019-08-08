import React from 'react';
import SUIToggle from './components/form/toggle';
import SUIButton from './components/form/button';
import "@bit/wpmudev.wpmudev-sui.shared-ui";

function App() {
  return (
    <React.Fragment />
    <div className="App">
      
    <div className="sui-2-3-29">
      <div className="sui-wrap">
        <div>
          <SUIToggle
            id="my-test-toggle"
            checked={ false }
            onChange={ () => { console.log( 'clicked' ); } }
            label="My test toggle"
          />
        </div>
        <div>
          <SUIButton
            id="plain-button"
            onClick={ () => { console.log( 'click' ); } }
            label="My button"
          />
        </div>
        <div>
          <SUIButton
            id="icon-button"
            icon="academy"
            onClick={ () => { console.log( 'click' ); } }
            label="My button with icon"
          />
        </div>
        <div>
          <SUIButton
            id="icon-button"
            classes={
              [ 'sui-button-blue' ]
            }
            onClick={ () => { console.log( 'click' ); } }
            label="My color button"
          />
        </div>
        <div>
          <SUIButton
            id="icon-button"
            classes={
              [ 'sui-button-yellow', 'sui-button-lg' ]
            }
            onClick={ () => { console.log( 'click' ); } }
            label="My big button"
          />
        </div>
        <div>
          <SUIButton
            id="icon-button"
            classes={
              [ 'sui-button-ghost' ]
            }
            onClick={ () => { console.log( 'click' ); } }
            label="Ghost button"
          />
        </div>
        <div>
          <SUIButton
            id="icon-button"
            disabled={ true }
            onClick={ () => { console.log( 'click' ); } }
            label="Disabled button"
          />
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default App;
