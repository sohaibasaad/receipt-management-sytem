import React, { useState } from 'react'
import QrReader from 'modern-react-qr-reader'

function VerifyPayment() {
    const [data, setData] = useState('No result');
    const [qrdata, setQrData] = useState(false);

    const handleScan = (data) => {
        if (data && !null) {
            setData(data)
        }
    }
    const handleError = async (err) => {
        console.log(err)
        setQrData(true)
    }
    return (

        <div className='row justify-content-center mt-5 mx-0'>
            <div className='col-lg-4'>
                <div>
                    <QrReader
                        style={{ width: '100%' }}
                        delay={1000}
                        onScan={handleScan}
                        onError={handleError}
                        legacyMode={qrdata}
                    />
                    <h6 className='mt-3 text-break'>{data}</h6>
                </div>
            </div>
        </div>


    )
}

export default VerifyPayment
