import React, { useState } from 'react';
import Button from './dump/Button';
import Dropdown from './dump/Dropdown';
import FlagEmoji from './dump/FlagEmoji';
import Input from './dump/Input';
import OffCanvas from './dump/OffCanvas';
import NewCard from './NewCard';

function Testing() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const handleDropdownSelect = (item) => {
    alert(`Selected: ${item}`);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="testing">
      <h1>Component Demos</h1>

      <section>
        <h2>Button</h2>
        <Button
          text="Click Me"
          onClick={handleButtonClick}
          classes="btn-primary"
          varient="primary"
        />
      </section>

      <section>
        <h2>Dropdown</h2>
        <Dropdown
          label="Select an option"
          defaultValue="Option 1"
          items={['Option 1', 'Option 2', 'Option 3']}
          onSelect={handleDropdownSelect}
        />
      </section>

      <section>
        <h2>FlagEmoji</h2>
        <FlagEmoji countryCode="us" />
      </section>

      <section>
        <h2>Input</h2>
        <Input
          label="Name"
          value=""
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </section>

      <section>
        <h2>OffCanvas</h2>
        <Button
          text="Toggle OffCanvas"
          onClick={toggleOffCanvas}
          classes="btn-secondary"
          varient="secondary"
        />
        <OffCanvas
          isOpen={isOffCanvasOpen}
          toggleMenu={toggleOffCanvas}
          title="OffCanvas Menu"
          buttonText="Save"
          saveBtnHandler={() => alert('Saved!')}
        >
          <p>This is the content inside the OffCanvas component.</p>
        </OffCanvas>
      </section>

      <section>
        <h2>NewCard</h2>
        <NewCard />
      </section>
    </div>
  );
}

export default Testing;