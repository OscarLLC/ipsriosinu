import React from 'react';
import { GoogleMap,
         withScriptjs,
         withGoogleMap
} from 'react-google-maps'

import { ContentMap } from './styles'

const Map = (props) =>{
    return(
        <ContentMap>
            <GoogleMap 
                defaultZoom={50}
                defaultCenter={{ lat: -8.7585342, lng: 75.8825203}}
            />
        </ContentMap>
    )
}


export default withScriptjs(
    withGoogleMap(
        Map
    )
)
