import React from 'react'
import './faq.css'
function FAQ() {
  return (
    <>
    <div>
    <h1 style={{textAlign:"center"}}>FAQ</h1>
    <hr style={{border:"0.5px dashed grey", borderStyle:"dashed"}}/>
    </div>
    <div className='faqContainer'>
       <div className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>How can I book an NIKS tour Package </button>
        </option>
        <option value="">
        <p>Book the best tour packages easily on IRCTC’s official website.<br/> Click on ‘Holidays’ on the homepage and select ‘Packages’. <br /> Then choose from a range of land, air, and rail tour packages and <br /> book your dream holiday in a jiffy.</p>
        </option>
       </select>
       </div>
        
       <div className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>What does a tour package includes? </button>
        </option>
        <option value="">
        <p>A tour package is a complete product that includes a variety of services such as transport, accommodation, meals, etc. so that tourists can explore a destination hassle-free. A tour package can be customized according to the user’s requirements to include additional services such as those of a tour guide, road transfers, etc. Browse through a range of exciting tour packages on IRCTC Tourism and book the perfect holiday.</p>
        </option>
       </select>
       </div>

       <div  className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>What is the NIKSTourism insurance policy?</button>
        </option>
        <option value="">
<p>Passengers can insure their train journeys in just 59 paise including GST while booking their e-ticket through IRCTC. This travel insurance is worth up to Rs. 10 lakhs in case of death or permanent total disability and Rs. 7.5 lakhs in case of partial disability.</p>  
      </option>
       </select>
       </div>

       <div  className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>How can I book my retiring room in NIKSTourism </button>
        </option>
        <option value="">
      <p>Retiring room facility is available for IRCTC users. All you need to do is go to the homepage of the IRCTC Tourism website, select ‘Retiring Rooms’ and then book a room of your choice. Once the booking process is complete, you will receive a confirmation on your registered number. In case of queries, you can write to retiringroom@irctc.co.in</p>
        </option>
       </select>
       </div>
       
       <div className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>What is the Swadesh Darshan Train?</button>
        </option>
        <option value="">
         <p>One of the most loved and affordable tourist trains in the country, Swadesh Darshan covers some of India’s most important tourist destinations. It is perfect for travelers and religious pilgrims who wish to explore India on a budget.</p>
        </option>
       </select>
       </div>
        
       <div className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button className='btn'>Some of the famous religious NIKS tour packages are? </button>
        </option>
        <option value="">
           <p>IRCTC Tourism offers a wide array of tour packages for religious pilgrims. Some of the most popular ones include Dev Darshan Tour, Jyotirlinga Yatra with Shirdi Darshan and Statue of Unity, Dakshin Bharat Yatra with Balaji Darshan, Dakshin Bharat Yatra, Dakshin Bharat Aastha Yatra, Dwarkadhish Jyotirlinga Yatra, Jagannath Dham Tour, Temple Triangle of Tamil Nadu, Tirupati tour package, Ramayana Tour Package, and Mata Vaishno Devi Darshan among others.</p>
        </option>
       </select>
       </div>

       <div  className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>How can i book hotel through NIKSTourism?</button>
        </option>
        <option value="">
         <p>Visit the official IRCTC Tourism website and click on ‘IRCTC Hotels’ on the homepage. From budget hotels to deluxe stays, you will find a range of hotels that can be booked easily using your IRCTC account.</p>
        </option>
       </select>
       </div>

       <div  className='desContainer'>
       <select className='yourQues'>
        <option value="">
           <button>How do i book a domestic and international tour package?</button>
        </option>
        <option value="">
  <p>Both domestic and international tour packages are available on IRCTC Tourism. To get started with your booking, visit the official IRCTC Tourism website and below the search bar select domestic or international according to your requirement. Then click on ‘Search’ and you will be shown a list of well-planned packages. Alternatively, you can scroll to the bottom of the homepage and choose a popular destination from the list of domestic and international holidays.</p>
        </option>
       </select>
       </div>
    </div>
    {/* <button style={{height:"1rem", width:"auto",}}>View More</button> */}
    </>
  )
}

export default FAQ
