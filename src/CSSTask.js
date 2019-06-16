import React from 'react';
import { render } from 'react-dom';

class CSSTask extends React.Component {
    render () {
        return (
            <div className='css-task-container'>
                <div className='modal-container'>
                    <header>
                        <p>OpenShift</p>
                        <div className='links'>
                            <p>Item</p>
                            <p>Item</p>
                            <p>Item</p>
                        </div>
                    </header>
                    <div className='main-body-container'>
                        <h3>Panel Content</h3>
                        <p>Elitr nonumy duo elitr aliquyam ea diam at ipsum et ipsum, est sit sit ut at voluptua erat sanctus, dolor justo dolore invidunt sea duo ut takimata. Elitr lorem no est sadipscing sit labore clita.</p>
                        <div className='map'>
                            <div className='pair'>
                                <span>Case ID:</span><span>Case0002b</span>
                            </div>
                            <div className='pair'>
                                <span>Case Name:</span><span>Development case instance</span>
                            </div>
                            <div className='pair'>
                                <span>Status:</span><span className='active'>Active</span>
                            </div>
                            <div className='pair'>
                                <span>State:</span><span>Started on March 16th, 2017</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSTask;