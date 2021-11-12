import React from 'react';
import { GoogleLogout } from 'react-google-react';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

function GoogleLogout() {
    const onSuccess = (res) => {
        alert('Logout Successful!');
    }

    return(
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                style={{ margin: '20px'}}
            />
        </div>
    )
}

export default GoogleLogout;