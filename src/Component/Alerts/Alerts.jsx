import React, { useState } from 'react'
import dollar from '../../assets/images/icons/dollar-removebg-preview.png'
import file from '../../assets/images/icons/file-removebg-preview.png'
import rank from '../../assets/images/icons/rank-removebg-preview.png'
import low_risk from '../../assets/images/icons/low-risk-removebg-preview.png'
import high_risk from '../../assets/images/icons/high-risk-removebg-preview.png'


export default function Alerts() {

    const [displayStates, setDisplayStates] = useState(new Array(11).fill(false)); // Adjust the length as per your requirements
    const [clickedRowIndex, setClickedRowIndex] = useState(null);



  const toggleDisplay = (index) => {
    const newDisplayStates = [...displayStates];
    newDisplayStates[index] = !newDisplayStates[index];
    setDisplayStates(newDisplayStates);
    if (index === clickedRowIndex) {
        setClickedRowIndex(null);
    } else {
        setClickedRowIndex(index);
    }
  };

  return <>
      <section id='alert' className='p-4'>
          <div className="header d-flex align-items-center">
            <h1 className='text-white'>ALERTS</h1>
            <div className="search ms-4 input-icons">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="input-field" placeholder='Search By...'  className='form-control'/>
            </div>
            <div className="bell d-flex align-items-center position-relative ms-3">
               <i class="fa-solid fa-bell ms-auto"></i>
               <div className="count position-absolute">
                <span className='text-white'>6</span>
               </div>
            </div>
          </div>
          <div className="content mt-4 ">
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center" onClick={() => toggleDisplay(0)} style={{ backgroundColor: clickedRowIndex === 0 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 brdr-r first">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>AMZN</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[0] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$AMZN</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(1)} style={{ backgroundColor: clickedRowIndex === 1 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>TSLA</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='text-success rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={high_risk} alt="" width={50} />
                      <span className='text-white ps-4'>High Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[1] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$TSLA</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(2)} style={{ backgroundColor: clickedRowIndex === 2 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>ABQQ</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='text-success rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={high_risk} alt="" width={50} />
                      <span className='text-white ps-4'>High Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[2] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$ABQQ</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(3)} style={{ backgroundColor: clickedRowIndex === 3 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>MSFT</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[3] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$MSFT</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(4)} style={{ backgroundColor: clickedRowIndex === 4 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>PYPL</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='text-success rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[4] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$PYPL</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(5)} style={{ backgroundColor: clickedRowIndex === 5 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[5] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(6)} style={{ backgroundColor: clickedRowIndex === 6 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[6] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(7)} style={{ backgroundColor: clickedRowIndex === 7 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[7] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(8)} style={{ backgroundColor: clickedRowIndex === 8 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[8] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(9)} style={{ backgroundColor: clickedRowIndex === 9 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[9] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(10)} style={{ backgroundColor: clickedRowIndex === 10 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[10] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
            <div className=" row mx-0 px-4 py-2 d-flex align-items-center mt-3" onClick={() => toggleDisplay(11)} style={{ backgroundColor: clickedRowIndex === 11 ? '#53acff' : '#313131' }}>
              <div className="col-md-6 rate col-lg-3 pe-0 first brdr-r">
                  <div className="text">
                      <img src={dollar} alt="" width={50} />
                      <span className='text-white px-4'>NFLX</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={file} alt="" width={40} />
                      <span className='text-white px-4'>200</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5 brdr-r">
                  <div className="text">
                      <img src={rank} alt="" width={40} />
                      <span className='orange rank px-4'>-0.25 %</span>
                  </div>
              </div>
              <div className="col-md-6 rate col-lg-3 pe-0 ps-5">
                  <div className="text">
                      <img src={low_risk} alt="" width={50} />
                      <span className='text-white ps-4'>Low Risk</span>
                  </div>
              </div>
            </div>
            <div className="detailes text-white" style={{ display: displayStates[11] ? 'block' : 'none' }}>
                <p><span className='fw-bold'>$NFLX</span> just announcedan acquisition of <span className='fw-bold'>$NFLX</span>at <span className='fw-bold'>$200 B</span></p>
                <p>This is an <span className='baby-blue'>arbitrage opportunity</span> , with the mix gain being %X if the deal closes , but the possible risk is %Y if the deal fails, If the deal success is % and therfore the recommended play is <span className='baby-blue'>long/short</span> $ABC</p>
            </div>
          </div>
      </section>
  </>
}
