import React from 'react';

const MessageForm = () => {
    return (
        <div>

            <form  >
                <div class="container">
                    <h1>Send us an email</h1>
                    <hr />

                    <label for="email"><b>Email Address</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="email"><b>Type of inquiry</b></label>
                    <input type="text" placeholder="Inquiry Type" name="inquiry" required />

                    <label for="email"><b>Message</b></label>
                    <input type="text" placeholder="Enter Message" name="message" required />


                    <div class="clearfix">
      <button type="submit" class="connectbtn">SUBMIT</button>
  </div>
                </div>
            </form>
        </div>
    )

}

export default MessageForm;