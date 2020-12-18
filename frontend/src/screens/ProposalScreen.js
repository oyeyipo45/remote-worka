import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'



const ProposalScreen = () => {

    const [proposal, setProposal] = useState('')
    const [bid, setBid] = useState('')
    
    
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("good")
    }
    return (
       
        <section className="proposal bd-grid">
            <div className="proposal-details">
                <h3 class="proposal-title">Enter your proposal details below</h3>
                <form className="proposal-form" onSubmit={submitHandler}>
                    <textarea col="20" row="30" className="bid-details" value={ proposal } placeholder="Enter proposal details here"></textarea>

                    <p class="bid-title">Bid Prize</p>

                    <input type="number"  className="bid-figure" value={bid} placeholder="Enter bid here"/>
                    <button  className="proposal-button" type="submit">Submit Bid</button>
               </form>
            </div>
        </section>
    )
}



export default ProposalScreen;