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

        <div className="login">
                
        <div className="customer-signin">
        <div className="customer-signin-header">
        <h3 className="customer-signin-heading">Enter your proposal details below</h3>

        
        </div>

        <form action="" onSubmit={submitHandler} className="customer-signin-form">

        <label className="proposal-heading">Proposal Details</label>
        <div className="proposal-form-group">
        <textarea col="20" row="50" 
        className="customer-signin-form-input" value={ proposal } onChange={ (e) => setProposal(e.target.value) }  placeholder="Enter proposal details here"></textarea>
        </div>
        <label className="proposal-heading">Bid Prize</label>
        <div className="proposal-form-group">
        <input
            type="text"
            className="customer-signin-form-input"
            placeholder="Bid Price"
            required
            value={bid}
            onChange={(e) => setBid(e.target.value)}
        />
        </div>
        <div className="customer-signin-form-group">
        <button type="submit" className="customer-signin-btn">Place Bid</button>
        </div>
       
        </form>
        </div>
        </div>
    )
}



export default ProposalScreen;