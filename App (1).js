import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import format from 'date-fns/format';
import './App.scss';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateSelect = date => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BpkText tagName="h1" textStyle="xxl">
          Flight Schedule
        </BpkText>
      </header>
      <main>
        <BpkCalendar
          id="calendar"
          onDateSelect={onDateSelect}
          formatDate={date => format(date, 'dd/MM/yyyy')}
          daysOfWeek={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
          weekStartsOn={1}
        />
        <div style={{ marginTop: '20px' }}>
          <BpkButton onClick={() => {}}>Continue</BpkButton>
        </div>
      </main>
    </div>
  );
};

export default App;
