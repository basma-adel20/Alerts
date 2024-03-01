import React from 'react'
import health from '../../assets/images/icons/Health.PNG'
import energy from '../../assets/images/icons/Energy.PNG'
import consumer1 from '../../assets/images/icons/consumer1.PNG'
import consumer2 from '../../assets/images/icons/consumer2.PNG'
import Materiales from '../../assets/images/icons/Materiales.PNG'
import real from '../../assets/images/icons/real.PNG'
import money from '../../assets/images/icons/money.PNG'
import it from '../../assets/images/icons/it.PNG'
import chat from '../../assets/images/icons/chat.PNG'
import utility from '../../assets/images/icons/utility.PNG'
import industry from '../../assets/images/icons/industry.PNG'

export default function Filters() {
  return <>
    <section id='filter' className=' position-absolute p-3 mt-4'>
      <h2 className='text-white text-center'>Filters</h2>
      <div className="filters-applied d-flex justify-content-between">
        <span>Filters Applied</span>
        <span className='text-white'>Clear All</span>
      </div>
      <div className="filters py-1 px-2 mt-1">
        <span>Real Estate <i className='fas fa-xmark'></i></span>
      </div>
      <div className="stock p-3 mt-3">
          <h6 className='text-white'>Stock</h6>
          <div className="search input-icons">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="input-field" placeholder=' $ TICKER'  className='form-control'/>
          </div>
          <div className="industry p-3">
            <h6 className='text-white'>Indusrty</h6>
            <div className="row">
              <div className="col-7 pe-0">
                <ul className='text-white ps-2 pt-1 brdr-left'>
                  <li> <img src={health} alt="health" width={20}/> Health Care</li>
                  <li><img src={Materiales} alt="materiales" width={20}/> Materiales</li>
                  <li> <img src={energy} alt="enery" width={20}/> Energy</li>
                  <li><img src={consumer1} alt="consumer" width={20} /> Consumer Discretionary</li>
                  <li><img src={consumer2} alt="consumer" width={20}/> Consumer Staples</li>
                  <li><img src={real} alt="real" width={20}/> Real Estate</li>
                </ul>
              </div>
              <div className="col-5 pe-0">
                <ul className='text-white ps-2 pt-1 brdr-left'>
                  <li> <img src={it} alt="health" width={20}/> IT</li>
                  <li><img src={chat} alt="materiales" width={20}/> Communication</li>
                  <li> <img src={industry} alt="enery" width={20}/> Industrials</li>
                  <li><img src={utility} alt="consumer" width={20} /> Utilities</li>
                  <li><img src={money} alt="real" width={20}/> Financials</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row px-3">
            <div className="col-6">
              <div className="market">
                <h6 className='text-white mb-3'>Market Cap</h6>
               <form>
                 <label class="parent">Micro
                      <input type="radio" name="radio"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="parent">Small
                      <input type="radio" name="radio"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="parent">Large
                      <input type="radio" name="radio"/>
                      <span class="checkmark"></span>
                    </label>
                </form> 
              </div>
            </div>
            <div className="col-6">
              <div className="level">
                <h6 className='text-white mb-3'>Risk Level</h6>
               <form>
                 <label class="parent">Low Risk
                      <input type="radio" name="radio"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="parent">Mid Risk
                      <input type="radio" name="radio"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="parent">High Risk
                      <input type="radio" name="radio"/>
                      <span class="checkmark"></span>
                    </label>
                </form> 
              </div>
            </div>
          </div>
          <div className="row mx-0 strategy mt-3">
            <div className="col-6">
             <h6 className='text-white mb-3 text-center pe-4'>Strategy</h6>
              <div className='d-flex flex-column justify-content-center align-items-center'>
              <p className='mb-1 light'>Big Option Buys</p>
              <p className='mb-1 text-white chosen light'>Merger Arbitrage</p>
              <p className='mb-1  light'>Short Reports</p>
              </div>
            </div>
            <div className="col-6">
             <h6 className='text-white mb-3 text-center '>Asset</h6>
              <div className='d-flex flex-column justify-content-center align-items-center'>
              <p className='mb-1 light'>Stocks</p>
              <p className='mb-1 text-white chosen light'>Options</p>
              <p className='mb-1  light'>Futures</p>
              </div>
            </div>
          </div>
      </div>
     <div className="text-center">
       <button className='my-3'>Apply</button>
     </div>
    </section>
  </>
}
