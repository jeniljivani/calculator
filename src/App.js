import { useState } from 'react';
import './App.css'
// import { click } from '@testing-library/user-event/dist/click';
function App() {

  var [nextvalue, setnextvalue] = useState('');
  var [prevvalue, setprevvalue] = useState('');
  var [sin, setsin] = useState('');

  // function handle(e) {
  //   setnextvalue(nextvalue + e.target.value);
  // };
  function sing() {
    // setsin=num;
    setprevvalue(nextvalue);
    setnextvalue('');
    console.log(setprevvalue);
    return (setprevvalue);
  };
  function total() {
   
      // console.log(prevvalue);
    console.log(sin);
    setnextvalue(nextvalue);
    // console.log(setnextvalue)
    if (sin == 1) {     
      setnextvalue(parseFloat(prevvalue) + parseFloat(nextvalue));
    }
    else if (sin == 2) {
      setnextvalue(parseFloat(prevvalue) - parseFloat(nextvalue));
    }
    else if (sin == 3) {
      setnextvalue(parseFloat(prevvalue) * parseFloat(nextvalue));
    }
    else if (sin == 4) {
        let temp = (parseFloat(prevvalue) / parseFloat(nextvalue)); 
        if(temp == Infinity)
        {
          setnextvalue("ERROR");
        }
        else {
          setnextvalue(temp);
        }
    }
    else if (sin == 5) {
      console.log(prevvalue);
      console.log(nextvalue);
      let temp =(parseFloat(prevvalue) * parseFloat(nextvalue)/100);
      if(temp == 0)
      {
        setnextvalue('ERROR');
      }
      else{
        setnextvalue(temp);
      }
    }
  };

  return (
    <div>
      <div className='cal'>
        <div className="disp">
          <input type="text" value={nextvalue} className='dis'></input>
        </div>
        <div className="keypad">
          <input type='button' className='btn btnsin' value={"Clear"} onClick={e => setnextvalue('')}></input>
          <input type='button' className='btn btnsin' value={"C"} onClick={(e) => setnextvalue(nextvalue.slice(0, -1))}></input>
          <input type="button" className='btn btnsin' name="%" value={'%'} onClick={(e) => { sing(); setsin('5') }}></input>
          <input type="button" className='btn btnsin' name="/" value={'/'} onClick={(e) => { sing(); setsin('4') }}></input><br></br>
          <input type="button" className='btn' name="7" value={'7'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="8" value={'8'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="9" value={'9'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn btnsin' name="*" value={'*'} onClick={(e) => { sing(); setsin('3') }}></input><br></br>
          <input type="button" className='btn' name="4" value={'4'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="5" value={'5'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="6" value={'6'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn btnsin' name="-" value={'-'} onClick={(e) => { sing(); setsin('2') }}></input><br></br>
          <input type="button" className='btn' name="1" value={'1'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="2" value={'2'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="3" value={'3'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn btnsin' name="+" value={'+'} onClick={(e) => { sing(); setsin('1') }}></input><br></br>
          <input type="button" className='btn' name="0" value={'0'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn' name="." value={'.'} onClick={(e) => setnextvalue(nextvalue + e.target.value)}></input>
          <input type="button" className='btn btnsin' value={'='} onClick={total}></input>
        </div>
      </div>
    </div>
  )
};
export default App;

